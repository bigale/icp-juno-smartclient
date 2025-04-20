# SmartClient React CRUD with Juno

A CRUD (Create, Read, Update, Delete) application built using SmartClient React components and deployed on the Internet Computer using Juno.

## Technologies Used

- Next.js 13+ (App Router)
- SmartClient React Components
- TypeScript
- Juno (for Internet Computer deployment)
- Internet Computer blockchain

## Features

- Full CRUD operations implementation
- Grid-based data display and manipulation
- Type-safe development with TypeScript
- Server-side rendering with Next.js
- Blockchain deployment via Internet Computer

## Project Structure

```
├── app/
│   ├── components/     # React components
│   ├── services/      # API and service layer
│   ├── types/         # TypeScript type definitions
│   └── layout.tsx     # Root layout configuration
├── public/
│   └── isomorphic/    # SmartClient assets
├── isomorphic/        # SmartClient React components
└── .github/
    └── workflows/
        └── deploy.yaml # GitHub Actions deployment workflow
```

## Setup and Configuration

1. SmartClient Integration
   - Configured SmartClient React components with TypeScript support
   - Set up proper module loading in layout.tsx
   - Integrated SmartClient's styling system using the Shiva skin

2. Favicon Configuration
   - Properly configured favicon.ico in the public directory
   - Set up metadata in app/layout.tsx for correct favicon serving

3. SmartClient Module Loading
   ```typescript
   // Key modules loaded in sequence
   - ISC_Core.js
   - ISC_Foundation.js
   - ISC_Containers.js
   - ISC_Grids.js
   - ISC_Forms.js
   - ISC_DataBinding.js
   ```

## Deployment

The application is deployed to the Internet Computer using Juno. The deployment process involves:

1. Building the Next.js application
2. Deploying to the IC network using the command:
   ```bash
   juno deploy --network ic
   ```

## Development

To run the application locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Key Components

- `CRUDGrid.tsx`: Main data grid component implementing CRUD operations
- `junoService.ts`: Service layer for Internet Computer interactions
- `layout.tsx`: Root layout with SmartClient initialization

## Internet Computer Integration

The application is deployed as a canister on the Internet Computer blockchain, providing:

- Decentralized hosting
- Blockchain-based data persistence
- Automatic scalability

## Notes

- The application uses SmartClient's Shiva skin theme
- All SmartClient assets are properly served from the /public directory
- TypeScript definitions are maintained for type safety

## Technical Implementation

### Grid Component
The CRUDGrid component is built using SmartClient's grid functionality with the following features:

- ListGrid-based implementation for efficient data handling
- Real-time data validation
- Built-in sorting and filtering capabilities
- Responsive layout design
- Integrated with SmartClient's DataBinding system

### Service Layer
The junoService integration provides:

- Canister-based data persistence
- Automated type conversion between TypeScript and Candid
- Optimized data transfer with the Internet Computer
- Transaction management for data operations

### SmartClient Integration

The application leverages several key SmartClient modules:
- Core framework (ISC_Core.js)
- UI foundation layer (ISC_Foundation.js)
- Layout containers (ISC_Containers.js)
- Advanced grid functionality (ISC_Grids.js)
- Form handling (ISC_Forms.js)
- Data binding system (ISC_DataBinding.js)

### Type Safety

The project maintains type safety through:
- Comprehensive TypeScript definitions for SmartClient components
- Interface definitions for data models
- Type-checked service layer interactions
- Automated type generation for Candid interfaces

### Styling and Theme

The application uses SmartClient's Shiva skin theme with:
- Responsive grid layouts
- Modern UI components
- Customizable theming system
- Cross-browser compatibility

### Performance Optimizations

Several optimizations have been implemented:
- Efficient data paging in the grid
- Smart caching of grid data
- Optimized SmartClient asset loading
- Background module loading for improved initial load time

## Requirements

- Node.js 16+
- npm or yarn
- Internet Computer SDK (for local development)
- dfx CLI (for canister management)

## Environment Variables

The application uses the following environment variables that need to be configured:

```env
# Required - Juno Configuration
NEXT_PUBLIC_SATELLITE_ID=your_satellite_id_here  # Your Juno satellite ID for development/production

# Optional - Development Configuration
NODE_ENV=development                             # Set to 'production' for production builds
```

### Environment Setup

1. Create a `.env.local` file in the root directory for local development:
   ```bash
   cp .env.example .env.local
   ```

2. Update the environment variables in `.env.local` with your values

3. For production deployment, set these environment variables in your hosting platform or GitHub Secrets

## GitHub Actions Deployment

This project includes automated deployment using GitHub Actions. The workflow will:
- Build the application
- Run tests
- Deploy to the Internet Computer network using Juno

### Setting Up GitHub Actions

1. Add the following secrets to your GitHub repository (Settings > Secrets and Variables > Actions):
   - `SATELLITE_ID_PRODUCTION`: Your production Juno satellite ID
   - `SATELLITE_ID_DEVELOPMENT`: Your development Juno satellite ID

2. The workflow will automatically deploy when:
   - Changes are pushed to the `main` branch (production deployment)
   - Pull requests are created (development deployment)

### Manual Deployment

You can also trigger deployments manually:

1. Go to your GitHub repository's Actions tab
2. Select the "Deploy" workflow
3. Click "Run workflow"
4. Choose the target environment (development/production)

## Juno Configuration

The Juno deployment configuration is managed through environment variables instead of hardcoded values. The `juno.config.ts` file uses these environment variables:

```typescript
export default defineConfig({
  satellite: {
    ids: {
      development: process.env.SATELLITE_ID_DEVELOPMENT,
      production: process.env.SATELLITE_ID_PRODUCTION
    },
    source: '.next',
    predeploy: ['npm run build']
  }
});
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

This project is MIT licensed. See the LICENSE file for details.
