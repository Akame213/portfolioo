import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Portfolio from "./views/Portfolio.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/about",
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});
