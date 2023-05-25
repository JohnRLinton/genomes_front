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
import SNP from '@/views/SNP'
import GWAS from '@/views/GWAS'

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
      component: sample,
      // meta: {
      //   keepAlive: true // 判断是否缓存
      // }
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
    },{
      path:'/SNP',
      name:'SNP',
      component: SNP
    },{
      path:'/GWAS',
      name:'GWAS',
      component: GWAS
    },
  ]
})
