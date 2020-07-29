import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "computerIndex",
    component: () => import("@/views/computer/computerIndex.vue")
  },
  {
    path: "/computerIndex",
    name: "computerIndex",
    component: () => import("@/views/computer/computerIndex.vue")
  },
  {
    path: "/mobileIndex",
    name: "mobileIndex",
    component: () => import("@/views/mobile/mobileIndex.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
