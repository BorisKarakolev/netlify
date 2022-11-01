import { createRouter, createWebHistory } from "vue-router";
import TvShows from "@/views/TvShows.vue";
import FoundShows from "@/views/FoundShows.vue";
import Movies from "@/views/Movies.vue";
import ComingSoon from "@/components/ComingSoon.vue";

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
    path: "/search",
    name: "Found Shows",
    component: FoundShows,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
