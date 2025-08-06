# Claude Code Project Instructions

This is a React Single Page Application starter template built with modern tooling and best practices.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: TanStack Router (code-based routing)
- **Data Fetching**: TanStack Query
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite
- **UI Components**: Shadcn/ui compatible setup
- **State Management**: Ready for TanStack Store integration
- **Testing**: Vitest with React Testing Library
- **Linting**: ESLint with TanStack config
- **Formatting**: Prettier

## Project Structure

```
src/
├── components/       # Reusable UI components
├── db/              # Database collections and entity types
├── integrations/     # Integration-specific code (TanStack Query setup)
├── lib/             # Utility functions
├── routes/          # Route components
├── App.tsx          # Main app component
├── main.tsx         # Application entry point with routing setup
└── styles.css       # Global styles and Tailwind imports
```

## Development Commands

Always run these commands to ensure code quality:

```bash
npm run dev          # Start development server on port 3000
npm run build        # Build for production (runs Vite build + TypeScript check)
npm run test         # Run tests with Vitest
npm run lint         # Run ESLint
npm run format       # Run Prettier
npm run check        # Run both Prettier and ESLint with auto-fix
```

## Key Conventions

### 1. **Routing**

- Currently using code-based routing in `main.tsx`
- Routes are defined using `createRoute` from TanStack Router
- Add new routes to the `routeTree` in main.tsx
- The project includes instructions for migrating to file-based routing if needed

### 2. **Component Organization**

- Place reusable components in `src/components/`
- Route-specific components go in `src/routes/`
- Use TypeScript for all components
- Follow existing component patterns (check Header.tsx for reference)

### 3. **Styling**

- Use Tailwind CSS classes for styling
- The project uses Tailwind CSS v4 with the new Vite plugin
- Tailwind Animate is available for animations
- Global styles are in `src/styles.css`

### 4. **State Management**

- TanStack Query is set up for server state management
- Query client is configured in `src/integrations/tanstack-query/`
- For local state, the project is ready for TanStack Store integration

### 5. **Data Management**

- Use TanStack Table for table UI generation
- Available Entity Types and TanStack DB collections are generated in `./src/db/`
- Check existing Types and Collections in `./src/db/` before creating a new data source
- Use `UserCollection.getMyInfo()` for profile information of the logged-in user
- Always check for shadcn components using `pnpx shadcn@latest add [component]` first, then wrap with additional functionality if necessary

### 6. **TypeScript Configuration**

- Strict mode is enabled
- Path alias `@/` is configured to point to `src/`
- Use ES2022 features
- Module resolution is set to "bundler" mode

### 7. **Testing**

- Tests use Vitest with jsdom environment
- Test files should use `.test.tsx` or `.test.ts` extension
- React Testing Library is available for component testing

### 8. **Code Quality**

- ALWAYS run `npm run check` before considering work complete
- Follow the existing ESLint configuration (TanStack config)
- Use Prettier for consistent formatting
- No unused variables or parameters allowed

## Important Notes

2. **Shadcn Components**: Use `pnpx shadcn@latest add [component]` to add UI components

3. **Environment**: The project uses Vite's environment variable system. Use `import.meta.env` for env vars

4. **Performance**: Web Vitals is integrated for performance monitoring

5. **Build Tool**: The project uses Vite for fast development and optimized production builds

## Before Completing Any Task

1. Run `npm run build` to ensure the TypeScript compilation succeeds
2. Run `npm run test` if tests exist for the modified code
3. Run `npm run check` to fix and verify code formatting and linting
4. Verify the development server runs without errors

## Adding New Features

When adding new features:

1. Follow the existing file and folder structure
2. Use TypeScript with proper type definitions
3. Add appropriate routing if needed
4. Include error boundaries for robust error handling
5. Consider adding tests for critical functionality
6. Update this file if introducing new patterns or dependencies

## Backend Operations

- The only available backend operations are available in `openapi.json` file which is in OpenAPI 3.1 format
- All available entities are generated into `src/db` folder
- There is no feature to add new data endpoints for now
