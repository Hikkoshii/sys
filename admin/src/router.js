import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../src/views/Main.vue'
import CategoryEdit from '../src/views/CategoryEdit.vue'
import CategoryList from '../src/views/CategoryList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path:'/categories/create',component:CategoryEdit},
      {path:'/categories/list',component:CategoryList},
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
