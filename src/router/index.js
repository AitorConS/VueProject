import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../views/HomeView.vue'
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*          {
      path: '/',
      name: 'home',
      component: HomeView,
    }, */
    {
      path: '/contador',
      name: 'Contador',
      component: () => import('../components/contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'Lista de Tareas',
      component: () => import('../components/ListaDeTareas.vue'),
    },
  ],
})

export default router
