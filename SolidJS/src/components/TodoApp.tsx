import { createSignal, For } from 'solid-js'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = createSignal<Todo[]>([])
  const [inputValue, setInputValue] = createSignal<string>('')
  const [nextId, setNextId] = createSignal<number>(1)

  const addTodo = () => {
    const value = inputValue().trim()
    if (value) {
      setTodos([
        ...todos(),
        {
          id: nextId(),
          text: value,
          completed: false,
        },
      ])
      setNextId(nextId() + 1)
      setInputValue('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos().map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos().filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos().filter((todo) => !todo.completed))
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = () => todos().filter((t) => t.completed).length
  const totalCount = () => todos().length

  return (
    <div class="todo-container">
      <div class="todo-card">
        <div class="card-header">
          <h1>My Todos</h1>
          <p class="subtitle">
            {completedCount()} of {totalCount()} completed
          </p>
        </div>

        <div class="card-content">
          <div class="input-section">
            <input
              type="text"
              class="todo-input"
              placeholder="Add a new todo"
              value={inputValue()}
              onInput={(e) => setInputValue(e.currentTarget.value)}
              onKeyPress={handleKeyPress}
            />
            <button class="btn btn-primary" onClick={addTodo}>
              Add
            </button>
          </div>

          {todos().length === 0 ? (
            <div class="empty-state">
              <p>No todos yet. Add one to get started!</p>
            </div>
          ) : (
            <div class="todo-list">
              <For each={todos()}>
                {(todo) => (
                  <div
                    class={`todo-item ${todo.completed ? 'completed' : ''}`}
                  >
                    <input
                      type="checkbox"
                      class="todo-checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <span class="todo-text">{todo.text}</span>
                    <button
                      class="btn-delete"
                      onClick={() => deleteTodo(todo.id)}
                      title="Delete"
                    >
                      delete
                    </button>
                  </div>
                )}
              </For>
            </div>
          )}

          {todos().length > 0 && (
            <div class="actions">
              <button class="btn btn-secondary" onClick={clearCompleted}>
                Clear Completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
