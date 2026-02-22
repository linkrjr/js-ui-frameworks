# HTMX Todo App

A simple todo application built with HTMX, Vite, Material Design, and TypeScript.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete individual todos
- Clear all completed todos
- Todo counter showing completed items
- Material Design UI with gradient header
- Built with HTMX philosophy (interactive HTML)

## Technologies

- **HTMX 1.10.0** - Interactive HTML without much JavaScript
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

The app will open at `http://localhost:5175`

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
├── todo.ts                     # Todo application class
└── styles.css                  # Material Design styles
```

## Architecture

This HTMX todo app demonstrates:
- **Declarative HTML rendering** - Using TypeScript to generate HTML templates
- **Event delegation** - Efficient event handling on dynamically created elements
- **Material Design** - Google Material Design styling and icons
- **Type safety** - Full TypeScript support for robust code

The app uses vanilla JavaScript with TypeScript for type safety, combined with Material Design styling to create an interactive todo application.

## License

MIT
