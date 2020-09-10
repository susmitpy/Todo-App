<template>

    
     <v-speed-dial
    v-model = "fab"

    :open-on-hover = "on_hover"  
    :direction="direction"
    :transition="transition"
   
  >
    <template v-slot:activator v-if="isMobile()">
        
        <v-btn
            v-model = "fab"
            color = "blue darken-2"
            dark
            fab    
          >
            <v-icon v-if="fab">close</v-icon>
            <v-icon v-else>add</v-icon>
          </v-btn>
    </template>
    <template v-slot:activator v-else>
        
      <v-btn
            v-model = "fab"
            color = "blue darken-2"
            dark
          
          >
            Add Todo
          </v-btn>
    </template>

   
    <v-tooltip top>
      <template v-slot:activator="{on}">
        <v-btn
                fab
                dark
                small
                color="red"    
                v-on="on"
                @click="high_priority"
              >
          <v-icon>label</v-icon>
        </v-btn>
      </template> 
     
      <span>Add High Priority todo</span>
    </v-tooltip>

    <v-tooltip top>
      <template v-slot:activator="{on}">
       <v-btn fab dark small color="orange" v-on="on" @click="medium_priority">
         <v-icon>label</v-icon>
        </v-btn>
      </template>
      <span>Add Medium Priority todo</span>
    </v-tooltip>

     <v-tooltip top>
      <template v-slot:activator="{on}">
       <v-btn fab dark small color="blue" v-on="on" @click="low_priority">
         <v-icon>label</v-icon>
        </v-btn>
      </template>
      <span>Add Low Priority todo</span>
    </v-tooltip>
   
  </v-speed-dial>
 
 
</template>

<script>

export default {
    name : "AddTodoBtn",
   data(){
      return {
          fab: false,
          transition: "scale-transition",
      }
  },
  computed: {
     direction : ()=> (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? "left" : "right",
     on_hover : () => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? false : true
    },
  methods:{
      high_priority(){

          this.show_add_todo_dialog(3);
      },
      medium_priority(){

          this.show_add_todo_dialog(2);
      },
      low_priority(){

          this.show_add_todo_dialog(1);
      },
      show_add_todo_dialog(priority){
        this.$store.commit("setCurrentTodo",{"priority":priority})
        this.$store.commit("setAddTodoDialogStatus",true)
      },
      isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
  }
}


</script>

<style scoped>

</style>