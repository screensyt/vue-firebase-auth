import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "./assets/scss/app.scss";

import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE5VDKPFXQRFWF1HECHZKPhPHBR1Xaq14",
  authDomain: "vue-fs-af3f8.firebaseapp.com",
  databaseURL: "https://vue-fs-af3f8.firebaseio.com",
  projectId: "vue-fs-af3f8",
  storageBucket: "vue-fs-af3f8.appspot.com",
  messagingSenderId: "590293754583",
  appId: "1:590293754583:web:61ace9907f77d0329e8692",
  measurementId: "G-YDSNQF9LMC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.commit("updateUser", { user });
});

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
