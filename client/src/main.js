import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'

import router from './router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
