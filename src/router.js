import { createRouter, createWebHistory } from "vue-router";

import Top from "@/views/Top";
import Restaurant from "@/views/Restaurant";

import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Top,
  },
  {
    path: "/restaurant/:id",
    name: "restaurant",
    component: Restaurant,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/:page(.*)",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
