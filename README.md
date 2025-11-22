**Project Overview**

This repository is a small React + Vite demo app named `ai-product-recommender`. It showcases a product list UI and contains hooks for simple AI-enhanced features (the project includes `@google/generative-ai` as a dependency).

**Quick Start**

- **Install:** `npm install`
- **Run (dev):** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Lint:** `npm run lint`

**Features**

- **React + Vite**: fast dev server and HMR
- **Tailwind CSS**: utility-first styling
- **Simple product dataset**: `src/data/products.js`
- **Example AI dependency**: `@google/generative-ai` (not wired to a backend by default)

**Environment & AI notes**

- If you plan to call Google Generative AI APIs from the app or a backend, provide credentials via environment variables (do not commit keys to the repository). Example: set `GOOGLE_API_KEY` or use your preferred auth method and a secure server-side proxy.

**Project Structure (important files)**

- `src/` : React source code
- `src/data/products.js` : product list and local image imports
- `src/assets/products/` : product images (e.g. `iphone13.jpg`)
- `src/components/` : UI components (e.g. `ProductCard.jsx`, `SearchBar.jsx`)
- `index.html`, `vite.config.js`, `package.json`

**Using local images in `products.js`**

- Import an image at the top of `src/data/products.js`, for example: `import iphone13 from "../assets/products/iphone13.jpg";`
- Then reference the imported variable in the product object: `photo: iphone13,`


**Contributing & Next Steps**

- Improve AI integration by adding a secure backend to call the Generative AI APIs.
- Add tests and TypeScript types for stronger guarantees.

**License**

- MIT-style or as chosen by the project owner.

If you'd like, I can: update `products.js` to reference other local images, add a small backend proxy example for the Generative AI calls, or create usage examples for new components.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
