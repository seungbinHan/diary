import { createRouter, createWebHistory } from 'vue-router'
import diaryWrite from '../components/diaryWrite.vue'
import diaryMain from '../components/diaryMain.vue'
import diaryView from '../components/diaryView.vue'
const routes = [
  {
    path: '/',
    name: 'diaryMain',
    component: diaryMain,
    props : true
  },
  {
    path: '/diaryWrite',
    name: 'diaryWrite',
    component : diaryWrite
  },
  {
    path: '/diaryView',
    name: 'diaryView',
    component : diaryView,
    props : true
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
