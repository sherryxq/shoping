import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import info from '@/components/info'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})
