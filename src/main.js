
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Carousel } from 'element-ui';
import router from './router'
import $ from 'jquery'
import store from './router/store'
import { Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//Vue.use(Viewer) 默认配置写法
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})


Vue.config.productionTip = false
Vue.component(Pagination.name, Pagination);

Vue.use(ElementUI);
Vue.use(Carousel);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

//跳转后回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

