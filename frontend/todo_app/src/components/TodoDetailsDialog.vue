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
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="purple" @click="closeDialog">
                    Close
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
        ...mapGetters(["getTodoDetailsDialogStatus"]),
        todo() { return this.$store.getters.getCurrentTodo}
    },
    methods : {
        closeDialog(){
            this.$store.commit("setTodoDetailsDialogStatus",false)
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