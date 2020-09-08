import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoDetailsDialog : false,
    addTodoDialog : false,
    editTodo : false,
    newTodo : {
      "title":"",
      "description":"",
      "priority":""
    },
    currentTodo : {},
    currentTodoIndex : null,
    todos: [
      {
      "id":"1",
      "title" : "Todo 1 Title",
      "description" : "Todo 1 Description",
      "priority" : "High",
      },
      {
        "id":"2",
        "title" : "Todo 2 Title",
        "description" : "Todo 2 Description",
        "priority" : "High",
        },
        {
          "id":"3",
          "title" : "Todo 3 Title",
          "description" : "Todo 3 Description",
          "priority" : "High",
          },
      {
        "id":"4",
        "title" : "Todo 4 Title",
        "description" : "Todo 4 Description",
        "priority" : "Medium",
        },
        {
          "id":"5",
          "title" : "Todo 5 Title",
          "description" : "Todo 5 Description",
          "priority" : "Medium",
          },
          {
            "id":"6",
            "title" : "Todo 6 Title",
            "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a labore aspernatur suscipit aliquid sit, est quae dolore officia tempora, adipisci laborum quaerat voluptas, officiis commodi necessitatibus rem porro. Laudantium?",
            "priority" : "Medium",
            },
        {
          "id":"7",
          "title" : "Todo 7 Title",
          "description" : "Todo 7 Description",
          "priority" : "Low",
          },
          {
            "id":"8",
            "title" : "Todo 8 Title",
            "description" : "Todo 8 Description",
            "priority" : "Low",
            },
            {
              "id":"9",
              "title" : "Todo 9 Title",
              "description" : "Todo 9 Description",
              "priority" : "Low",
              },
    ]
  },
  getters : {
    allTodos: (state) => state.todos,
    getTodoDetailsDialogStatus: (state) => state.todoDetailsDialog,
    getAddTodoDialogStatus: (state) => state.addTodoDialog,
    getNewTodoPriority: (state) => state.newTodo.priority,
    getNewTodo: (state) => state.newTodo,
    getCurrentTodo: (state) => state.currentTodo,
    getEditTodoStatus: (state) => state.editTodo

  },
  mutations: {
    setTodoDetailsDialogStatus: (state,value) => state.todoDetailsDialog = value,
    setAddTodoDialogStatus: (state,value) => state.addTodoDialog = value,
    setNewTodoPriority: (state,value) => state.newTodo.priority = value,
    setCurrentTodo: (state,value) => state.currentTodo=value,
    setCurrentTodoIndex: (state,value) => state.currentTodoIndex=value,
    setEditTodoStatus: (state,value) => state.editTodo = value,
    changeTodoDetails(state,todo){
      Object.assign(state.todos[state.currentTodoIndex],todo)
    }
  },
  actions: {
     
  },
  modules: {
  }
})
