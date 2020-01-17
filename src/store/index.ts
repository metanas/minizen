import Vue from "vue";
import Vuex from "vuex";
import ecommerce from "./modules/ecommerce";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ecommerce
  }
});
