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
    priorityColorMapping : {"3":"red","2":"yellow","1":"blue"},
    todos: [
      {
      "id":"1",
      "title" : "Todo 1 Title",
      "description" : "Todo 1 Description",
      "priority" : 3,
      },
      {
        "id":"2",
        "title" : "Todo 2 Title",
        "description" : "Todo 2 Description",
        "priority" : 3,
        },
        {
          "id":"3",
          "title" : "Todo 3 Title",
          "description" : "Todo 3 Description",
          "priority" : 3,
          },
      {
        "id":"4",
        "title" : "Todo 4 Title",
        "description" : "Todo 4 Description",
        "priority" : 2,
        },
        {
          "id":"5",
          "title" : "Todo 5 Title",
          "description" : "Todo 5 Description",
          "priority" : 2,
          },
          {
            "id":"6",
            "title" : "Todo 6 Title",
            "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a labore aspernatur suscipit aliquid sit, est quae dolore officia tempora, adipisci laborum quaerat voluptas, officiis commodi necessitatibus rem porro. Laudantium?",
            "priority" : 2,
            },
        {
          "id":"7",
          "title" : "Todo 7 Title",
          "description" : "Todo 7 Description",
          "priority" : 1,
          },
          {
            "id":"8",
            "title" : "Todo 8 Title",
            "description" : "Todo 8 Description",
            "priority" : 1,
            },
            {
              "id":"9",
              "title" : "Todo 9 Title",
              "description" : "Todo 9 Description",
              "priority" : 1,
              },
    ]
  },
  getters : {
    allTodos: (state) => state.todos,
    getTodoDetailsDialogStatus: (state) => state.todoDetailsDialog,
    getAddTodoDialogStatus: (state) => state.addTodoDialog,
    getCurrentTodo: (state) => state.currentTodo,
    getEditTodoStatus: (state) => state.editTodo,
    getPriorityColorMapping : (state) => state.priorityColorMapping

  },
  mutations: {
    setTodoDetailsDialogStatus: (state,value) => state.todoDetailsDialog = value,
    setAddTodoDialogStatus: (state,value) => state.addTodoDialog = value,
    setCurrentTodo: (state,value) => state.currentTodo=value,
    setCurrentTodoIndex: (state,value) => state.currentTodoIndex=value,
    setEditTodoStatus: (state,value) => state.editTodo = value,
    changeTodoDetails(state){
      Object.assign(state.todos[state.currentTodoIndex],state.currentTodo)
    },
    addTodoAtIndex(state,index){
      state.todos.splice(index,0,state.currentTodo)
      state.currentTodo = {}
    }
  },
  actions: {
     addTodo({commit}) {
      console.log("Add todo action called")
      var todoPriority = this.state.currentTodo.priority

      this.state.todos.some(function(val,ind){
        if (val.priority <= todoPriority){
          commit("addTodoAtIndex",ind)
          return true;
        }
      })
     }
  },
  modules: {
  }
})
