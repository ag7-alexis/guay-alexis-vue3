import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.page.vue";
import ListAmiibo from "../views/ListAmiibo.page.vue";
import DetailsAmiibo from "../views/DetailsAmiibo.page.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/amiibos",
            name: "ListAmiibo",
            component: ListAmiibo,
        },
        {
            path: "/amiibos/:amiiboTail",
            name: "DetailsAmiibo",
            component: DetailsAmiibo,
        },
    ],
});

export default router;
