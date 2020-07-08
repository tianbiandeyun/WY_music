import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Index',
        components: {
            // search 和 footer 固定的和头尾
            default: index,
            search: () => import('../components/WY_search/wy_search.vue'),
            footer: () => import('../components/WY_footer/wy_footer.vue')
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
