import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";

Vue.use(Vuex);
const debug = process.env.VUE_APP_ENV !== "production";

import VuexPersistence from "vuex-persist";
import Cookies from "js-cookie";
const vuexCookie = new VuexPersistence({
  key: "cookieStore",
  restoreState: (key) => Cookies.get(key),
  saveState: (key, state) =>
    Cookies.set(key, state, {
      expires: 30, // expire in 30 days
    }),
  modules: [
    //
  ],
});
const vuexLocal = new VuexPersistence({
  key: "localStore",
  storage: window.localStorage,
  modules: ["auth"],
});

export default new Vuex.Store({
  modules: {
    auth: auth,
  },
  strict: debug,
  plugins: [vuexCookie.plugin, vuexLocal.plugin],
});
