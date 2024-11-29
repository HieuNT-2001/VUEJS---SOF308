import { createWebHistory, createRouter } from 'vue-router'
import BookForm from '@/components/BookForm.vue'
import BookTable from '@/components/BookTable.vue'
import LoginForm from '@/components/LoginForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login-form',
      component: LoginForm,
    },
  ],
})

export default router
