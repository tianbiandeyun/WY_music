import mutations from './mutations'
import config from '../unit/config'
import util from '../unit/utils'
// import axios from '../unit/axios'

export default {
    state: {
        banner: ''
    },
    actions: {
        _getBanner({commit}, res) {
            const face = res.im;
            const url = res.url || config.request_url;
            const params = res.params || {};
            const request_url = url + face;
            console.log(request_url);
            console.log(params);

            console.log(util.produceRequestUrl(request_url, params));


            // return new Promise((resolve, reject) => {
            //     axios.get(url).then(res => {
            //         resolve(res)
            //     })
            // });
        },
    },
    mutations
}