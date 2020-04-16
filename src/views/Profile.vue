<template>
  <div>
    <p>{{ user.email }}</p>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import * as firebase from "firebase/app";
import "firebase/auth";

import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    }
  }
});
</script>
