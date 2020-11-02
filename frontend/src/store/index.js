import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)



var authAxios = axios.create({
    baseURL : "http://localhost:8000/"
})

var todosAxios = axios.create({
    baseURL : "http://localhost:8000/todos/",

})

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
    username : localStorage.getItem("username") || "",
    token : localStorage.getItem("token") || "",
    authStatus : "",
    tryOut : false,
    lastId : 0
  },
  getters : {
    allTodos: (state) => state.todos,
    getTodoDetailsDialogStatus: (state) => state.todoDetailsDialog,
    getAddTodoDialogStatus: (state) => state.addTodoDialog,
    getCurrentTodo: (state) => state.currentTodo,
    getEditTodoStatus: (state) => state.editTodo,
    getPriorityColorMapping : (state) => state.priorityColorMapping,
    getPriorityFilter: (state) => state.priorityFilter,
    getUsername : (state) => state.username,
    isAuthenticated : (state) => !!state.token,
    authStatus : (state) => state.status,
    inTryOutMode : (state) => state.tryOut

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
    setUsername(state,value){
        state.username = value
        localStorage.setItem("username",value)
    },
    AUTH_REQUEST: (state) => {
    state.status = 'loading'
  },
  AUTH_SUCCESS: (state, token) => {
    state.status = 'success'
    state.token = token
    state.isAuthenticated = true
  },
  AUTH_ERROR: (state) => {
    state.status = 'error'
  },
  AUTH_LOGOUT : (state) => {
      state.status = "Logged Out"
  },
  setTryOutMode : (state,value) => state.tryOut = value
  },

  actions: {

     register({commit},user) {
      console.log("Register action");
      return new Promise((resolve,reject) => {
          commit("AUTH_REQUEST")
          authAxios({
              url : "register/",
              data : user,
              method : "POST"
          }).then(resp => {
              const token = resp.data.token
              localStorage.setItem("token",token)
              todosAxios.defaults.headers.common['Authorization'] = `Token ${token}`
              commit("AUTH_SUCCESS",token)
              resolve(resp)
          }).catch(err => {
              commit("AUTH_ERROR", err)
             reject(err)
          })
      })
     },

     login({commit},user) {
         return new Promise((resolve,reject) => {
             commit("AUTH_REQUEST")
             authAxios({
                 url : "login/",
                 data : user,
                 method : "POST"
             }).then(resp => {
                 const token = resp.data.token
                 localStorage.setItem("token",token)
                 todosAxios.defaults.headers.common['Authorization'] = `Token ${token}`
                 commit("AUTH_SUCCESS",token)
                 resolve(resp)
             }).catch(err => {
                 commit("AUTH_ERROR", err)
                reject(err)
             })
         })
     },

     logout({commit}){
         // eslint-disable-next-line no-unused-vars
         return new Promise((resolve, reject) => {
            commit("AUTH_LOGOUT")
            localStorage.removeItem('token')
            delete todosAxios.defaults.headers.common['Authorization']
            resolve()

        })
     },

     getTodos({commit}){
      if (!this.state.tryOut){
      todosAxios
        .get("")
        .then(res => {
          commit("setTodos",res.data)
        })
        .catch(err => console.log(err));
      }
     },

     addTodo({commit}) {
       if (!this.state.tryOut){
       todosAxios
        .post("", this.state.currentTodo)
        .then(res => {
          console.log(res.data)
          console.log(this.state.currentTodo.title)
          commit("addTodo",res.data)
        })
        .catch(err => console.log(err));
      } else {
        var todo = {
          "title" : this.state.currentTodo.title,
          "description" : this.state.currentTodo.description,
          "priority" : this.state.currentTodo.priority,
          "id" : this.state.lastId
        }

        this.state.lastId +=1
        commit("addTodo",todo)
      }
     },

     changeTodoDetails({commit}){
      if (!this.state.tryOut){
       todosAxios
        .put(this.state.currentTodo.id + "/",
          this.state.currentTodo
        )
        .then(res => {
          commit("commitCurrentTodoToTodoInTodos",res.data)
        })
        .catch(err => console.log(err));
      } else {
        var todo = {
          "title" : this.state.currentTodo.title,
          "description" : this.state.currentTodo.description,
          "priority" : this.state.currentTodo.priority,
          "id" : this.state.currentTodo.id
        }
        commit("commitCurrentTodoToTodoInTodos",todo)
      }
     },

     deleteTodo({commit}){
      if (!this.state.tryOut){
       todosAxios
        .delete(this.state.currentTodo.id + "/")
        .then(() => {
          commit("deleteTodo",this.state.currentTodo.id)
        })
        .catch(err => console.log(err));
      } else {
        commit("deleteTodo",this.state.currentTodo.id)
      }
     }
  },
  modules: {
  }
})
