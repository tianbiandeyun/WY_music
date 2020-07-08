import Vue from 'vue'
import Vuex from 'vuex'
import request from 'request'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        request
    },
    getters: {}

})