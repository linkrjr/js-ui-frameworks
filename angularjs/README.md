# AngularJS Todo App

A simple todo application built with AngularJS, Vite, Material Design, and TypeScript.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete individual todos
- Clear all completed todos
- Todo counter showing completed items
- Material Design UI with gradient header
- Two-way data binding with AngularJS

## Technologies

- **AngularJS 1.8.3** - The original dynamic web framework
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

The app will open at `http://localhost:5178`

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
├── main.ts                     # AngularJS controller and app setup
└── styles.css                  # Material Design styles
```

## Architecture

This AngularJS implementation demonstrates:
- **Two-way data binding** - ng-model for reactive form inputs
- **ng-repeat** - Efficient list rendering
- **ng-click/ng-keypress** - Event handling
- **ng-class** - Dynamic class binding
- **$scope** - AngularJS dependency injection
- **Material Design styling** - Google Material Design UI

AngularJS is the original JavaScript framework (2010) that pioneered many modern framework concepts.

## License

MIT
