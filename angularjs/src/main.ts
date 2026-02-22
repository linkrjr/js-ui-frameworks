import 'angular'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface ITodoScope extends ng.IScope {
  todos: Todo[]
  inputValue: string
  nextId: number
  addTodo: () => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
  clearCompleted: () => void
  completedCount: () => number
  onTodoChange: () => void
}

const app = angular.module('todoApp', [])

app.controller(
  'TodoController',
  [
    '$scope',
    ($scope: ITodoScope) => {
      $scope.todos = []
      $scope.inputValue = ''
      $scope.nextId = 1

      $scope.addTodo = function () {
        const trimmed = $scope.inputValue.trim()
        if (trimmed) {
          $scope.todos.push({
            id: $scope.nextId,
            text: trimmed,
            completed: false,
          })
          $scope.nextId++
          $scope.inputValue = ''
        }
      }

      $scope.toggleTodo = function (id: number) {
        const todo = $scope.todos.find((t) => t.id === id)
        if (todo) {
          todo.completed = !todo.completed
        }
      }

      $scope.deleteTodo = function (id: number) {
        $scope.todos = $scope.todos.filter((t) => t.id !== id)
      }

      $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter((t) => !t.completed)
      }

      $scope.completedCount = function () {
        return $scope.todos.filter((t) => t.completed).length
      }

      $scope.onTodoChange = function () {
        // Trigger angular digest cycle when checkbox changes
        $scope.$apply()
      }
    },
  ]
)
