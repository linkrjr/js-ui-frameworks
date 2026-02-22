# Vue 3 + TypeScript + Vite

This is a basic Vue.js 3 project configured with TypeScript and Vite as the development server.

## Quick Start

### Prerequisites
- Node.js (v14.0 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The development server will start at `http://localhost:5173` with hot module replacement (HMR) enabled.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable Vue components
├── assets/          # Static assets (images, fonts, etc.)
├── App.vue          # Root component
├── main.ts          # Application entry point
└── style.css        # Global styles

public/             # Static files served as-is
index.html          # HTML entry point
vite.config.ts      # Vite configuration
tsconfig.json       # TypeScript configuration
```

## Project Setup

### Technology Stack
- **Framework**: Vue.js 3
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production with type checking
- `npm run preview` - Preview the production build locally

## IDE Setup

### Recommended Extensions

For Visual Studio Code:
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Learn More

- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Guide for Vue](https://vuejs.org/guide/typescript/overview.html)
- [Vite Documentation](https://vitejs.dev/)
- [Vite Vue Guide](https://vitejs.dev/guide/ssr.html#setting-up-the-dev-server)

