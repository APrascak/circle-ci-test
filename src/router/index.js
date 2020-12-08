import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/Jobs.vue";
import Events from "../views/Events.vue";
import UserPortal from "../views/UserPortal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/userportal",
    name: "UserPortal",
    component: UserPortal,
  }
];

const router = new VueRouter({
  routes
});

export default router;
