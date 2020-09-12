<template >
    <v-flex xs12 sm6 md4 lg3 @click="showTodoDetails">
            <v-card class="text-xs-center ma-3 pb-3" > 
                <v-card-title>  
                   <h4> {{todo.title}} </h4>
                    <v-spacer></v-spacer>
                    <v-icon :color="getPriorityColorMapping[todo.priority]">
                        label
                    </v-icon>
                </v-card-title>
                <v-card-text class="ml-2">
                    <div class="subheading" v-if="todo.description.length>40">
                        {{ todo.description.substring(0,40) + " .." }}
                        
                    </div>
                    <div class="subheading" v-else>
                        {{ todo.description }}
                    </div>
                    <v-btn fab small text color="red" class="delete" @click.stop="deleteTodo">
                        <v-icon>delete</v-icon>
                     </v-btn>
                </v-card-text>
            </v-card>
    </v-flex>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name : "Todo",
    props : ["todo","index"],
    computed: mapGetters(["getPriorityColorMapping"]),
    
    methods : {
         showTodoDetails(){
            console.log("Todo Clicked")
         
            this.$store.commit("setCurrentTodo",{...this.todo})
            this.$store.commit("setCurrentTodoIndex",this.index)
            this.$store.commit("setTodoDetailsDialogStatus",true)
        },
        deleteTodo(){
            this.$store.commit("setCurrentTodo",{...this.todo})
            this.$store.dispatch("deleteTodo")
        }
    }
}
</script>

<style scoped>
.todo {
        border: 1px solid #ccc;
        background: #ffffff;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }

.delete {
    position: absolute;;
    bottom:0px;
    right:0px;
}
      
</style>