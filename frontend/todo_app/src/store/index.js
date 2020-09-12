import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoDetailsDialog : false,
    addTodoDialog : false,
    editTodo : false,
    currentTodo : {},
    currentTodoIndex : null,
    priorityColorMapping : {"3":"red","2":"orange","1":"blue"},
    priorityFilter : 0, // 0 -> All
    todos: [
    ]
  },
  getters : {
    allTodos: (state) => state.todos,
    getTodoDetailsDialogStatus: (state) => state.todoDetailsDialog,
    getAddTodoDialogStatus: (state) => state.addTodoDialog,
    getCurrentTodo: (state) => state.currentTodo,
    getEditTodoStatus: (state) => state.editTodo,
    getPriorityColorMapping : (state) => state.priorityColorMapping,
    getPriorityFilter: (state) => state.priorityFilter

  },
  mutations: {
    setTodoDetailsDialogStatus: (state,value) => state.todoDetailsDialog = value,
    setAddTodoDialogStatus: (state,value) => state.addTodoDialog = value,
    setCurrentTodo: (state,value) => state.currentTodo=value,
    setCurrentTodoIndex: (state,value) => state.currentTodoIndex=value,
    setEditTodoStatus: (state,value) => state.editTodo = value,
    commitCurrentTodoToTodoInTodos(state){
      Object.assign(state.todos[state.currentTodoIndex],state.currentTodo)
    },
    addTodoAtIndex(state){
      state.todos.splice(0,0,state.currentTodo)
      state.currentTodo = {}
    },
    setPriorityFilter: (state,value) => state.priorityFilter = value,
    deleteTodo: (state) => state.todos = state.todos.filter((elem) => elem.id != state.currentTodo.id),
    setTodos: (state,value) => state.todos = value
  },
  actions: {
     getTodos({commit}){
      commit("setTodos",[])
     },

     addTodo({commit}) {
      commit("addTodoAtIndex")
     },

     changeTodoDetails({commit}){
       commit("commitCurrentTodoToTodoInTodos")
     },

     deleteTodo({commit}){
       commit("deleteTodo")
     }
  },
  modules: {
  }
})
