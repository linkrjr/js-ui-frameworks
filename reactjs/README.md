# React Todo App

A simple todo application built with React, Vite, Material UI, and TypeScript.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete individual todos
- Clear all completed todos
- Todo counter showing completed items
- Material Design UI with gradient header

## Technologies

- **React 18.3.1** - Modern UI library
- **Vite 6.3.2** - Fast build tool and dev server
- **TypeScript 5.7.3** - Type-safe JavaScript
- **Material-UI 5.16.7** - Material Design components for React
- **Emotion 11.13.3** - CSS-in-JS styling library

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

The app will open at `http://localhost:5174`

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
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
├── index.css                  # Global styles
└── components/
    ├── TodoApp.tsx            # Todo application component
    └── TodoApp.css            # Component styles
```

## License

MIT
