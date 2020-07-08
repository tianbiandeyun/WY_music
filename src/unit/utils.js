export default {
    produceRequestUrl: (im, fps, url, method = "get") => {
        let requestUrl = url;
        let qoute = "?";
        if (/\?/.test(requestUrl)) {
            qoute = "&";
        }
        let baseUrl = requestUrl + qoute + "im=" + im;
        // 如果是 get 则走这个参数拼接
        if (method === "get") {
            for (let name in fps) {
                baseUrl += `${name}` + encodeURIComponent(fps[name]).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
            }
            baseUrl += "&iv=jsonp&callback=";
        }
        // 如果是 post 则直接返回
        return baseUrl;
    }
}