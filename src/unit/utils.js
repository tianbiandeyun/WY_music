import config from './config'

export default {
    /**
     * 拼接 get 请求地址参数
     * */
    produceRequestUrl: (face, parames = '', method = 'get') => {
        let [url, query] = [config.request_url + face, parames];
        if (!url) return '';
        if (method === 'post') {
            return url;
        }
        if (query) {
            let queryArr = [];
            for (const key in query) {
                if (query.hasOwnProperty(key)) {
                    queryArr.push(`${key}=${query[key]}`)
                }
            }
            if (url.indexOf('?') !== -1) {
                url = `${url}&${queryArr.join('&')}`
            } else {
                url = `${url}?${queryArr.join('&')}`
            }
        }
        return url;
    }
}