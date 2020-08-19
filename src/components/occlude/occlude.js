import Occlude from './occlude.vue'
import Vue from 'vue'

Occlude.newInstance = () => {

    const Instance = new Vue({
        render(h) {
            return h(Occlude)
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const occlude = Instance.$children[0];

    return {
        add() {
            occlude.add();
        },
        remove() {
            occlude.remove();
        }
    }

};

export default {
    add() {
        console.log(Occlude);
    },
    remove() {
        Occlude.remove();
    }
}

