import { createRouter, createWebHistory } from "vue-router";

import Top from '@/components/Top';
import Restaurant from '@/components/Restaurant';
import Signin from '@/components/Signin';
import Signout from '@/views/Signout';


const routes = [
  {
    path: '/',
    name: 'index',
    component: Top,
  },
  {
    path: '/restaurant/:id',
    name: 'restaurant',
    component: Restaurant,
  },
  {
    path: '/Signout',
    name: 'signout',
    component: Signout,
  },
  {
    path: '/Signin',
    name: 'signin',
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

