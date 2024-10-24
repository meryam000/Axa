import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Prevoyance from '../components/prevoyance.vue';

console.log("Router is being set up...");

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: () => {
      console.log("Navigating to Home");
    }
  },
  {
    path: '/prevoyance',
    name: 'Prevoyance',
    component: Prevoyance,
    beforeEnter: () => {
      console.log("Navigating to Prevoyance");
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

console.log("Router is set up with the following routes:", routes);

export default router;
