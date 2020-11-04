<template>
    <v-row no-gutters>
       <v-flex class="ml-3" v-if="notTryOut">
           Welcome, {{this.$store.getters.getUsername}}
        </v-flex>
        <v-flex class="ml-3" v-if="tryOut">
            Welcome Guest
        </v-flex>

        <v-spacer></v-spacer>
        <v-btn @click="logout" v-if="notTryOut" class = "mr-3 pa-1" x-small outlined>
            Logout
        </v-btn>

         <v-card class = "mr-3 pa-1" @click="home" v-if="tryOut">
            Home
        </v-card>

    </v-row>
</template>

<script>


export default {
    name : "StatusBar",
    methods : {
        logout(){
            this.$store.dispatch("logout")
            .then(() => {
                this.$router.push("/")
            })
        },
        home(){
 this.$store.commit("setTryOutMode",false)
            this.$router.push("/")

        }
    },
    computed : {
        notTryOut() {
            return !this.$store.getters.inTryOutMode
        },
        tryOut() {
            return this.$store.getters.inTryOutMode
        }
    }

}
</script>

<style scoped>


</style>
