<template>
  <v-container fluid>
     <!-- <Analytics/>
       <hr /> -->
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
hr {
    display: block;
    height: 2px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
}
</style>
