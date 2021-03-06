import { createWebHistory, createRouter } from "vue-router";

// dont forget npm install vue-router@next --save

const routes = [
    {
        path: '/main',
        name: 'Main',
        component: () =>
            import(/* webpackChunkName: "about" */ "../components/Main.vue"),
    },
    {
        path: '/secondary',
        name: 'Sec',
        component: () =>
            import(/* webpackChunkName: "about" */ "../components/Second.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;