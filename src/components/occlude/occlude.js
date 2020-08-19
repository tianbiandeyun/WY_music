import Occlude from './occlude.vue'
import Vue from 'vue'

// Occlude 是一个对象，往这个对象里添加一个方法
Occlude.newInstance = () => {

    let _props = {};

    // 实列化
    const Instance = new Vue({
        render(h) {
            return h(Occlude, {
                props: _props
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
            _occlude.showOcclude();
        },
        close() {
            _occlude.closeOcclude();
        }
    }

};

export default Occlude.newInstance();



