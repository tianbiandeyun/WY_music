const path = require('path');
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'less', // 预处理器的类型
            'patterns': [
                path.resolve(__dirname, './src/assets/css/default.less'), // 本地样式路径
            ]
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px2rem")({
                        remUnit: 37.5 // 设计稿 / 10 --- 750 / 10 = 75
                    })
                ]
            }
        }
    }
};