<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="newTodo"
        label="Add a todo"
        @keyup.enter="addTodo"
        outlined
        dense
      />
      <v-btn color="primary" @click="addTodo">Add</v-btn>
    </v-card-title>

    <v-divider />

    <v-list>
      <v-list-item v-for="todo in todos" :key="todo.id">
        <v-list-item-content>
          <v-checkbox v-model="todo.done" :label="todo.text" />
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="removeTodo(todo.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-card-actions>
      <v-spacer />
      <div>{{ remaining }} remaining</div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from 'vue'

type Todo = { id: number; text: string; done: boolean }

export default defineComponent({
  name: 'TodoApp',
  setup() {
    const todos = reactive<Todo[]>([
      { id: 1, text: 'Learn Vue 3', done: false },
      { id: 2, text: 'Build a todo app', done: true }
    ])

    const newTodo = ref('')

    function addTodo() {
      const text = newTodo.value && newTodo.value.trim()
      if (!text) return
      todos.push({ id: Date.now(), text, done: false })
      newTodo.value = ''
    }

    function removeTodo(id: number) {
      const idx = todos.findIndex(t => t.id === id)
      if (idx >= 0) todos.splice(idx, 1)
    }

    const remaining = computed(() => todos.filter(t => !t.done).length)

    return { todos, newTodo, addTodo, removeTodo, remaining }
  }
})
</script>

<style scoped>
v-card { padding: 16px; }
</style>
