<template>
    <div>
        <span v-if="!isMobile">Filter Todos: </span>
        <span class="legend px-2" v-if="!isMobile">
                <v-chip class="ma-2" filter-icon="mdi-label" filter :input-value="all_filter" text-color="purple" @click="turnOnFilter(0)">
                    All
                </v-chip>

                <v-chip class="ma-2" filter-icon="mdi-label" filter :input-value="high_filter" text-color="red" @click="turnOnFilter(3)">
                    High
                </v-chip>
                <v-chip class="ma-2" filter-icon="mdi-label" filter :input-value="medium_filter" text-color="orange" @click="turnOnFilter(2)">
                    Medium
                </v-chip>
                <v-chip class="ma-2" filter-icon="mdi-label" filter :input-value="low_filter" text-color="blue" @click="turnOnFilter(1)">
                    Low
                </v-chip>
        </span>
        <span class="legend" v-else>
                <v-chip class="ma-1" filter-icon="mdi-label" filter :input-value="all_filter" text-color="purple" @click="turnOnFilter(0)">
                    All
                </v-chip>

                <v-chip class="ma-1" filter-icon="mdi-label" filter :input-value="high_filter" text-color="red" @click="turnOnFilter(3)">
                    High
                </v-chip>
                <v-chip class="ma-1" filter-icon="mdi-label" filter :input-value="medium_filter" text-color="orange" @click="turnOnFilter(2)">
                    Medium
                </v-chip>
                <v-chip class="ma-1" filter-icon="mdi-label" filter :input-value="low_filter" text-color="blue" @click="turnOnFilter(1)">
                    Low
                </v-chip>
        </span>
    </div>
</template>

<script>
export default {
    name : "FilterTodos",
    computed : {
            high_filter(){
                return this.$store.getters.getPriorityFilter==3
            },
            medium_filter(){
                return this.$store.getters.getPriorityFilter==2
            },
            low_filter(){
                return this.$store.getters.getPriorityFilter==1
            },
            all_filter(){
                return this.$store.getters.getPriorityFilter==0
            }
    },
    methods: {
        turnOnFilter(priority){
            this.$store.commit("setPriorityFilter",priority)
        },
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

</style>
