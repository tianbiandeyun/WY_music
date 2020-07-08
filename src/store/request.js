import mutations from './mutations'
import config from '../unit/config'
// import axios from '../unit/axios'

export default {
    state: {
        banner: ''
    },
    actions: {
        _getBanner({commit}, params) {
            const face = params.im;
            const url = params.url || config.request_url;
            console.log(JSON.stringify(url + face))
            // return new Promise((resolve, reject) => {
            //     axios.get(url).then(res => {
            //         resolve(res)
            //     })
            // });
        },
    },
    mutations
}