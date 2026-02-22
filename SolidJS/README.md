# SolidJS Todo App

A simple todo application built with SolidJS, Vite, Material Design, and TypeScript.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete individual todos
- Clear all completed todos
- Todo counter showing completed items
- Material Design UI with gradient header
- Reactive state management with SolidJS

## Technologies

- **SolidJS 1.9.5** - A declarative JavaScript library for building user interfaces
- **Vite 6.3.2** - Fast build tool and dev server
- **TypeScript 5.7.3** - Type-safe JavaScript
- **Material Design** - Google Material Design styling and icons

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

The app will open at `http://localhost:5176`

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
├── index.tsx                   # Entry point
├── App.tsx                     # Root component
├── styles.css                  # Material Design styles
└── components/
    └── TodoApp.tsx             # Todo application component
```

## Key Features

This SolidJS implementation demonstrates:
- **Reactive state with createSignal** - Fine-grained reactivity system
- **For component** - Efficient list rendering
- **Event handling** - Input and button event management
- **Conditional rendering** - Using Solid's conditional syntax
- **Material Design styling** - Google Material Design UI

## License

MIT
