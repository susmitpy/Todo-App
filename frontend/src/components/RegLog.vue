<template>


      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
            <div>
                <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-4" icons-and-text dark grow>
                    <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                    <v-tab v-for="(item, i) in tabs" :key="item.id+i">
                        <v-icon large>{{ item.icon }}</v-icon>
                        <div class="caption py-1">{{ item.name }}</div>
                    </v-tab>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="loginForm" v-model="valid" lazy-validation>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginUsername" :rules="loginUsernameRules" label="Username" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginPassword" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 4 characters" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                          <v-label v-if="loginError" >
                                              Wrong User ID or Password
                                            </v-label>
                                        </v-col>
                                     
                                        <v-spacer></v-spacer>
                                       
                                        <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                            <v-btn x-large block :disabled="!valid" color="success" @click="validateLogin"> Login </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="registerForm" v-model="valid" lazy-validation>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 4 characters" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-label v-if="usernameTaken" >
                                              Username already taken
                                            </v-label>
                                        <v-spacer></v-spacer>
                                        
                                        <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                            <v-btn x-large block :disabled="!valid" color="success" @click="validateRegister">Register</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-title>
                                Try out without creating an account
                            </v-card-title>
                            <v-card-subtitle>
                                Data will be cleared on page reload
                            </v-card-subtitle>
                            <v-card-text>
                                <v-btn x-large block :disabled="!valid" color="success" @click="tryNow"> Try Now </v-btn>
                               
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </div>
        </v-dialog>


</template>

<script>
export default {
    name : "RegLog",
    computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    validateLogin() {
      if (this.$refs.loginForm.validate()) {
        console.log("Login");
        this.$store.commit("setTryOutMode",false)
        this.$store.commit("setUsername",this.loginUsername)
        this.$store.dispatch("login",
          {username : this.loginUsername,
          password: this.loginPassword
          }
      ).then(() => {
          this.$router.push("/home")
      }).catch(() => {
        this.loginError=true
        
      })

      }
    },
    validateRegister() {
      if (this.$refs.registerForm.validate()) {
        console.log("Register");
        this.$store.commit("setTryOutMode",false)
        this.$store.commit("setUsername",this.username)
        this.$store.dispatch("register",
          {username : this.username,
          password: this.password
          }
        ).then(() => {
        this.$router.push("/home")
        }).catch(() => {
          this.usernameTaken = true
        })

      }
    },
    tryNow(){
      this.$store.commit("setTryOutMode",true)
      this.$router.push("/home")
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
        {name:"Login", icon:"mdi-account",id:0},
        {name:"Register", icon:"mdi-account-outline",id:1},
        {name:"Try Out", icon:"mdi-account-cancel",id:2}
    ],
    valid: true,
    username: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginUsername: "",
    loginUsernameRules: [
      v => !!v || "Required",
      v => (v && v.length >= 6) || "Minimum 6 characters"
    ],
    usernameRules: [
      v => !!v || "Required",
      v => (v && v.length >= 6) || "Minimum 6 characters"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 4) || "Min 4 characters"
    },
    loginError : false,
    usernameTaken : false
  })
}
</script>

<style scoped>

</style>
