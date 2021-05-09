<template>
  <div class="add">
      <h1>Add a Todo to your List:</h1>
      <todoform />
  </div>
</template>

<script>
import todoform from "../components/todoform.vue";

export default {
    name: "Add",
    components: {
        todoform,
    }
}
</script>

<style scoped>
</style>

