<template>
    <v-dialog
        max-width="300"
        v-model="getTodoDetailsDialogStatus"
        :persistent="true"
    >
        <v-card>
            <v-card-title class="headline">
                My Todo
                <v-spacer></v-spacer>
                <span class="caption"> Priority : </span>
                <v-icon :color="priorityColorMapping[todo.priority]">label</v-icon>
            </v-card-title>
            <v-card-text class="mt-3">
                <v-form>
                    <v-text-field
                            label="Title"
                            filled
                            :readonly="!getEditTodoStatus"
                            v-model="todo.title"
                            />

                        <v-textarea
                            label="Description"
                            filled
                            :readonly="!getEditTodoStatus"
                            v-model="todo.description"
                            />  
                     </v-form>
            </v-card-text>
          
            <v-card-actions>
                <v-btn color="warning" @click="editTodo" v-if="!getEditTodoStatus">
                    Edit
                </v-btn>
                <v-spacer></v-spacer>
                
                <v-btn text color="purple" @click="closeDialog" v-if="!getEditTodoStatus">
                    Close
                </v-btn>

                <v-btn color="success" @click="saveEditedTodo" v-else>
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name : "TodoDetailsDialog",
    computed : {
        ...mapGetters(["getTodoDetailsDialogStatus","getEditTodoStatus"]),
        todo() { return this.$store.getters.getCurrentTodo},
    },
    methods : {
        closeDialog(){
            this.$store.commit("setTodoDetailsDialogStatus",false)
        },
        editTodo(){
            this.$store.commit("setEditTodoStatus",true)
          //  this.$refs["input"][1].focus()
        },
        saveEditedTodo(){
            this.$store.commit("setEditTodoStatus",false)
            this.$store.commit("changeTodoDetails",this.todo)
        }

    },
    data() {
        return {
            priorityColorMapping : {
                "High" : "red",
                "Medium" : "orange",
                "Low" : "blue"
            },
            
        }
    }
}
</script>

<style scoped>

</style>