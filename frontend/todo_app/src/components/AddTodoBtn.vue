<template>
   <fab
   :position="position"
   :bg-color="bgColor"
   :actions="fabActions"
   :main-tooltip="mainTooltip"
   @high_priority="high_priority"
   @medium_priority="medium_priority"
   @low_priority = "low_priority"
></fab>

</template>

<script>
import fab from 'vue-fab'
export default {
    name : "AddTodoBtn",
    components: {
    fab
  },
   data(){
      return {
          bgColor: '#194D33',
          position: 'bottom-right',
          mainTooltip : "Add TODO", 
          fabActions: [
              {
                  name: 'high_priority',
                  icon: 'add',
                  color : "red",
                  tooltip: "Add High Priority Todo"
              },
              {
                  name: 'medium_priority',
                  icon: 'add',
                  color : "orange",
                  tooltip: "Add Medium Priority Todo"
              },
              {
                  name: 'low_priority',
                  icon: 'add',
                  color : "blue",
                  tooltip: "Add Low Priority Todo"
              },
          ]
      }
  },
  methods:{
      high_priority(){
          alert("High Priority Todo")
      },
      medium_priority(){
          alert("Medium Priority Todo")
      },
      low_priority(){
          alert("Low Priority Todo")
      },
  }
}


</script>

<style scoped>

</style>