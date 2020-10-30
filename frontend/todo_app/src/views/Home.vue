<template>
  <v-container fluid>
     <!-- <Analytics/>
       <hr /> -->
       
     <TodosGrid />
   </v-container>
</template>

<script>
// import Analytics from './Analytics'
import TodosGrid from '@/components/TodosGrid'

export default {
  name: 'Home',
  components : {
    // Analytics,
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



