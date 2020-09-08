<template>
          
            <v-container
                class="fill-height"
                fluid
            >
            <AddTodoDialog/>
            <TodoDetailsDialog/>
       
            <v-row align="center" v-if="isMobile()">
                <!-- <h1 class="heading"> My Todos  </h1> -->
                <v-spacer></v-spacer>
           <span> <AddTodoBtn/>  </span>
            </v-row>

            <v-row align="center" justify="center" v-else>
                <!-- <h1 class="heading"> My Web Todos  </h1> -->
                
                <span class="ml-3"> <AddTodoBtn/>  </span>
            </v-row>
            
            <v-container class="my-3">
                <v-layout row wrap>      
                    <Todo
                        v-for="(todo,index) in allTodos"
                        :key = "todo.id"
                        :todo = todo
                        :index = index
                        
                        />     
                </v-layout>
            </v-container>
        </v-container>
</template>

<script>
import {mapGetters} from "vuex";
import Todo from "./Todo";
import AddTodoBtn from "./AddTodoBtn";
import AddTodoDialog from "./AddTodoDialog";
import TodoDetailsDialog from "./TodoDetailsDialog";

export default {
    name : "TodosGrid",
    computed : {
        ...mapGetters(["allTodos"]),    
    
        },
    components : {
        Todo,
        AddTodoBtn,
        AddTodoDialog,
           TodoDetailsDialog
    },
    methods : {
         isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
    }
  
}
</script>

<style scoped>
   
    
    .addTodoBtn {
        position: absolute;
        bottom:0px;
        right:0px;
    }

    .legend {
        text-align: right;
        

    }

    .priority_legend {
        font-size: 45px;
        
    }


 
</style>