import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Index.vue";
const tabRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      navShow: true,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      navShow: true,
    },
  },
];

const otherRoutes: Array<RouteRecordRaw> = [
  {
    path: "/home/child",
    name: "SecondPage",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Home/SecondPage/Index.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...tabRoutes, ...otherRoutes],
});

export default router;
