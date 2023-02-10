import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cluster from '@/views/cluster'
import index from '@/views/index'
import help from '@/views/help'
import genomebrowser from '@/views/genomebrowser'
import LDblock from '@/views/LDblock'
import download from '@/views/download'
import sample from '@/views/sample'
import s from '@/views/s'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:'/sample',
      name:'sample',
      component: sample
    },
    {
      path:'/cluster',
      name:'cluster',
      component: cluster
    },
    {
      path:'/help',
      name:'help',
      component: help
    },
    {
      path:'/genomebrowser',
      name:'genomebrowser',
      component: genomebrowser
    },
    {
      path:'/LDblock',
      name:'LDblock',
      component: LDblock
    },
    {
      path:'/download',
      name:'download',
      component: download
    },
    {
      path:'/s',
      name:'s',
      component: s
    }
  ]
})
