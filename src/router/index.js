import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Home from '../components/Home.vue'
import axios from 'axios'


import Adoption from '../components/adoption/Adoption.vue'
import AdoDetails from '../components/adoption/AdoptDetails.vue'
import AdoIssue from '../components/adoption/AdoptIssue.vue'

import matchmain from '../components/matchmaking/matchmain'
import matchDel from '../components/matchmaking/matchDel.vue'
import  mpublish from '../components/matchmaking/mpublish.vue'
import matchList from '../components/matchmaking/matchlist.vue'
import TimeDesc from '../components/matchmaking/TimeDesc.vue'
import TimeAsc from '../components/matchmaking/TimeAsc.vue'
import HotDesc from '../components/matchmaking/HotDesc.vue'

import User from '../components/user/User.vue'
import UserDetails from '../components/user/UserDetails.vue'


import message from '../components/user/message.vue'
import mypublish from '../components/user/mypublish.vue'

import update from '../components/user/accManagement/update.vue'
import aplyme from '../components/user/mesCenter/aplyme.vue'
import changepwd from '../components/user/accManagement/changepwd.vue'
import comme from '../components/user/mesCenter/comme.vue'
import myado from '../components/user/Publishing/myado.vue'
import myaply from '../components/user/mesCenter/myaply.vue'
import mycom from '../components/user/Forum/mycom.vue'
import mylost from '../components/user/Publishing/mylost.vue'
import mymatch from '../components/user/Publishing/mymatch.vue'
import myhomls from '../components/user/Publishing/myhomls.vue'

import diary from '../components/user/Forum/adodiary.vue'
import dailylife from '../components/user/Forum/dailylife.vue'
import like from '../components/user/Forum/like.vue'
import com from '../components/user/Forum/mycom.vue'


import Homeless from '../components/homeless/Homeless.vue'
import publish from '../components/homeless/publish.vue'

import detail from '../components/homeless/detail.vue'
import wantadopt from '../components/homeless/wantadopt'
import people from '../components/homeless/people'

import personal from '../components/user/accManagement/personal'
import Communication from '../components/forum/Communication.vue'


import Lists from '../components/forum/Lists.vue'
import Details from '../components/forum/Details.vue'


import finish from '../components/finish'
import backstage from '../components/backstage'


import register from '../components/register.vue'


Vue.use(Router);
Vue.prototype.$axios = axios;


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
      children:[
        {path:'',component:matchList},
        {path:'TimeDesc',component:TimeDesc},
        {path:'TimeAsc',component:TimeAsc},
        {path:'HotDesc',component:HotDesc},
      ]
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


    {path: '/user/personal',
      name: 'personal',
      component: personal,
    },
    // 论坛
    {path: '/forum',
      name: 'Communication',
      component: Communication,
    },


    {path: '/forum',
      name: 'Lists',
      component: Lists,
      children: [
        {path:'new',component:Lists},
        {path:'recommend',component:Lists},
        {path:'diary',component:Lists},
        {path:'share',component:Lists},
      ]
    },
    {path: '/forum/result/:aa',
      name: 'Lists',
      component: Lists,
    },

    {path: '/forum/:faId',
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
      path: '/user',
      name: 'User',
      component: User,
      children:[
        {path:'',component:personal},
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
        {path:'myhomls',component:myhomls},

        {path:'diary',component:diary},
        {path:'like',component:like},
        {path:'com',component:com},

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
