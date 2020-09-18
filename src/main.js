import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'lib-flexible'
import './assets/css/rest.css'

Vue.config.productionTip = false;
import custom from "./unit/custom";

Vue.use(custom);

import animate from 'animate.css'

Vue.use(animate);

import wxShare from 'hztc-wxshare'

Vue.use(wxShare);

import wx from 'jk-wxhandler'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
