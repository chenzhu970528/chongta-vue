import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Home from '../components/Home.vue'

import Adoption from '../components/adoption/Adoption.vue'
import AdoDetails from '../components/adoption/AdoptDetails.vue'
import AdoIssue from '../components/adoption/AdoptIssue.vue'

import matchmain from '../components/matchmaking/matchmain'
import matchDel from '../components/matchmaking/matchDel.vue'
import  mpublish from '../components/matchmaking/mpublish.vue'

import User from '../components/user/User.vue'
import UserDetails from '../components/user/UserDetails.vue'
import forum from '../components/user/Forum/forum.vue'
import message from '../components/user/message.vue'
import mypublish from '../components/user/mypublish.vue'

import update from '../components/user/accManagement/update.vue'
import aplyme from '../components/user/mesCenter/aplyme.vue'
import changepwd from '../components/user/accManagement/changepwd.vue'
import comme from '../components/user/mesCenter/comme.vue'
import myado from '../components/user/Publishing/myado.vue'
import myaply from '../components/user/mesCenter/myaply.vue'
import mycom from '../components/user/mesCenter/mycom.vue'
import mylost from '../components/user/Publishing/mylost.vue'
import mymatch from '../components/user/Publishing/mymatch.vue'
import sys from '../components/user/mesCenter/sys.vue'
import myhomls from '../components/user/Publishing/myhomls.vue'
import diary from '../components/user/Forum/adodiary.vue'
import dailylife from '../components/user/Forum/dailylife.vue'


import Homeless from '../components/homeless/Homeless.vue'
import publish from '../components/homeless/publish.vue'

import detail from '../components/homeless/detail.vue'
import wantadopt from '../components/homeless/wantadopt'
import people from '../components/homeless/people'

import personal from '../components/user/accManagement/personal'
import Communication from '../components/forum/Communication.vue'
// import Page from '../components/forum/Page.vue'
// import Share from '../components/forum/Share.vue'

import Lists from '../components/forum/Lists.vue'
import Details from '../components/forum/Details.vue'
// import Newest from '../components/forum/Newest.vue'

import finish from '../components/finish'
import backstage from '../components/backstage'
import Share from '../components/forum/Share.vue'
import register from '../components/register.vue'
// import Matchmaking from '../components/matchmaking/Matchmaking.vue'

Vue.use(Router);


export default new Router({
  mode:'history', //默认时hash模式（#）
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user/accManagement/personal',
      name: 'personal',
      component: personal,
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: backstage,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    //领养中心模块
    {
      path: '/adoption',
      name: 'Adoption',
      component: Adoption,
    },
    {
      path: '/adoption/details/:adoId',
      name:'AdoDetails',
      component: AdoDetails,
    },
    {
      path: '/adoption/issue',
      name:'AdoIssue',
      component: AdoIssue,
    },
    // 婚介
    {
      path : '/matchmaking',
      name : 'matchmain',
      component : matchmain,
    },
    {
      path:'/matchmaking/matchDel/:relId',
      name:'matchDel',
      component : matchDel,
    },
    {
      path:'/matchmaking/mpublish',
      name:'mpublish',
      component:mpublish
    },

    //流浪精灵模块
    {
      path: '/adoption/details/:adoId',
      name:'AdoDetails',
      component: AdoDetails,
    },
    {
      path: '/adoption/issue/:userId',
      name:'AdoIssue',
      component: AdoIssue,
    },
    {
      path: '/userDetails/:userId',
      name:'UserDetails',
      component: UserDetails,
    },
    {
      path: '/homeless',
      name: 'Homeless',
      component: Homeless,
    },
    {
      path: '/homeless/publish',
      name: 'publish',
      component: publish,
    },
    // {
    //   path: '/homeless/detailsimg',
    //   name:'detailsimg',
    //   component: detailsimg,
    // },
    {
      path: '/homeless/details/:homeId',
      name:'detail',
      component: detail,
    },
    // {
    //   path: '/homeless/details/:userId',
    //   name:'detailsmes',
    //   component: detailsmes,
    // },
    // 论坛
    {path: '/user/personal',
      name: 'personal',
      component: personal,
    },
    {path: '/forum',
      name: 'Communication',
      component: Communication,
    },

    {path: '/forum/lists',
      name: 'Lists',
      component: Lists,
    },
    {path: '/forum/details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/homeless/wantadopt',
      name: 'wantadopt',
      component:wantadopt,
    },
    {
      path: '/homeless/detail',
      name: 'detail',
      component: detail,
    },
    // {
    //   path: '/homeless/details',
    //   name: 'details',
    //   component: details,
    // },
    {
      path: '/finish',
      name: 'finish',
      component: finish,
    },
    {
      path: '/homeless/people',
      name: 'people',
      component: people,
    },
    // 个人中心
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
      children:[
        {path:'personal',component:personal},
        {path:'forum',component:forum},
        {path:'message',component:message},
        {path:'mypublish',component:mypublish},

        {path:'aplyme',component:aplyme},
        {path:'update',component:update},
        {path:'mycom',component:mycom},
        {path:'changepwd',component:changepwd},
        {path:'comme',component:comme},
        {path:'myado',component:myado},
        {path:'myaply',component:myaply},
        {path:'mymatch',component:mymatch},
        {path:'mylost',component:mylost},
        {path:'sys',component:sys},
        {path:'myhomls',component:myhomls},
        {path:'diary',component:diary},
        {path:'dailylife',component:dailylife},
      ]
    },
    {
      path: '/userDetails/:userId',
      name:'UserDetails',
      component: UserDetails,
    },


  ]
})
