interface Todo {
  id: number
  text: string
  completed: boolean
}

export class TodoApp {
  private todos: Todo[] = []
  private inputValue: string = ''
  private nextId: number = 1
  private container: HTMLElement

  constructor(containerId: string) {
    const element = document.getElementById(containerId)
    if (!element) {
      throw new Error(`Container with id "${containerId}" not found`)
    }
    this.container = element
  }

  private addTodo(): void {
    if (this.inputValue.trim()) {
      this.todos.push({
        id: this.nextId++,
        text: this.inputValue,
        completed: false,
      })
      this.inputValue = ''
      this.render()
      this.focusInput()
    }
  }

  private toggleTodo(id: number): void {
    const todo = this.todos.find((t) => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
      this.render()
    }
  }

  private deleteTodo(id: number): void {
    this.todos = this.todos.filter((t) => t.id !== id)
    this.render()
  }

  private clearCompleted(): void {
    this.todos = this.todos.filter((t) => !t.completed)
    this.render()
  }

  private handleInputKeyPress(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.addTodo()
    }
  }

  private focusInput(): void {
    const input = this.container.querySelector('.todo-input') as HTMLInputElement
    if (input) {
      setTimeout(() => input.focus(), 0)
    }
  }

  private attachEventListeners(): void {
    const input = this.container.querySelector('.todo-input') as HTMLInputElement
    if (input) {
      input.addEventListener('keypress', (e) => this.handleInputKeyPress(e))
    }

    const addBtn = this.container.querySelector('.btn-add') as HTMLButtonElement
    if (addBtn) {
      addBtn.addEventListener('click', () => this.addTodo())
    }

    const checkboxes = this.container.querySelectorAll('.todo-checkbox') as NodeListOf<HTMLInputElement>
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        const id = parseInt((e.target as HTMLInputElement).getAttribute('data-id') || '0')
        this.toggleTodo(id)
      })
    })

    const deleteButtons = this.container.querySelectorAll('.btn-delete') as NodeListOf<HTMLButtonElement>
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
    const completedCount = this.todos.filter((t) => t.completed).length
    const totalCount = this.todos.length

    const todoListHtml =
      this.todos.length === 0
        ? '<div class="empty-state"><p>No todos yet. Add one to get started!</p></div>'
        : `
      <div class="todo-list">
        ${this.todos
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
      this.todos.length > 0
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
                value="${this.escapeHtml(this.inputValue)}"
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
