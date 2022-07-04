import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    validate: "",
    name: "",
    password: "",
  },
  getters: {},
  mutations: {
    setValidate(state, validate){
      state.validate = validate;
       if (/^(\w)+\.(\w)+$/.test(validate)){
        localStorage.setItem("name", validate);
       } else if (/^\d{6,9}$/.test(validate)){
        localStorage.setItem("password", validate);
      } 
    } 
  },
  actions: {
    setValidate({ commit }, validate) {
      commit("setValidate", validate);
    },
  },
  modules: {},
});
