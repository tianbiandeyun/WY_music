import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/index',
        name: 'Index',
        components: {
            // search 和 footer 固定的和头尾
            default: index,
            search: () => import('../components/WY_search/wy_search.vue'),
            footer: () => import('../components/WY_footer/wy_footer.vue')
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/test.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

// const flag = true;
// router.beforeEach((to, from, next) => {
//
//     if (flag) {
//         //继续执行正常跳转
//         if (to.name === 'Test') next('/');
//         else next()
//     } else {
//         //跳转到指定的登录页login
//         if (to.name === 'Test') next()
//         else next('/test')
//     }
//
// });

export default router
