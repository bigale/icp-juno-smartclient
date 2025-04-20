'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { junoService } from '../services/junoService';

interface TaskRecord {
  id: number;
  name: string;
  description: string;
  status: 'Active' | 'Inactive' | 'Pending';
}

declare global {
  interface Window {
    isc: {
      VLayout: any;
      HLayout: any;
      IButton: any;
      LayoutSpacer: any;
      ListGrid: any;
      DataSource: any;
      Auth: any;
      ask: (message: string, callback: (value: boolean) => void) => void;
      say: (message: string) => void;
      warn: (message: string) => void;
    };
  }
}

export default function CRUDGrid() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auth status check effect
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await junoService.ensureInitialized();
        const authStatus = await junoService.isAuthenticated();
        setIsAuthenticated(authStatus);
      } catch (err) {
        console.error('Auth check failed:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Listen for auth state changes
    const handleAuthChange = (event: CustomEvent) => {
      setIsAuthenticated(event.detail.authenticated);
      if (!event.detail.authenticated) {
        // Clear grid data when user is logged out
        const grid = window.isc.DataSource.get("taskGrid");
        if (grid) {
          grid.setData([]);
        }
        // Use proper Next.js navigation options
        router.replace('/', { scroll: false });
      }
    };

    window.addEventListener('junoAuthChange', handleAuthChange as EventListener);
    checkAuth();

    return () => {
      window.removeEventListener('junoAuthChange', handleAuthChange as EventListener);
    };
  }, [router]);

  // Grid initialization and data loading effect
  useEffect(() => {
    if (!isAuthenticated || !window.isc) {
      return;
    }

    const init = async () => {
      try {
        // Load records
        const records = await junoService.getRecords();

        // Create the layout container first
        const mainLayout = window.isc.VLayout.create({
          width: "100%",
          height: "100%",
          members: []
        });

        // Create toolbar with buttons
        const toolbar = window.isc.HLayout.create({
          height: 40,
          padding: 5,
          layoutMargin: 5,
          membersMargin: 10,
          members: [
            window.isc.IButton.create({
              title: "Add Record",
              click: () => {
                const nextId = Math.max(0, ...records.map(r => r.id)) + 1;
                const newRecord: TaskRecord = {
                  id: nextId,
                  name: "New Record",
                  description: "Enter description",
                  status: "Pending"
                };
                
                taskGrid.addData(newRecord);
                junoService.addRecord(newRecord);
              }
            }),
            window.isc.LayoutSpacer.create({ width: "*" }),
            window.isc.IButton.create({
              title: "Logout",
              click: handleLogout
            })
          ]
        });

        // Create the grid
        const taskGrid = window.isc.ListGrid.create({
          ID: "taskGrid",
          width: "100%",
          height: "*",
          alternateRecordStyles: true,
          showAllRecords: true,
          leaveScrollbarGap: false,
          showHeaderContextMenu: false,
          canEdit: true,
          editEvent: "doubleClick",
          autoSaveEdits: true,
          warnOnRemoval: true,
          warnOnRemovalMessage: "Are you sure you want to delete the selected record(s)?",
          canRemoveRecords: true,
          fields: [
            { name: "id", title: "ID", width: 60, canEdit: false },
            { name: "name", title: "Name", canEdit: true },
            { name: "description", title: "Description", canEdit: true },
            { 
              name: "status", 
              title: "Status",
              canEdit: true,
              type: "select",
              valueMap: ["Active", "Inactive", "Pending"]
            }
          ],
          keyPress: function(event: KeyboardEvent) {
            if (event.key === "Delete") {
              const selectedRecords = this.getSelectedRecords() as TaskRecord[];
              if (selectedRecords && selectedRecords.length > 0) {
                const self = this;
                window.isc.ask(this.warnOnRemovalMessage, async (value: boolean) => {
                  if (value) {
                    try {
                      // Create array of promises for all delete operations
                      const deletePromises = selectedRecords.map(async (record: TaskRecord) => {
                        await junoService.deleteRecord(record.id);
                        return record.id;
                      });

                      // Wait for all deletes to complete
                      await Promise.all(deletePromises);
                      
                      // Remove records from grid only after successful deletion
                      self.removeSelectedData();

                      // Show success message
                      window.isc.say("Selected records were deleted successfully");
                    } catch (err) {
                      // Show error dialog to user
                      window.isc.warn("Failed to delete one or more records. Please try again.");
                      console.error('Delete operation failed:', err);
                    }
                  }
                });
                return false;
              }
            }
            return true;
          },
          cellChanged: (record: TaskRecord, newValue: string, oldValue: string, rowNum: number, colNum: number, viewer: { getField: (colNum: number) => { name: string } }) => {
            const field = viewer.getField(colNum);
            const updatedRecord = { ...record, [field.name]: newValue };
            junoService.updateRecord(updatedRecord);
          }
        });

        // Add components to the layout
        mainLayout.addMembers([toolbar, taskGrid]);

        // Set initial data
        taskGrid.setData(records);
      } catch (err) {
        console.error("Failed to initialize grid:", err);
      }
    };

    init();

    // Cleanup function
    return () => {
      const grid = window.isc.DataSource.get("taskGrid");
      if (grid) {
        grid.destroy();
      }
    };
  }, [isAuthenticated]);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await junoService.login();
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      // Clear SmartClient session using proper methods
      if (window.isc && window.isc.Auth) {
        window.isc.Auth.logOut();
      }

      // Clear any grid data
      const grid = window.isc.DataSource.get("taskGrid");
      if (grid) {
        grid.setData([]);
      }

      // Perform Juno logout
      await junoService.logout();
      
      // Use window.location for a full page reload after logout
      window.location.href = '/';
    } catch (err) {
      console.error('Logout failed:', err);
      window.isc.warn("Logout failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Please log in to access records</h2>
        <button onClick={handleLogin}>Log in with Internet Identity</button>
      </div>
    );
  }

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}