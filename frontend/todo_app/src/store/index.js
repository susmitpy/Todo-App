import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

var todos_base_url = "http://localhost:8100/todos/";
var auth_base_url = "http://localhost:8100/auth/";

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
    ],
    email : null,
    uid : null
  },
  getters : {
    allTodos: (state) => state.todos,
    getTodoDetailsDialogStatus: (state) => state.todoDetailsDialog,
    getAddTodoDialogStatus: (state) => state.addTodoDialog,
    getCurrentTodo: (state) => state.currentTodo,
    getEditTodoStatus: (state) => state.editTodo,
    getPriorityColorMapping : (state) => state.priorityColorMapping,
    getPriorityFilter: (state) => state.priorityFilter,
    getEmail : (state) => state.email,
    getUID : (state) => state.uid

  },
  mutations: {
    setTodoDetailsDialogStatus: (state,value) => state.todoDetailsDialog = value,
    setAddTodoDialogStatus: (state,value) => state.addTodoDialog = value,
    setCurrentTodo: (state,value) => state.currentTodo=value,
    setCurrentTodoIndex: (state,value) => state.currentTodoIndex=value,
    setEditTodoStatus: (state,value) => state.editTodo = value,
    commitCurrentTodoToTodoInTodos(state,todo){
      Object.assign(state.todos[state.currentTodoIndex],todo)
    },
    addTodo(state,todo){
      state.todos.splice(0,0,todo)
      state.currentTodo = {}
    },
    setPriorityFilter: (state,value) => state.priorityFilter = value,
    deleteTodo: (state,id) => state.todos = state.todos.filter((elem) => elem.id != id),
    setTodos: (state,value) => state.todos = value,
    setDetails(state,detail){
        state.email = detail.email,
        state.uid = detail.uid
    }
  },
  actions: {

     register({commit},{email,password}) {
      console.log("Register action");
      axios
        .post(auth_base_url + "register/",
          {email:email,password:password}
        )
        .then(res => {
          commit("setDetails",res.data)
        })
        .catch(err => console.log(err))
     },

     login({commit},{email,password}) {
      console.log("Login action");
      axios
        .post(auth_base_url + "login/",
          {email:email,password:password}
        )
        .then(res => {
          commit("setDetails",res.data)
        })
        .catch(err => console.log(err))
     },
   
     getTodos({commit}){
      axios
        .get(todos_base_url)
        .then(res => {
          commit("setTodos",res.data)
        })
        .catch(err => console.log(err));
     },

     addTodo({commit}) {
       axios
        .post(todos_base_url, this.state.currentTodo)
        .then(res => {
          commit("addTodo",res.data)
        })
        .catch(err => console.log(err));
     },

     changeTodoDetails({commit}){
       axios
        .put(todos_base_url + this.state.currentTodo.id + "/", 
          this.state.currentTodo
        )
        .then(res => {
          commit("commitCurrentTodoToTodoInTodos",res.data)
        })
        .catch(err => console.log(err));
     },

     deleteTodo({commit}){
       axios
        .delete(todos_base_url + this.state.currentTodo.id + "/")
        .then(() => {
          commit("deleteTodo",this.state.currentTodo.id)
        })
        .catch(err => console.log(err));
     }
  },
  modules: {
  }
})
