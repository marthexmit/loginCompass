import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    password: "",
  },

  getters: {},
  mutations: {
    setName(state, name) {
      state.name = name;
      if (/^(\w)+\.(\w)+$/.test(name)) {
        localStorage.setItem("name", name);
      } else {
        localStorage.setItem("name", "");
      }
    },
    setPassword(state, password) {
      state.password = password;
      if (/^\d{6,9}$/.test(password)) {
        localStorage.setItem("password", password);
      } else {
        localStorage.setItem("password", "");
      }
    },
  },
  actions: {
    setName({ commit }, name) {
      commit("setName", name);
    },
    setPassword({ commit }, password) {
      commit("setPassword", password);
    },
  },
  modules: {},
});
