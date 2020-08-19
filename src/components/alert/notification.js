import Alert from './alert.vue';
import Vue from 'vue';

Alert.newInstance = properties => {
    const props = properties || {};

    // 实列化
    const Instance = new Vue({
        data: props,
        render(h) {
            return h(Alert, {
                props: props
            });
        }
    });

    // 将实列化的 Alert 添加到 body 中
    const component = Instance.$mount();
    document.body.appendChild(component.$el);

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