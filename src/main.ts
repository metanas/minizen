import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify";
import Snotify, { SnotifyPosition } from "vue-snotify";
//=================|| CSS FILES ||====================//
import "vuetify/dist/vuetify.css"; //vuetify scss
import "vue-snotify/styles/dark.css"; //snotify scss
import "nprogress/nprogress.css"; //loader scss
import "@/stylesheets/css/font-awesome.min.css"; //font awesome scss
import "@/stylesheets/scss/style.scss"; //style scss

Vue.config.productionTip = false;
const options = {
  toast: {
    position: SnotifyPosition.rightBottom
  }
};

Vue.use(Snotify, options);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
