# AI_README.md

## Project Context
- Next.js 15 App Router
- SmartClient LGPL for UI
- Deployed to Juno/ICP as static assets
- Linux development environment

## AI Instructions
- Do not use <Html>, <Head>, or <body> in app/layout.tsx
- All global styles/scripts must go in app/head.tsx
- Use default exports for all pages/components
- SmartClient initialization and scripts must only run in the browser (client-side)
- Do not use Node.js-only APIs in frontend code
- If using App Router, do not include pages/_document.tsx

## Known Issues
- SmartClient must be initialized in the browser only
- SSR is not supported for SmartClient widgets
- Next.js build is stricter than dev; always check for export/import and document structure issues

## Previous Fixes
- Removed pages/_document.tsx to fix build error
- Moved all <link> and <script> tags to app/head.tsx
- Ensured not-found.tsx uses default export
- Cleaned up app/layout.tsx to only render {children}

## Frameworks & Docs
- [Next.js App Router](https://nextjs.org/docs/app)
- [SmartClient LGPL](https://www.smartclient.com/product/lgpl.jsp)
- [Juno ICP Platform](https://juno.build/)

## Browser Automation
- Browser automation is important for end-to-end (E2E) testing of SmartClient UIs.
- Cypress is a recommended tool for automating and testing SmartClient applications.
- SmartClient provides official documentation and integration guidance for Cypress:
  - See: https://smartclient.com/smartclient-release/isomorphic/system/reference/?id=group..smartClientCypress
- Cypress can be used to simulate user interactions, verify UI state, and automate regression testing for SmartClient-based apps.
- When using Cypress with SmartClient, follow best practices from the SmartClient documentation for reliable selectors and stable tests.
