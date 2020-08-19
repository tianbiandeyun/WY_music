import config from './config'
import loading from '../components/WY_loading/wy_loading'
import Alert from '../components/alert/alert'
import Occlude from '../components/occlude/occlude'


const install = Vue => {

    Vue.prototype.$config = config;
    Vue.prototype.$Alert = Alert;
    Vue.prototype.$Occlude = Occlude;

    Vue.component('loading', loading);
};

export default install;