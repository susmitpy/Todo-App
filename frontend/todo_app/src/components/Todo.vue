<template >
    <v-flex xs12 sm6 md4 lg3 >
            <v-card class="text-xs-center ma-3 pb-3" > 
                <v-card-title>  
                   <h4> {{todo.title}} </h4>
                    <v-spacer></v-spacer>
                    <v-icon :color="priorityColorMapping[todo.priority]">
                        label

                    </v-icon>
                </v-card-title>
                <v-card-text class="ml-2">
                    <div class="subheading" v-if="todo.description.length>30">
                        {{ todo.description.substring(0,30) + " .." }}
                    </div>
                    <div class="subheading" v-else>
                        {{ todo.description }}
                    </div>
                     
                </v-card-text>
              
                
              

            </v-card>
    </v-flex>
</template>

<script>

export default {
    name : "Todo",
    props : ["todo","index"],
    data (){
        return {
            priorityColorMapping : {
                "High" : "red",
                "Medium" : "orange",
                "Low" : "blue"
            },
        }
    },
    methods : {
         showTodoDetails(){
            console.log("Todo Clicked")
            console.log("Title: " + this.todo.title)
            this.$store.commit("setCurrentTodo",this.todo)
            this.$store.commit("setTodoDetailsDialogStatus",true)
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

      
</style>