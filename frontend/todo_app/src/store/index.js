import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
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
            "description" : "Todo 6 Description",
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
   
  },
  mutations: {
   
  },
  actions: {
     
  },
  modules: {
  }
})
