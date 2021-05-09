<template>
    <div class="render-todo">
        <h2> {{ todo.name }} </h2>
        <h3> {{ todo.author }} </h3>
        <p> {{ todo.content }} </p>
        <p> {{ todo.time }} </p>
        <span @click="removeTodos" >Click To Remove!</span>
        <br>
        <span @click="doneTodo" :class="{ active:todo.isDone }">Click To Finish!</span>
        <br>
        <span @click="moveUp">Move Up!</span>
        <br>
        <span @click="moveDown">Move Down!</span>
    </div>
    <!--<p @click="removeTodos">{{ todo.name }} {{ todo.author }} {{ todo.content }} {{ todo.time }}</p>-->
</template>

<script>
export default {
    props: ["todo"],
    methods: {
        removeTodos() {
            //this.todo är den todo jag får från prop ovanför
            this.$store.commit("removeTodos", this.todo)
        },
        doneTodo() {
            this.todo.isDone = true
            if(this.todo.isDone === true) {
            this.$store.commit("doneTodo", this.todo)
            }

        },
        moveUp() {
            this.$store.commit("moveUp", this.todo)
        },
        moveDown() {
            this.$store.commit("moveDown", this.todo)
        }
    },
}
</script>


<style scoped>

h2, h3, p, span {
    color: #ffffff;
    font-size: 1.1rem;
}

h2 {
    text-align: center;
    font-size: 1.7rem;
}
.render-todo {
    background-color: rgb(80, 78, 78);opacity: 0.8;
    max-width: 400px;
    border-radius: 10px;
    padding: 10px;
    padding-bottom: 32px;
    margin: 5rem auto 0;
    margin-bottom: 2rem;
}

.active {
    color: green;
    font-weight: bold;
}

</style>