<template>
  <div class="home">
    <h1>Todo List:</h1>
    <todolist />

  </div>
</template>

<script>
// @ is an alias to /src
import todolist from "../components/todolist.vue"

export default {
  name: 'Home',
  components: {
    todolist,



  }
}
</script>

<style scoped>

</style>
