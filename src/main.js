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

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
