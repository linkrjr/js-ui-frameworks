<script lang="ts">
  import TodoApp from './components/TodoApp.svelte'
</script>

<TodoApp />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #fafafa;
  }

  :global(html, body, #app) {
    width: 100%;
    height: 100%;
  }
</style>
