import { createRouter, createWebHistory } from "vue-router";
import TvShows from "@/views/TvShows.vue";
import ComingSoon from "@/components/ComingSoon.vue";

const routes = [
  {
    path: '/',
    component: ComingSoon
  },
  {
    path: "/tvshows",
    component: TvShows,
  },
  {
    path: "/movies",
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
