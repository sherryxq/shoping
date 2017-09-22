import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portal',
      component: resolve => require(['@/components/portal'], resolve)
    },
    {
      path: '/info',
      name: 'info',
      component: resolve => require(['@/components/info'], resolve)
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: resolve => require(['@/components/Hello'], resolve)
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/components/test'], resolve)
    },
    {
      path: '/result',
      name: 'result',
      component: resolve => require(['@/components/result'], resolve)
    }
  ]
})
