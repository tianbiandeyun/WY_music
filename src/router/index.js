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
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

const flag = false;
router.beforeEach((to, from, next) => {
    if (flag) {
        next()
    } else {
        if (to.name === 'Login') {
            next()
        } else {
            next('/login')
        }
    }
});

export default router
