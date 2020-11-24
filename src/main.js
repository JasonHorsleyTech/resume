import Vue from "vue";
import App from "@/App";

import Axios from "axios";

import router from "@/router";
import "@/scss/main.scss";

Vue.prototype.$http = Axios;

Vue.prototype.$http.interceptors.request.use(
  (request) => {
    if (request.url[0] === "/") {
      request.url = process.env.VUE_APP_API_ROOT + request.url;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
