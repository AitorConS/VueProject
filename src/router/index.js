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
      component: () => import('../modules/contador/components/contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'Lista de Tareas',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/registrar',
      name: 'Registro',
      component: () => import('../modules/registro/views/RegistroView.vue'),
    },
  ],
})

export default router
