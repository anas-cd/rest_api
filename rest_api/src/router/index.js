import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CountryView from '../views/CountryView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/:code',
        name: 'country',
        component: CountryView,
    },
    {
        path: '/notfound',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
