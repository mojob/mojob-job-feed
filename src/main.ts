import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import vuetify from '@/plugins/veutfiy';


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
