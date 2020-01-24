import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify";
import Snotify, { SnotifyPosition } from "vue-snotify";
import VueI18n from "vue-i18n";
//=================|| CSS FILES ||====================//
import "vuetify/dist/vuetify.css"; //vuetify scss
import "vue-snotify/styles/dark.css"; //snotify scss
import "nprogress/nprogress.css"; //loader scss
import "@/stylesheets/css/font-awesome.min.css"; //font awesome scss
import "@/stylesheets/scss/style.scss"; //style scss

import en from "../src/lang/en";

Vue.config.productionTip = false;
const options = {
  toast: {
    position: SnotifyPosition.rightBottom
  }
};

Vue.use(VueI18n);
Vue.use(Snotify, options);

const messages = {
  en
};
const i18n = new VueI18n({
  locale: "en",
  messages
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
