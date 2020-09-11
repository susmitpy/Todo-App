<template>
    <v-dialog
        max-width="300"
        v-model="getAddTodoDialogStatus"
        :persistent="true"
    >
        <v-card>
            <v-card-title class="headline">
                Add Todo
                <v-spacer></v-spacer>
                <span class="caption"> Priority : </span>
                <v-icon :color="getPriorityColorMapping[todo.priority]">label</v-icon>
            </v-card-title>

            <v-card-text>
                     <v-form ref="addTodoForm">  

                        <v-text-field
                            label="Title"
                            filled
                            v-model="todo.title"
                            :rules="titleRules"
                            required
                            :counter=25
                        ></v-text-field>

                        <v-textarea
                            label="Description"
                            filled
                            v-model="todo.description"
                            :rules="descRules"
                            required
                            :counter=100
                        >
                        </v-textarea>
                     </v-form>
            </v-card-text>

       

            <v-card-actions>
                <v-btn text color="warning" @click="closeDialog">
                    Close
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text class="success" @click="addTodo">
                    Add Todo
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name : "AddTodoDialog",
    data: () => ({
        titleRules : [
            v => !!v || "Title is required",
        ],
        descRules : [
            v => !!v || "Describe here, free clutter in mind",
        ]
    }),
    computed : {
        ...mapGetters(["getAddTodoDialogStatus","getPriorityColorMapping"]),
        todo() { return this.$store.getters.getCurrentTodo},
    },
    methods : {
        closeDialog(){
            this.$store.commit("setAddTodoDialogStatus",false)
        },
        addTodo(){
            // if (this.$refs.form.validate()){
                this.$store.dispatch("addTodo")
                this.closeDialog();
            // }
            
        },
    },
    // updated(){
    //     this.$nextTick(() => {
    //         this.$refs["addTodoForm"].resetValidation();
    //     })
        
    // }
   
}
</script>

<style scoped>

</style>