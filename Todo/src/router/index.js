import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DayList from '../views/DayList.vue'
import ViewDl from '../views/ViewDl.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/DayList',
    name: 'DayList',
    component: DayList
  },
  {
    path: '/ViewDl',
    name: 'ViewDl',
    component: ViewDl
  }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
