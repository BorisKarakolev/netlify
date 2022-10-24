<template>
  <div class="w-full h-full flex flex-col items-center text-white p-10">
    <div
      class="w-full h-full flex flex-col md:flex-row xl:flex-row items-center justify-center md:justify-between xl:justify-between mb-10"
    >
      <h1 class="text-2xl mb-10">TV Shows</h1>
      <show-search />
    </div>
    <loading-outlined
      v-if="$store.state.loading"
      class="w-full h-full text-8xl absolute top-0 left-0 flex items-center justify-center"
    />
    <div
      v-if="
        !$store.state.shows &&
        !$store.state.loading &&
        !$store.state.foundShows &&
        !$store.state.searching
      "
      class="w-full h-full text-6xl absolute top-0 left-0 flex items-center justify-center"
    >
      Sorry, no shows for today :(
    </div>
    <div class="space-y-5 text-center md:text-start xl:text-start w-full">
      <found-shows />
    </div>
    <div
      v-if="$store.state.shows && $store.state.shows.length > 0"
      class="space-y-5 text-center md:text-start xl:text-start w-full"
    >
      <dashboard-list
        :title="'Top 10 rated Tv Shows'"
        :shows="getTopRated($store.state.shows)"
      />
      <dashboard-list
        :title="'Comedies'"
        :shows="getGenres($store.state.shows, 'Comedy')"
      />
      <dashboard-list
        :title="'Actions'"
        :shows="getGenres($store.state.shows, 'Action')"
      />
      <dashboard-list
        :title="'Sports'"
        :shows="getGenres($store.state.shows, 'Sports')"
      />
      <dashboard-list
        :title="'Horrors'"
        :shows="getGenres($store.state.shows, 'Horror')"
      />
    </div>
  </div>
</template>

<script>
import DashboardList from "@/components/DashboardList.vue";
import ShowSearch from "@/components/ShowSearch.vue";
import FoundShows from "@/components/FoundShows.vue";
import { getTopRated, getGenres } from "@/utils/helpers";
import { LoadingOutlined } from "@ant-design/icons-vue";
export default {
  name: "TvShows",
  components: {
    DashboardList,
    ShowSearch,
    LoadingOutlined,
    FoundShows,
  },
  beforeMount() {
    this.$store.dispatch("fetchShows");
  },
  methods: {
    getTopRated,
    getGenres,
  },
};
</script>
