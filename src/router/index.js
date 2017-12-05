import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import all from '@/components/hello/all'
import qing from '@/components/hello/qing'
import lv from '@/components/hello/lv'
import hei from '@/components/hello/hei'
import flower from '@/components/hello/flower'
import aboutUs from '@/components/aboutUs'
import introduce from '@/components/about/introduce'
import line from '@/components/about/line'
import contact from '@/components/about/contact'
import business from '@/components/Business'
import procedure from '@/components/business/procedure'
import policy from '@/components/business/policy'
import advantage from '@/components/business/advantage'
import our from '@/components/business/our'
import news from '@/components/News'
import product from '@/components/Product'
import login from '@/components/Login'
import signin from '@/components/Signin'
import Detail from '@/components/Detail'
import pD from '@/components/productDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      children:[
        {path:'',component:all},
        {path:'qing',component:qing},
        {path:'lv',component:lv},
        {path:'hei',component:hei},
        {path:'flower',component:flower}
      ]
    },
    {
      path:'/about',
      name:'about',
      component:aboutUs,
      children:[
        {path:'',component:introduce},
        {path:'line',component:line},
        {path:'contact',component:contact},
      ]
    },
    {
      path:'/business',
      name:'business',
      component:business,
      children:[
        {path:'',component:procedure},
        {path:'policy',component:policy},
        {path:'advantage',component:advantage},
        {path:'our',component:our}
      ]
    },
    {
      path:'/news',
      name:'news',
      component:news,
    },{
      path:'/product',
      name:'product',
      component:product,
      children:[
        {path:'',component:all},
        {path:'qing',component:qing},
        {path:'lv',component:lv},
        {path:'hei',component:hei},
        {path:'flower',component:flower}
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login,
    },
    {
      path:'/signin',
      name:'signin',
      component:signin,
    },
    {
      path:'/Detail',
      name:'detail',
      component:Detail,
    },
    {
      path:'/pD',
      name:'pD',
      component:pD,
    }
  ]
})
