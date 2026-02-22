import { TodoApp } from './todo'

document.addEventListener('DOMContentLoaded', () => {
  const app = new TodoApp('app')
  app.render()
})
