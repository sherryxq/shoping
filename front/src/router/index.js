import Vue from 'vue'
import Router from 'vue-router'
import {Loading, Row, Select, Form, FormItem, Option,
        Col, Input, InputNumber, Button, Menu,
        DatePicker, TimePicker} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Loading.directive)
Vue.use(Row)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Col)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Menu)
Vue.use(DatePicker)
Vue.use(TimePicker)
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
