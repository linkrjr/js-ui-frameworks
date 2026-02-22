# Qwik Todo App

A simple todo application built with Qwik philosophy, Vite, Material Design, and TypeScript.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete individual todos
- Clear all completed todos
- Todo counter showing completed items
- Material Design UI with gradient header
- Qwik-like reactive signal system with lazy evaluation

## Technologies

- **Qwik-inspired patterns** - Reactive signals with lazy evaluation
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

The app will open at `http://localhost:5177`

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
├── main.ts                     # Entry point
├── todo.ts                     # TodoApp class with Qwik-like patterns
└── styles.css                  # Material Design styles
```

## Architecture

This Qwik-inspired implementation demonstrates:
- **Reactive Signals** - Custom Signal class mimicking Qwik's reactivity system
- **Lazy Evaluation** - Event handlers attached on-demand
- **Material Design** - Google Material Design styling
- **Type Safety** - Full TypeScript support
- **Zero Framework Overhead** - Vanilla JavaScript with TypeScript

The app uses Qwik principles with a lightweight implementation:
- Signals for reactive state management
- Lazy event listener attachment
- HTML-based rendering with TypeScript

## License

MIT
