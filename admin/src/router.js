import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../src/views/Main.vue'
import CategoryEdit from '../src/views/CategoryEdit.vue'
import CategoryList from '../src/views/CategoryList.vue'

import ItemEdit from '../src/views/ItemEdit.vue'
import ItemList from '../src/views/ItemList.vue'

import HeroEdit from '../src/views/HeroEdit.vue'
import HeroList from '../src/views/HeroList.vue'

import ArticleEdit from '../src/views/ArticleEdit.vue'
import ArticleList from '../src/views/ArticleList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path:'/categories/create',component:CategoryEdit},
      {path:'/categories/edit/:id',component:CategoryEdit, props:true },
      {path:'/categories/list',component:CategoryList},

      {path:'/items/create',component:ItemEdit},
      {path:'/items/edit/:id',component:ItemEdit, props:true },
      {path:'/items/list',component:ItemList},

      {path:'/heroes/create',component:HeroEdit},
      {path:'/heroes/edit/:id',component:HeroEdit, props:true },
      {path:'/heroes/list',component:HeroList},

      {path:'/articles/create',component:ArticleEdit},
      {path:'/articles/edit/:id',component:ArticleEdit, props:true },
      {path:'/articles/list',component:ArticleList},
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
