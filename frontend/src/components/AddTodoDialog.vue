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
                <v-icon :color="getPriorityColorMapping[todo.priority]">mdi-label</v-icon>
            </v-card-title>

            <v-card-text>
                     <v-form ref="form">

                        <v-text-field
                            id="title"
                            label="Title"
                            filled
                            v-model="todo.title"
                            :rules="titleRules"
                            required
                            counter="25"
                            @input="titleChecker"
                            hint = "Keep it Short and Simple"
                        ></v-text-field>

                        <v-textarea
                            label="Description"
                            filled
                            v-model="todo.description"
                            hint = "Free the clutter in your mind"
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
            v => (v&&v.length <= 25) || "Keep It Short and Simple"
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


            if (this.$store.getters.getCurrentTodo.description == null){
                console.log("desc empty")
                this.$store.commit("setCurrentTodoBlankDesc")
            }

            if (this.$refs.form.validate()){

                this.$store.dispatch("addTodo")
                this.closeDialog()
            }
        },
        titleChecker(title){
            console.log(title.length);
            if (title.length >= 25){
                this.todo.title = title.slice(0,24)
                this.$forceUpdate()
            }
        }
    },
    updated(){
        this.$nextTick(() => {
            if (this.$refs.form){
                this.$refs.form.resetValidation()
            }

        })
    }


}
</script>

<style scoped>

</style>
