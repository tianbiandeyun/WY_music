import config from './config'

const install = Vue => {
    Vue.prototype.$config = config;
};

export default install;