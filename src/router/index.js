import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: "/home",
      component: import(/* webpackChunkName: "home" */'@/views/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: import(/* webpackChunkName: "about" */'@/views/AboutPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      alias: "/get-in-touch",
      component: import(/* webpackChunkName: "contact" */'@/views/ContactPage.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: import(/* webpackChunkName: "contact" */'@/views/Search.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: import(/* webpackChunkName: "contact" */'@/views/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: import(/* webpackChunkName: "contact" */'@/views/Admin.vue'),
      children: [
        {
          path: '/admin/manager-user',
          name: 'managerUser',
          component: import(/* webpackChunkName: "contact" */'@/views/Users.vue')
        },
        {
          path: '/admin/manager-product',
          name: 'managerProduct',
          component: import(/* webpackChunkName: "contact" */'@/views/Products.vue')
        },
        {
          path: '/admin/settings',
          name: 'settings',
          component: import(/* webpackChunkName: "contact" */'@/views/Settings.vue')
        },
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: import(/* webpackChunkName: "contact" */'@/views/Dashboard.vue'),
      beforeEnter: (to, from, next) =>{
        const isLoggedIn  = true;
        if(isLoggedIn){
          next();
        }else{
          next("/")
        }
      },
    },
    {
      path: '/:pathMath(.*)*',
      name: 'notFound',
      component: import (/* webpackChunkName: "notFound" */'@/views/NotFound.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: import(/* webpackChunkName: "posts" */'@/views/ListPost.vue')
    },
    {
      path: '/list-product',
      name: 'listProduct',
      component: import(/* webpackChunkName: "posts" */'@/views/ListProduct.vue')
    },
    {
      path: '/product-detail/:id',
      name: 'productDetail',
      component: import(/* webpackChunkName: "posts" */'@/views/ProductDeatil.vue')
    },
    {
      path: '/posts/:id',
      name: 'postsDetail',
      component: import(/* webpackChunkName: "contact" */'@/views/PostDetail.vue'),
    },
  ],
  scrollBehavior: (to, from, savedPosition)=>{
    if(savedPosition){
      return savedPosition
    }else{
      return{
        top: 0,
        behavior: "smooth",
      }
    }
  }
})

export default router
