import { initJuno, setDoc, getDoc, deleteDoc, listDocs, authSubscribe, User } from '@junobuild/core';
import { AuthClient } from '@dfinity/auth-client';
import { DataRecord } from '../types/types';

const COLLECTION = 'records';
let initialized = false;
let authClient: AuthClient | null = null;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const initializeJuno = async () => {
  if (typeof window === 'undefined') return;
  if (initialized) return;

  const maxRetries = 3;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await initJuno({
        satelliteId: process.env.NEXT_PUBLIC_SATELLITE_ID || '',
      });

      // Initialize AuthClient with custom idle handling
      authClient = await AuthClient.create({
        idleOptions: {
          // Disable the default idle callback that would reload the page
          disableDefaultIdleCallback: true,
          // Still keep the 30 minute idle timeout
          idleTimeout: 1000 * 60 * 30
        }
      });

      // Subscribe to auth state changes but don't force reload
      authSubscribe((user: User | null) => {
        if (user === null) {
          // Instead of reloading, we'll let the UI handle the state change
          window.dispatchEvent(new CustomEvent('junoAuthChange', { 
            detail: { authenticated: false } 
          }));
        }
      });

      await delay(1000); // Add a 1 second delay after initialization
      initialized = true;
      return;
    } catch (err) {
      retries++;
      if (retries === maxRetries) {
        console.error('Failed to initialize Juno after multiple attempts:', err);
        throw err;
      }
      await delay(1000);
    }
  }
};

export const junoService = {
  async ensureInitialized() {
    if (!initialized) {
      await initializeJuno();
    }
  },

  async login() {
    await this.ensureInitialized();
    
    if (!authClient) {
      throw new Error('Auth client not initialized');
    }

    const identityProvider = process.env.NEXT_PUBLIC_INTERNET_IDENTITY_URL || 'https://identity.internetcomputer.org';
    
    return new Promise<void>((resolve, reject) => {
      if (!authClient) {
        reject(new Error('Auth client not initialized'));
        return;
      }

      authClient.login({
        identityProvider,
        onSuccess: () => {
          window.dispatchEvent(new CustomEvent('junoAuthChange', { 
            detail: { authenticated: true } 
          }));
          resolve();
        },
        onError: (error) => {
          console.error('Login failed:', error);
          reject(error);
        }
      });
    });
  },

  async logout() {
    if (!authClient) {
      throw new Error('Auth client not initialized');
    }
    await authClient.logout();
    // Dispatch auth change event
    window.dispatchEvent(new CustomEvent('junoAuthChange', { 
      detail: { authenticated: false } 
    }));
  },

  async isAuthenticated() {
    if (!authClient) {
      return false;
    }
    return authClient.isAuthenticated();
  },

  async addRecord(record: DataRecord): Promise<DataRecord> {
    try {
      await this.ensureInitialized();
      if (!await this.isAuthenticated()) {
        throw new Error('Authentication required');
      }
      
      // When adding a new record, first check if it exists
      const existingDoc = await getDoc({
        collection: COLLECTION,
        key: `record_${record.id}`
      });

      // If it exists, use updateRecord instead
      if (existingDoc) {
        return await this.updateRecord(record);
      }

      // For completely new records, use setDoc without version
      await setDoc({
        collection: COLLECTION,
        doc: {
          key: `record_${record.id}`,
          data: record,
          description: 'Record created at ' + new Date().toISOString()
        }
      });
      
      return record;
    } catch (err) {
      console.error('Error adding record to Juno:', err);
      throw err;
    }
  },

  async updateRecord(record: DataRecord, retryCount = 0, maxRetries = 3): Promise<DataRecord> {
    try {
      await this.ensureInitialized();
      if (!await this.isAuthenticated()) {
        throw new Error('Authentication required');
      }

      // Get the current version of the document
      const currentDoc = await getDoc({
        collection: COLLECTION,
        key: `record_${record.id}`
      });

      // If document doesn't exist, create it as new
      if (!currentDoc) {
        return await this.addRecord(record);
      }

      try {
        // When updating, include version and description
        await setDoc({
          collection: COLLECTION,
          doc: {
            key: `record_${record.id}`,
            data: record,
            description: 'Record updated at ' + new Date().toISOString(),
            version: currentDoc.version
          }
        });

        return record;
      } catch (error) {
        // If we get a version mismatch error, implement exponential backoff retry
        const updateErr = error as Error;
        if (updateErr.message.includes('version_outdated_or_future') && retryCount < maxRetries) {
          // Exponential backoff delay
          const delay = Math.min(1000 * Math.pow(2, retryCount), 5000);
          await new Promise(resolve => setTimeout(resolve, delay));
          
          // Recursive retry with incremented counter
          return this.updateRecord(record, retryCount + 1, maxRetries);
        }
        
        throw error;
      }
    } catch (err) {
      console.error(`Error updating record in Juno (attempt ${retryCount + 1}/${maxRetries}):`, err);
      throw err;
    }
  },

  async deleteRecord(id: number, retryCount = 0, maxRetries = 3): Promise<boolean> {
    try {
      await this.ensureInitialized();
      if (!await this.isAuthenticated()) {
        throw new Error('Authentication required');
      }

      try {
        // Fetch the current document to get its version
        const currentDoc = await getDoc({
          collection: COLLECTION,
          key: `record_${id}`
        });

        if (!currentDoc) {
          throw new Error('Record not found');
        }

        await deleteDoc({
          collection: COLLECTION,
          doc: {
            key: `record_${id}`,
            data: {}, // Include empty data object to satisfy type requirements
            version: currentDoc.version,
            description: 'Record deleted at ' + new Date().toISOString()
          }
        });
        return true;
      } catch (error) {
        // If we get a version mismatch error, implement exponential backoff retry
        const deleteErr = error as Error;
        if (deleteErr.message.includes('version_outdated_or_future') && retryCount < maxRetries) {
          // Exponential backoff delay
          const delay = Math.min(1000 * Math.pow(2, retryCount), 5000);
          await new Promise(resolve => setTimeout(resolve, delay));
          
          // Recursive retry with incremented counter
          return this.deleteRecord(id, retryCount + 1, maxRetries);
        }
        
        throw error;
      }
    } catch (err) {
      console.error(`Error deleting record from Juno (attempt ${retryCount + 1}/${maxRetries}):`, err);
      throw err;
    }
  },

  async getRecords(): Promise<DataRecord[]> {
    try {
      await this.ensureInitialized();
      if (!await this.isAuthenticated()) {
        throw new Error('Authentication required');
      }
      const result = await listDocs({
        collection: COLLECTION,
      });
      
      return result.items
        .map(item => item.data as DataRecord)
        .sort((a, b) => a.id - b.id);
    } catch (err) {
      console.error('Error getting records from Juno:', err);
      
      // Check if this is a collection not found error
      const error = err as Error;
      if (error.toString().includes('Collection') && error.toString().includes('not found')) {
        console.log('Initializing collection with first record...');
        // Initialize collection with a dummy record
        try {
          const initialRecord: DataRecord = {
            id: 1,
            name: 'Example Record',
            description: 'Initial record created when collection is empty',
            status: 'Pending'
          };
          await this.addRecord(initialRecord);
          return [initialRecord];
        } catch (initErr) {
          console.error('Error initializing collection:', initErr);
          throw initErr;
        }
      }
      throw err;
    }
  }
};