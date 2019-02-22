import Vue from "vue";
import App from "./App.vue";

import router from "./router";

// 导入组件库
import SuperSlide from "../packages";
// 注册组件库
Vue.use(SuperSlide);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
