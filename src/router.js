import { createRouter, createWebHistory } from "vue-router";

import Top from "@/views/Top";
import Restaurant from "@/views/Restaurant";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
