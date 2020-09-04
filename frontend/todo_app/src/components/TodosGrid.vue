<template>
    <div class="container">
          <h1> My Todos </h1>
          <AddTodoBtn/>
            <div class="row">
                <div class="legend">
                    Priority :
                    <b :style="{color:'red'}" class="priority_legend">.</b> &nbsp; High
                    <b :style="{color:'orange'}" class="priority_legend">.</b> &nbsp; Medium
                    <b :style="{color:'blue'}" class="priority_legend">.</b> &nbsp; Low
                </div>
            </div>
            <div class="row">
                <div class = "todos">
                    <Todo
                    v-for="todo in allTodos"
                    :key = "todo.id"
                    :todo = todo
                    />
                </div>
            </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex";
import Todo from "./Todo";
import AddTodoBtn from "./AddTodoBtn";

export default {
    name : "TodosGrid",
    computed : {
        ...mapGetters(["allTodos"]),    
    },
    components : {
        Todo,
        AddTodoBtn
    }
  
}
</script>

<style scoped>
    .todos {
        display : grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
    }

    

    @media (max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }

    .legend {
        text-align: right;
        

    }

    .priority_legend {
        font-size: 45px;
        
    }


 
</style>