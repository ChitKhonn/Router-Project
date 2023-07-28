import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobView from '../views/Job/JobView.vue'
import JobDetails from '../views/Job/JobDetails.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/job',
    name: 'job',
    component:JobView
  },
  //Job Details
  {
    path: '/jobdetails/:id',
    name: 'jobdetails',
    component:JobDetails,
    props:true
  },
  //Catch All 
  {
    path:'/:catchAll(.*)',
    component:NotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
