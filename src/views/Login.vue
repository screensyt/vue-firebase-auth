<template>
  <div class="form">
    <h1 class="title">Login</h1>
    <div class="tile is-vertical is-4">
      <b-field label="Email">
        <b-input icon="email" type="email" v-model="email" />
      </b-field>
      <b-field label="Password">
        <b-input type="password" password-reveal v-model="password" /> </b-field
      ><b-message type="is-danger" v-if="error">
        {{ error }}
      </b-message>
      <b-button class="is-primary" @click="login()">Login</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import * as firebase from "firebase/app";
import "firebase/auth";

import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters(["user"]),
    nextRoute() {
      return this.$route.query.redirect || "/profile";
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  watch: {
    // user(auth) {
    //   if (auth) {
    //     this.$router.replace(this.nextRoute);
    //   }
    // }
    user: function(changedUser) {
      if (changedUser) {
        this.$router.replace(this.nextRoute);
      }
    },
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
});
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}
</style>
