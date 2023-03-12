import Vue from 'vue'
import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    updateTodo (state, { todoId, updatedTodo }) {
      const todoIndex = state.todos.findIndex(todo => todo.id === todoId)
      state.todos.splice(todoIndex, 1, updatedTodo)
    },
    deleteTodo (state, todoId) {
      const todoIndex = state.todos.findIndex(todo => todo.id === todoId)
      state.todos.splice(todoIndex, 1)
    },
    setTodos(state, todos) {
      state.todos = todos
    },
    toggleTodoStatus (state, todoId) {
      const todoIndex = state.todos.findIndex(todo => todo.id === todoId)
      state.todos[todoIndex].done = !state.todos[todoIndex].done
    },
  },
})

export default store
