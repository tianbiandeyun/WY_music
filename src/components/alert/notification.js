import Alert from './alert.vue';
import Vue from 'vue';

Alert.newInstance = () => {

    console.log('33333')

    // 实列化
    const Instance = new Vue({
        render(h) {
            return h(Alert);
        }
    });

    // 手动渲染组件，但是还没有显示出来
    const component = Instance.$mount();

    // 将实列化的 Alert 添加到 body 中
    document.body.appendChild(component.$el);

    // 访问到 Alert 实列
    const alert = Instance.$children[0];

    return {
        add(noticeProps) {
            alert.add(noticeProps);
        },
        remove(name) {
            alert.remove(name);
        }
    }
};

export default Alert;