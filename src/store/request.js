import mutations from './mutations'
import util from '../unit/utils'
import axios from '../unit/axios'

export default {
    state: {
        banner: ''
    },
    actions: {
        _getBanner({commit}, res) {
            const url = util.produceRequestUrl(res.im, res.parames);
            return new Promise((resolve, reject) => {
                axios.get(url).then(res => {
                    resolve(res)
                })
            });
        },
    },
    mutations
}