import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import i18n from "@/plugins/i18n";
import "@/mixins/locale";
import "@/mixins/route";
import "@/mixins/string";
import _ from "lodash";
import moment from "moment";
import "./styles/main.scss";

import { version } from "./../package.json";
Vue.prototype.$version = version;

import axios from "axios";
Vue.prototype.$axios = axios;
var api = {
  servers: {
    analysis: process.env.VUE_APP_URL_API_ANALYSIS,
    game: process.env.VUE_APP_URL_API_GAME,
    event: process.env.VUE_APP_URL_API_EVENT,
    log: process.env.VUE_APP_URL_API_LOG,
    question: process.env.VUE_APP_URL_API_QUESTION,
    sso: process.env.VUE_APP_URL_API_SSO,
  },
  fetch: async (props) => {
    var params = {};
    var headers = {};
    var method = "post";
    if (typeof props.params != "undefined") params = props.params;
    if (typeof props.method != "undefined") method = props.method;
    if (typeof props.headers != "undefined") headers = props.headers;
    //auto insert token
    if (typeof store.state.auth.data.Session != "undefined")
      headers.Authorization = "Bearer " + store.state.auth.data.Session.token;

    props.callbackReset();
    try {
      await axios({
        method: method,
        headers: headers,
        url: props.url,
        data: params,
      }).then(
        (response) => {
          if (response.data == null) {
            props.callbackError("Item not found.");
          } else if (response.data.error) {
            props.callbackError(response.data.error);
          } else {
            props.callbackSuccess(response.data);
          }
        },
        (error) => {
          if (
            typeof error.response != "undefined" &&
            typeof error.response.data != "undefined"
          ) {
            var err;
            if (
              typeof error.response.data.errors != "undefined" &&
              error.response.data.errors
            ) {
              var errors = error.response.data.errors;
              err = errors[Object.keys(errors)[0]];
            } else if (typeof error.response.data.message != "undefined") {
              err = error.response.data.message;
              if (err == "Authorization token expired") {
                //locale
                var locale = window.location.pathname.replace(
                  /^\/([^/]+).*/i,
                  "$1"
                );
                if (locale == "/") locale = "en";

                window.location.replace("/" + locale + "/error/expired");
              }
            } else {
              err = error;
            }
            props.callbackError(err);
          } else {
            props.callbackError(error);
          }
        }
      );
    } catch (e) {
      props.callbackError(e);
    }
  },
};
Vue.prototype.$api = api;

Vue.prototype.$_ = _;

Vue.prototype.$moment = moment;


import VueMeta from "vue-meta";
Vue.use(VueMeta);

import './registerServiceWorker'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
