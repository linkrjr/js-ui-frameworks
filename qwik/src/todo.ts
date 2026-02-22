interface Todo {
  id: number
  text: string
  completed: boolean
}

// Simple Qwik-like Signal implementation
class Signal<T> {
  private value_: T
  private subscribers: Set<() => void> = new Set()

  constructor(initial: T) {
    this.value_ = initial
  }

  get value(): T {
    return this.value_
  }

  set value(val: T) {
    this.value_ = val
    this.notify()
  }

  subscribe(fn: () => void) {
    this.subscribers.add(fn)
    return () => this.subscribers.delete(fn)
  }

  private notify() {
    this.subscribers.forEach((fn) => fn())
  }
}

export class TodoApp {
  private todos: Signal<Todo[]>
  private inputValue: Signal<string>
  private nextId: Signal<number>
  private container: HTMLElement

  constructor(containerId: string) {
    const element = document.getElementById(containerId)
    if (!element) {
      throw new Error(`Container with id "${containerId}" not found`)
    }
    this.container = element
    this.todos = new Signal<Todo[]>([])
    this.inputValue = new Signal<string>('')
    this.nextId = new Signal<number>(1)

    // Subscribe to changes
    this.todos.subscribe(() => this.render())
    this.inputValue.subscribe(() => this.render())
  }

  private addTodo(): void {
    const trimmed = this.inputValue.value.trim()
    if (trimmed) {
      this.todos.value = [
        ...this.todos.value,
        {
          id: this.nextId.value,
          text: trimmed,
          completed: false,
        },
      ]
      this.nextId.value++
      this.inputValue.value = ''
    }
  }

  private toggleTodo(id: number): void {
    this.todos.value = this.todos.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }

  private deleteTodo(id: number): void {
    this.todos.value = this.todos.value.filter((todo) => todo.id !== id)
  }

  private clearCompleted(): void {
    this.todos.value = this.todos.value.filter((todo) => !todo.completed)
  }

  private handleInputKeyPress(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.addTodo()
    }
  }

  private attachEventListeners(): void {
    const input = this.container.querySelector('.todo-input') as HTMLInputElement
    if (input) {
      input.addEventListener('keypress', (e) => this.handleInputKeyPress(e))
      input.addEventListener('input', (e) => {
        this.inputValue.value = (e.target as HTMLInputElement).value
      })
    }

    const addBtn = this.container.querySelector('.btn-add') as HTMLButtonElement
    if (addBtn) {
      addBtn.addEventListener('click', () => this.addTodo())
    }

    const checkboxes = this.container.querySelectorAll(
      '.todo-checkbox'
    ) as NodeListOf<HTMLInputElement>
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        const id = parseInt((e.target as HTMLInputElement).getAttribute('data-id') || '0')
        this.toggleTodo(id)
      })
    })

    const deleteButtons = this.container.querySelectorAll(
      '.btn-delete'
    ) as NodeListOf<HTMLButtonElement>
    deleteButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = parseInt((e.currentTarget as HTMLButtonElement).getAttribute('data-id') || '0')
        this.deleteTodo(id)
      })
    })

    const clearBtn = this.container.querySelector('.btn-clear') as HTMLButtonElement
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearCompleted())
    }
  }

  render(): void {
    const todos = this.todos.value
    const completedCount = todos.filter((t) => t.completed).length
    const totalCount = todos.length

    const todoListHtml =
      todos.length === 0
        ? '<div class="empty-state"><p>No todos yet. Add one to get started!</p></div>'
        : `
      <div class="todo-list">
        ${todos
          .map(
            (todo) => `
          <div class="todo-item ${todo.completed ? 'completed' : ''}">
            <input 
              type="checkbox" 
              class="todo-checkbox" 
              data-id="${todo.id}" 
              ${todo.completed ? 'checked' : ''}
            />
            <span class="todo-text">${this.escapeHtml(todo.text)}</span>
            <button class="btn-delete" data-id="${todo.id}" title="Delete">
              delete
            </button>
          </div>
        `
          )
          .join('')}
      </div>
    `

    const actionsHtml =
      todos.length > 0
        ? `
      <div class="actions">
        <button class="btn btn-secondary btn-clear">Clear Completed</button>
      </div>
    `
        : ''

    this.container.innerHTML = `
      <div class="todo-container">
        <div class="todo-card">
          <div class="card-header">
            <h1>My Todos</h1>
            <p class="subtitle">${completedCount} of ${totalCount} completed</p>
          </div>
          <div class="card-content">
            <div class="input-section">
              <input 
                type="text" 
                class="todo-input" 
                placeholder="Add a new todo"
                value="${this.escapeHtml(this.inputValue.value)}"
              />
              <button class="btn btn-primary btn-add">Add</button>
            </div>
            ${todoListHtml}
            ${actionsHtml}
          </div>
        </div>
      </div>
    `

    this.attachEventListeners()
  }

  private escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    }
    return text.replace(/[&<>"']/g, (m) => map[m])
  }
}
