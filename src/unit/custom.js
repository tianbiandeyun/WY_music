import config from './config'
import loading from '../components/WY_loading/wy_loading'

const install = Vue => {

    Vue.prototype.$config = config;

    Vue.component('loading', loading);
};

export default install;