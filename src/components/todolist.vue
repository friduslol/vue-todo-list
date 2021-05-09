<template>
  <div>
    <!--denna bara loopar igenom todos och sen skickar in en todo till todo.vue, det vi ser i webbläsaren är alltså inte denna, utan den andra filen-->
    <todo v-for="(todo, i) in todos" :key="i" :todo="todo"/>
  </div>
</template>

<script>
import todo from "./todo.vue"
export default {
    components: {
        todo
    },
    computed: {
        todos(){
            return this.$store.state.todos
        }
    }
}
</script>

<style scoped>

</style>