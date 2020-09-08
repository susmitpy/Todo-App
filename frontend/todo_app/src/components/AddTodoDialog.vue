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
                <v-icon :color="priorityColorMapping[getNewTodoPriority]">label</v-icon>
            </v-card-title>

            <v-card-text>
                     <v-form>
                        <v-text-field
                            label="Title"
                            filled
                        ></v-text-field>

                        <v-textarea
                            label="Description"
                            filled
                        >


                        </v-textarea>
                     </v-form>
            </v-card-text>

       

            <v-card-actions>
                <v-btn text color="warning" @click="closeDialog">
                    Close
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text class="success">
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
    computed : {
        ...mapGetters(["getAddTodoDialogStatus","getNewTodoPriority"])
    },
    methods : {
        closeDialog(){
            this.$store.commit("setAddTodoDialogStatus",false)
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