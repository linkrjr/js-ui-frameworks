<template>
  <v-app>
    <v-main>
      <v-container class="pa-4" max-width="800">
        <v-row>
          <v-col cols="12">
            <h1>Todo App</h1>
            <TodoApp />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoApp from './components/TodoApp.vue'

export default defineComponent({
  name: 'App',
  components: { TodoApp }
})
</script>

<style>
body { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto; }
</style>
