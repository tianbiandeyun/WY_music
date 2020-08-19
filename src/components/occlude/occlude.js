import Occlude from './occlude.vue'
import Vue from 'vue'
import Notification from "../alert/notification";

// Occlude 是一个对象，往这个对象里添加一个方法
Occlude.newInstance = (props) => {

    // 实列化
    const Instance = new Vue({
        render(h) {
            return h(Occlude, {
                props: props || {}
            })
        }
    });

    // 手动渲染组件，但是还没有显示出来
    const comp = Instance.$mount();

    // 将实列化的 Occlude 添加到 body 中
    document.body.appendChild(comp.$el);

    // 访问到 Occlude 实列
    const _occlude = Instance.$children[0];

    return {
        show() {
            _occlude.showOcclude(props.prpos_data);
        },
        close() {
            _occlude.closeOcclude();
        }
    }

};

let messageInstance;

let getMessageInstance = (props) => {
    messageInstance = messageInstance || Occlude.newInstance(props);
    return messageInstance;
};

export default {
    show(props) {
        getMessageInstance(props).show();
    },
    close() {
        getMessageInstance().close();
    }
};



