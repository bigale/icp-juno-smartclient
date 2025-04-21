import { defineConfig } from '@junobuild/config';

export default defineConfig(() => ({
  satellite: {
    ids: {
      development: process.env.SATELLITE_ID_DEVELOPMENT || '',
      production: process.env.SATELLITE_ID_PRODUCTION || ''
    }
  }
}));