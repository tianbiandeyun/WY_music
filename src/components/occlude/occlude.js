import Occlude from './occlude.vue'
import Vue from 'vue'

let _showOcclude = () => {

    const Instance = new Vue({
        render(h) {
            return h(Occlude)
        }
    });

    const comp = Instance.$mount();

    document.body.appendChild(comp.$el);

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

export default _showOcclude;
