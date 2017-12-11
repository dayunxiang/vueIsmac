import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Login from '@/page/login'
import Loncom from '@/page/loncom'

import Environment from '@/page/environment'
import Environment_detail from '@/page/environment_detail'
import Environment_card from '@/page/environment_card'
import Environment_table from '@/page/environment_table'

import Power from '@/page/power'
import Security from '@/page/security'
import Energy from '@/page/energy'
import Alarm from '@/page/alarm'
import Statement from '@/page/statement'
import Equipment from '@/page/equipment'
import System from '@/page/system'


import Testindex from '@/page/testindex'

import Anfang from '@/page/anfang'
import Anfang1 from '@/page/anfang1'
import Anfang2 from '@/page/anfang2'

Vue.use(Router)

export default new Router({
  //mode:'hash',  //hash,history，history打包静态无法展示，不知道要怎么设置才行
  routes: [
    {
      path: '',
      component: Index
    },{
      path: '/',
      component: Index
    },{
      path: '/login',
      component: Login
    },{
      path:'/loncom',
      component: Loncom,
      //redirect:'',
      children:[
        //环境系统
        {path:'/loncom/environment',component:Environment}, //环境系统卡片,环境系统列表
        {path:'/loncom/environment_detail',component:Environment_detail}, //环境系统详情

        {path:'/loncom/power',component:Power}, //动力系统
        {path:'/loncom/security',component:Security},  //安防系统
        {path:'/loncom/energy',component:Energy}, //能效管理
        {path:'/loncom/alarm',component:Alarm}, //动环事件
        {path:'/loncom/statement',component:Statement}, //监控报表
        {path:'/loncom/equipment',component:Equipment},  //设备管理
        {path:'/loncom/system',component:System}  //系统管理
      ]
    },
    
    

    {
      path:'/testindex',
      component:Testindex
    },
    {
      path:'/anfang',
      component:Anfang,
      redirect: '/anfang/anfang1',
      children:[
        {path:'/anfang/anfang1',name:'Anfang1',component:Anfang1},
        {path:'/anfang/anfang2',name:'Anfang2',component:Anfang2}
      ]
    }

  ]
})


