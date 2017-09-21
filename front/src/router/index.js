import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import info from '@/components/info'
import portal from '@/components/portal'
import test from '@/components/test'
import result from '@/components/result'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portal',
      component: portal
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/result',
      name: 'result',
      component: result
    }
  ]
})
