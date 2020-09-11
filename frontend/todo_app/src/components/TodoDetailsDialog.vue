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
                <v-icon :color="getPriorityColorMapping[todo.priority]">label</v-icon>
                
                <v-dialog max-width="250" :persistent="true" v-model="dialog">
                    <template #activator="{on:dialog}">
                        <v-tooltip right>
                                <template #activator="{on:tooltip}">
                                    <v-btn text v-on="{...tooltip,...dialog}" fab>
                                        <v-icon small>edit</v-icon>
                                    </v-btn>
                                </template>
                                <span>Edit Priority</span>
                        </v-tooltip>
                    </template>
                    <v-card>
                        <v-card-title>Choose New Priority</v-card-title>
                        <v-card-text align="center"
                             v-for="priority in [3,2,1].filter((v)=>v!=todo.priority)"
                             :key="priority"
                        >
                            <v-btn :color="getPriorityColorMapping[priority]" @click="changePriorityTo(priority)">
                                {{priorityNameMapping[priority]}}
                            </v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions class="justify-center">
                            <v-btn @click="dialog=false">
                                Cancel
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-title>
            <v-card-text class="mt-3">
                <v-form ref="editTodoForm" >
                    <v-text-field
                            label="Title"
                            filled
                            :readonly="!getEditTodoStatus"
                            v-model="todo.title"
                            :rules="titleRules"
                            required
                            />

                        <v-textarea
                            label="Description"
                            filled
                            :readonly="!getEditTodoStatus"
                            v-model="todo.description"
                            :rules="descRules"
                            required
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
        ...mapGetters(["getTodoDetailsDialogStatus","getEditTodoStatus","getPriorityColorMapping"]),
        todo() { return this.$store.getters.getCurrentTodo},
    },
    methods : {
        closeDialog(){
            this.$store.commit("setTodoDetailsDialogStatus",false)
        },
        editTodo(){
            this.$store.commit("setEditTodoStatus",true)
        },
        saveEditedTodo(){
            // if (this.$refs.editTodoForm.validate()){
              this.$store.commit("setEditTodoStatus",false)
            this.$store.dispatch("changeTodoDetails")
            // }
            
        },
        changePriorityTo(newPriority){
            this.todo.priority = newPriority;
            this.dialog=false;
            this.$store.commit("setEditTodoStatus",true)
        }
    },
    data(){
        return {
            priorityNameMapping : {
                "3" : "High",
                "2" : "Medium",
                "1" : "Low"
            },
            dialog : false,
             titleRules : [
                v => !!v || "Title is required",
            ],
            descRules : [
                v => !!v || "Describe here, free clutter in mind",
            ]
        }
    },
    //  updated(){
    //     this.$refs.editTodoForm.resetValidation();
    // }
}
</script>

<style scoped>

</style>