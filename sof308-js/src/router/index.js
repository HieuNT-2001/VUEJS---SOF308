import { createWebHistory, createRouter } from 'vue-router'
import BookForm from '@/components/BookForm.vue'
import BookTable from '@/components/BookTable.vue'
import LoginForm from '@/components/LoginForm.vue'
import Api from '@/components/Api.vue'
import StudentTable from '@/components/StudentTable.vue'
import StudentForm from '@/components/StudentForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login-form',
      component: LoginForm,
    },
    {
      path: '/api',
      component: Api,
    },
    {
      path: '/students',
      component: StudentTable,
    },
    {
      path: '/students/add',
      component: StudentForm,
    },
  ],
})

export default router
