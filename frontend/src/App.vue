<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >


    <v-row class="text-left">
      <v-col cols="12">
       My ToDos
      </v-col>
    </v-row>


    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
    absolute
    >
        <v-layout grow justify-center>

        <div class="ml-3" align="center">Made by Susmit</div>


       <a href="https://www.github.com/susmitpy" class = "ml-4">
           <i class="fab fa-github fa-lg" ></i>
        </a>

        <a href="https://www.linkedin.com/in/susmit-vengurlekar/" class = "ml-4">
           <i class="fab fa-linkedin fa-lg" aria-hidden="true"></i>
        </a>
        <a href="https://www.hackerrank.com/susmit_py" class = "ml-4">
          <i class="fab fa-hackerrank fa-lg" ></i>
        </a>

      </v-layout>
    </v-footer>
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
