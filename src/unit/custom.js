import config from './config'
import loading from '../components/WY_loading/wy_loading'
import Alert from '../components/alert/alert'

const install = Vue => {

    Vue.prototype.$config = config;
    Vue.prototype.$Alert = Alert;

    Vue.component('loading', loading);
};

export default install;