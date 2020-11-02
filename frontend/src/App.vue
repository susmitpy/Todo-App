<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-container>
    <v-row class="text-center">
      <v-col cols="12">
       My ToDos
      </v-col>
    </v-row>
      </v-container>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    //
  }),
};
</script>
