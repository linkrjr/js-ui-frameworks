<script lang="ts">
  interface Todo {
    id: number
    text: string
    completed: boolean
  }

  let todos: Todo[] = []
  let inputValue: string = ''
  let nextId: number = 1

  function addTodo(): void {
    if (inputValue.trim()) {
      todos = [
        ...todos,
        {
          id: nextId++,
          text: inputValue,
          completed: false
        }
      ]
      inputValue = ''
    }
  }

  function toggleTodo(id: number): void {
    todos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }

  function deleteTodo(id: number): void {
    todos = todos.filter(todo => todo.id !== id)
  }

  function handleKeypress(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  function clearCompleted(): void {
    todos = todos.filter(t => !t.completed)
  }

  $: completedCount = todos.filter(t => t.completed).length
  $: totalCount = todos.length
</script>

<main>
  <div class="todo-card">
    <div class="card-header">
      <h1>My Todos</h1>
      <p class="subtitle">
        {completedCount} of {totalCount} completed
      </p>
    </div>

    <div class="card-content">
      <div class="input-section">
        <input
          type="text"
          bind:value={inputValue}
          on:keypress={handleKeypress}
          placeholder="Add a new todo"
          class="todo-input"
        />
        <button on:click={addTodo} class="btn btn-primary">Add</button>
      </div>

      {#if todos.length === 0}
        <div class="empty-state">
          <p>No todos yet. Add one to get started!</p>
        </div>
      {:else}
        <div class="todo-list">
          {#each todos as todo (todo.id)}
            <div class="todo-item" class:completed={todo.completed}>
              <input
                type="checkbox"
                checked={todo.completed}
                on:change={() => toggleTodo(todo.id)}
                class="todo-checkbox"
              />
              <span class="todo-text">{todo.text}</span>
              <button
                on:click={() => deleteTodo(todo.id)}
                class="btn-delete"
                title="Delete"
              >
                ✕
              </button>
            </div>
          {/each}
        </div>
      {/if}

      {#if todos.length > 0}
        <div class="actions">
          <button on:click={clearCompleted} class="btn btn-secondary">
            Clear Completed
          </button>
        </div>
      {/if}
    </div>
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .todo-card {
    width: 100%;
    max-width: 600px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .card-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 24px;
    text-align: center;
  }

  .card-header h1 {
    margin: 0 0 8px 0;
    font-size: 32px;
    font-weight: 500;
  }

  .subtitle {
    margin: 0;
    font-size: 14px;
    opacity: 0.9;
  }

  .card-content {
    padding: 24px;
  }

  .input-section {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
  }

  .todo-input {
    flex: 1;
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    transition: border-color 0.3s;
  }

  .todo-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .btn {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .btn-primary {
    background-color: #667eea;
    color: white;
  }

  .btn-primary:hover {
    background-color: #5568d3;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  .btn-primary:active {
    transform: scale(0.98);
  }

  .btn-secondary {
    background-color: #ff9800;
    color: white;
  }

  .btn-secondary:hover {
    background-color: #e68900;
    box-shadow: 0 4px 12px rgba(255, 152, 0, 0.4);
  }

  .empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #999;
    font-size: 16px;
  }

  .todo-list {
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .todo-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 0;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.2s;
  }

  .todo-item:last-child {
    border-bottom: none;
  }

  .todo-item:hover {
    background-color: #f9f9f9;
  }

  .todo-item.completed {
    opacity: 0.6;
  }

  .todo-checkbox {
    width: 20px;
    height: 20px;
    cursor: pointer;
    flex-shrink: 0;
    accent-color: #667eea;
  }

  .todo-text {
    flex: 1;
    word-break: break-word;
    color: #1f1f1f;
    font-size: 16px;
  }

  .todo-item.completed .todo-text {
    text-decoration: line-through;
    color: #999;
  }

  .btn-delete {
    padding: 4px 8px;
    background: none;
    border: none;
    color: #d32f2f;
    font-size: 20px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.2s;
    border-radius: 4px;
  }

  .btn-delete:hover {
    background-color: rgba(211, 47, 47, 0.1);
    color: #b71c1c;
  }

  .actions {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #e0e0e0;
  }
</style>
