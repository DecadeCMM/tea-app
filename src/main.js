// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import header from './components/Header';
import footer from './components/Footer';
import moment from 'moment'
import VueCookie from 'vue-cookie'
import { server } from './utils/config'; // 导入配置文件


// 把服务器端地址的路径配置在prototype属性上
Vue.prototype.$serverUrl = server;


Vue.use(ElementUI)
Vue.use(VueCookie)
Vue.prototype.moment = moment
Vue.config.productionTip = false


Vue.component('my-header',header)
Vue.component('my-footer',footer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
