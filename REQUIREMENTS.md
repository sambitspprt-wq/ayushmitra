# Requirements for Ayush Mitra (AI Healthcare Chatbot with Supabase)

## Core Requirements
- Node.js (v18 or later recommended)
- npm (v9 or later recommended)

## Project Dependencies
- React (18.3.1)
- React DOM (18.3.1)
- Vite (5.4.2)
- @supabase/supabase-js (2.57.4)
- lucide-react (0.344.0)

## Development Dependencies
- TypeScript (5.5.3)
- @types/react (18.3.5)
- @types/react-dom (18.3.0)
- @vitejs/plugin-react (4.3.1)
- Tailwind CSS (3.4.1)
- PostCSS (8.4.35)
- Autoprefixer (10.4.18)
- ESLint (9.9.1)
- @eslint/js (9.9.1)
- typescript-eslint (8.3.0)
- eslint-plugin-react-hooks (5.1.0-rc.0)
- eslint-plugin-react-refresh (0.4.11)
- globals (15.9.0)

## Project Structure
- `src/` - Source code (components, main app, styles, supabase client)
- `index.html` - Main HTML file
- `vite.config.ts` - Vite configuration
- `tailwind.config.js`, `postcss.config.js` - Tailwind and PostCSS config
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` - TypeScript configs

## How to Install
1. Clone the repository.
2. Run `npm install` to install all dependencies.
3. To start the development server, run `npm run dev`.

## Environment Variables
- You must set up Supabase environment variables in a `.env` file:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

## Optional
- Recommended extensions: Prettier, ESLint, Tailwind CSS IntelliSense, Reactjs code snippets.

---
For any issues, ensure your Node.js and npm versions are up to date and all environment variables are set correctly.
