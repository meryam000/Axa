import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Prevoyance from '../components/prevoyance.vue';
import Mutuelle from '../components/Mutuelle.vue';
import Retraite from '../components/Retraite.vue';
import Contact from '../components/contact.vue';
import Enprunteur from '../components/emprunteur.vue';
import CookiePolicyPage from '../components/CookiePolicyPage.vue';

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
  },
  {
    path: '/mutuelle',
    name: 'mutuelle',
    component: Mutuelle,
    beforeEnter: () => {
      console.log("Navigating to mutuelle");
    }
  },
  {
    path: '/per-retraite',
    name: 'retraite',
    component: Retraite,
    beforeEnter: () => {
      console.log("Navigating to mutuelle");
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    beforeEnter: () => {
      console.log("Navigating to mutuelle");
    }
  },
  {
    path: '/assurance-emprunteur',
    name: 'enprunteur',
    component: Enprunteur,
    beforeEnter: () => {
      console.log("Navigating to mutuelle");
    }
  },
  { path: '/cookie-policy',
    name: 'CookiePolicy',
    component: CookiePolicyPage,

  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

console.log("Router is set up with the following routes:", routes);

export default router;
