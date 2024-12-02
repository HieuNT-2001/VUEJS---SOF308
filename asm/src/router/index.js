import AddForm from '@/components/Student/AddForm.vue'
import EditForm from '@/components/Student/EditForm.vue'
import Index from '@/components/Student/Index.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/students',
      component: Index,
    },
    {
      path: '/students/add',
      component: AddForm,
    },
    {
      path: '/students/edit/:id',
      component: EditForm,
      props: true,
    },
  ],
})

export default router
