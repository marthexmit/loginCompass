import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    password: "",

    buttonlogin: "",
    control1: "",
    control2: "",
    user: "",
    timer: 600

  },
  getters: {},
  mutations: {
    setName(state, name){
      state.name = name;
      if (/^(\w)+\.(\w)+$/.test(name)){
        localStorage.setItem("name", name);
        this.state.control1 = true;
      } else{localStorage.setItem("name","")
        this.state.control2 = false;
    }
    },
    setPassword(state, password){
      state.password = password;
     if (/^\d{6,9}$/.test(password)){
      localStorage.setItem("password", password);
      this.state.control2 = true;
     } else {localStorage.setItem("password", "")
      this.state.control2 = false;
    }
    },
    setButtonLogin(state, buttonlogin){
      state.buttonlogin = buttonlogin;
    }
  },
  actions: {
    setButtonLogin({ commit }, buttonlogin) {
      commit("setButtonLogin", buttonlogin);
    },
    setName({ commit }, name) {
      commit("setName", name);
    },
    setPassword({ commit }, password) {
      commit("setPassword", password);
    },
  },
  modules: {},
});
