import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Case from "../views/case.vue";
import Advantages from "../views/advantages.vue";
import Services from "../views/services.vue";
import Products from "../views/products.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/case",
    name: "Case",
    component: Case,
  },
  {
    path: "/advantages",
    name: "Advantages",
    component: Advantages,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
