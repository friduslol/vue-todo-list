<template>
    <div class="form-container">
        <form @submit.prevent="addTodos">
            <label for="todo">Todo:</label>
            <input v-model="todoName" type="text" placeholder="Todo...">
            <!--<h3>{{ todoName }}</h3>-->

            <label for="author">Author:</label>
            <input v-model="todoAuthor" type="text" placeholder="Author...">

            <label for="content">Content:</label>
            <input v-model="todoContent" type="text" placeholder="Content...">
            <!--<input v-model="todoTime" type="text" placeholder="Time...">-->
            <!--<button>Add</button>-->

            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoName: "",
            todoAuthor: "",
            todoContent: "",
            todoTime: "",
        }
    },
    methods: {
        addTodos() {
            let todoObject = {
                name: this.todoName,
                author: this.todoAuthor,
                content: this.todoContent,
                time: new Date().toLocaleString()
            }
            //tar emot mutationen med commit
            this.$store.commit("addTodos", todoObject)
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>

input {
    border:none;
}

label {
    color: #ff3333;
    font-size: 2rem;
    font-weight: 900;
}

input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 12px 0;
    box-sizing: border-box;
    outline: none;
    border-radius: 10px;

    background-color: rgb(255, 255, 255);opacity: 0.4;
    color: #000000;
    font-size: 1rem;
    font-weight: bold;
}

input[type=text]:focus {
    border: 7px solid #ffffff;
}

.form-container {
    margin: 10rem auto 0;
    width: 40%;
}


input[type=submit] {
    background-color: rgb(255, 255, 255);opacity: 0.4;
    border: none;
    color: #000000;
    font-weight: bold;
    font-size: 1rem;

    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    outline: none;
    border-radius: 10px;
    transition: 0.3s;

}

input[type=submit]:hover {
    background-color: #ff9191;
}

</style>