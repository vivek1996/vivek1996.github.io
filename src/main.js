import Vue from "vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
