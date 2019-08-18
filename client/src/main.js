import Vue from 'vue';
import VueRouter from 'vue-router';
import SuiVue from 'semantic-ui-vue';

import router from './router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.use(SuiVue);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
