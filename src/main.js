import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
//三级联动组件 全局组件
import TypeNav from '@/components/TypeNav'
// 分页全局组件
import Pagination from '@/components/Pagination'

//第一个参数：组件的名字 ，第二个参数：那一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
Vue.config.productionTip = false
import store from '@/store'
//引入swiper样式
import 'swiper/css';

//引入Mock.js  ----mocks数据
import '@/mock/mockServer'

import * as API from '@/api'
//引入element-ui
import { Button, Select, MessageBox } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  render: h => h(App),
  //全局时间总线配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store
}).$mount('#app')
