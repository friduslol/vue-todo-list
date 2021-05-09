import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
        {
          name: "Eliminate Youglings",
          author: "Anakin Skywalker",
          content: "Go to the Jedi Temple and kill the younglings.",
          time: "00.00",
          isDone: false
        },
        {
            name: "Choke",
            author: "Darth Vader",
            content: "Choke some people with my mind today.",
            time: "00.00",
            isDone: false
        },
        {
            name: "Coming Clean",
            author: "Lord Vader",
            content: 'Tell Luke "I am your father".',
            time: "00.00",
            isDone: false
        },
        {
            name: "Tell Padme About Sand",
            author: "Young Padawan",
            content: "I don’t like sand. It’s coarse and rough and irritating and it gets everywhere.",
            time: "00.00",
            isDone: false
        }
    ],
  },
  mutations: {
    // state är min lista där uppe, den andra parametern är det nya object med en todo, den puschar vi sedan in till listan
    addTodos(state, todoObject) {
      state.todos.unshift(todoObject)
    },
    // här kollar jag om det object som klickas på finns i listan isåfall filtreras det bort
    removeTodos(state, todoObject) {
      state.todos = state.todos.filter(todo => todo !== todoObject)
    },
    //här puschar jag in objectet längst ner genom att hitta index och sen splice ut det
    doneTodo(state, todoObject) {
      state.todos.push(state.todos.splice(state.todos.findIndex(todo => todo == todoObject), 1)[0])
    },
    moveUp(state, todoObject) {
    // här hittar jag index och sparar det i en variabel
    // jag tar det index'et -1, sparar det i en variabel och använder det som min nya position
      let index = state.todos.indexOf(todoObject)
      let newindex = index - 1;

      // jag kollar om index är högst upp, då vill jag inte flytta
      if (index === 0) {
        return

      //Jag splice sen in min variabel på det nya index'et
      } else {
        state.todos.splice(newindex, 0, state.todos.splice(index, 1)[0]);
      }
    },
    // Här gör jag likadant som i moveUp, men det nya index'et + 1
    moveDown(state, todoObject) {
      let index = state.todos.indexOf(todoObject)
      let newindex = index + 1;

      if (index === state.todos.length) {
        return
      } else {
        state.todos.splice(newindex, 0, state.todos.splice(index, 1)[0]);
      }
    },
  }
})
