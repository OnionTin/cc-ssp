import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Meta from "vue-meta"; //适配移动端样式
import VuePicturePreview from "vue-picture-preview"; //图片预览插件

Vue.config.productionTip = false;
Vue.use(Meta);
Vue.component("Previewer", VuePicturePreview);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
