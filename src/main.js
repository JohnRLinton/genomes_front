// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/bootstrap.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/responsive.css'
import '@/assets/css/slick-theme.css'
import '@/assets/css/slick.css'
import '@/assets/css/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';


Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
