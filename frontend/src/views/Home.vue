<template>
  <v-container fluid>


       <StatusBar />
     <TodosGrid />
   </v-container>
</template>

<script>
import StatusBar from '@/components/StatusBar'
import TodosGrid from '@/components/TodosGrid'

export default {
  name: 'Home',
  components : {
    StatusBar,
    TodosGrid
  },
  created(){
    console.log("Created Called");
    this.$store.dispatch("getTodos")
  }

}
</script>

<style>

</style>
