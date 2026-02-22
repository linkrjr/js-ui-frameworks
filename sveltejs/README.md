# Svelte Todo App

A simple todo application built with Svelte, Vite, Material UI, and TypeScript.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete individual todos
- Clear all completed todos
- Todo counter showing completed items
- Material Design UI

## Technologies

- **Svelte 4.2.18** - Modern reactive JavaScript framework
- **Vite 5.4.10** - Fast build tool and dev server
- **TypeScript 5.7.3** - Type-safe JavaScript
- **Svelte Material UI 7.0.0** - Material Design components for Svelte

## Getting Started

### Prerequisites

- Node.js (v18+) and npm/pnpm installed

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

Start the development server:

```bash
pnpm run dev
```

The app will open automatically at `http://localhost:5173`

### Build

Build for production:

```bash
pnpm run build
```

The output files will be in the `dist` directory.

### Preview

Preview the production build:

```bash
pnpm run preview
```

## Usage

1. Type a todo in the input field
2. Press Enter or click the "Add" button
3. Click the checkbox to mark a todo as complete
4. Click the delete icon (trash) to remove a todo
5. Use "Clear Completed" to remove all completed todos

## Project Structure

```
src/
├── App.svelte                 # Root component
├── main.ts                    # Entry point
├── app.css                    # Global styles
└── components/
    └── TodoApp.svelte         # Todo application component
```

## License

MIT
