import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue' ;
import ContactView from '../views/ContactView.vue';
import PageView from '../views/PageView.vue';
import ServiceView from '../views/ServiceView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    
    {
      path: '/page',
      name: 'page',
      component: PageView
    },
    
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:AboutView
    }
  ]
})

export default router
