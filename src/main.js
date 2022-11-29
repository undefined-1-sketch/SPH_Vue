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
new Vue({
  render: h => h(App),
  //全局时间总线配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store
}).$mount('#app')
