<template>
  <div>
     <Analytics/>
     <hr />
     <TodosGrid />
  </div>
</template>

<script>
import Analytics from './Analytics'
import TodosGrid from './TodosGrid'

export default {
  name: 'Screen',
  components : {
    Analytics,
    TodosGrid
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
