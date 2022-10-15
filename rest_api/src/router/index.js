import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CountryView from '../views/CountryView.vue';
import NotFound from '../views/NotFound.vue';
import NProgress from 'nprogress';
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            scrollPos: {
                top: 0,
                left: 0,
            },
        },
    },
    {
        path: '/:code',
        name: 'country',
        component: CountryView,
        meta: {
            scrollPos: {
                top: 0,
                left: 0,
            },
        },
    },
    {
        path: '/notfound',
        name: 'NotFound',
        component: NotFound,
        meta: {
            scrollPos: {
                top: 0,
                left: 0,
            },
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (from.meta.scrollPos) {
            from.meta.scrollPos.top = window.pageYOffset;
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                if (to.params.reset) {
                    return resolve({ top: 0, left: 0 });
                } else if (to.hash) {
                    return resolve({ selector: to.hash });
                } else if (savedPosition) {
                    return resolve(savedPosition);
                } else {
                    return resolve({ top: to.meta.scrollPos.top });
                }
            }, 1200);
        });
    },
});

router.beforeEach(() => {
    NProgress.start();
});
export default router;
