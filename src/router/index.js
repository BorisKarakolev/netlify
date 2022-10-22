import { createRouter, createWebHistory } from "vue-router";
import TvShows from "@/views/TvShows.vue";
import ComingSoon from "@/views/ComingSoon.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ComingSoon,
  },
  {
    path: "/tvshows",
    name: "TV Shows",
    component: TvShows,
  },
  {
    path: "/tvshows/search/:inputText",
    name: "Found Shows",
    component: TvShows,
  },
  {
    path: "/movies",
    name: "Movies",
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
