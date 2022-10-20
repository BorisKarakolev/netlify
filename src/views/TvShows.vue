<template>
  <div
    class="w-full h-full flex flex-col items-center text-white p-10 relative"
  >
    <div
      class="w-full h-full flex flex-col md:flex-row xl:flex-row items-center justify-center md:justify-between xl:justify-between mb-10"
    >
      <h1 class="text-2xl mb-10">TV Shows</h1>
      <show-search :search-show="searchShow" />
    </div>
    <loading-outlined
      v-if="loading"
      class="w-full h-full text-6xl flex items-center justify-center"
    />
    <div
      v-if="!shows && !searchedShows && !searching"
      class="w-full text-6xl flex items-center justify-center"
    >
      Sorry, no shows for today :(
    </div>
    <div v-if="searchedShows && searchedShows.length > 0">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-10 gap-3">
        <div v-for="show in searchedShows" :key="show.show.id">
          <image-modal :show="show.show" />
        </div>
      </div>
    </div>
    <div
      v-if="shows && shows.length > 0"
      class="space-y-5 text-center md:text-start xl:text-start"
    >
      <dashboard-list
        :title="'Top 10 rated Tv Shows'"
        :shows="getTopRated(shows, 10)"
      />
      <dashboard-list :title="'Comedies'" :shows="getGenres(shows, 'Comedy')" />
      <dashboard-list :title="'Actions'" :shows="getGenres(shows, 'Action')" />
      <dashboard-list :title="'Sports'" :shows="getGenres(shows, 'Sports')" />
      <dashboard-list :title="'Horrors'" :shows="getGenres(shows, 'Horror')" />
    </div>
  </div>
</template>

<script>
import DashboardList from "@/components/DashboardList.vue";
import ShowSearch from "@/components/ShowSearch.vue";
import ImageModal from "@/components/Image.vue";
import { getTopRated, getGenres } from "@/utils/helpers";
import { LoadingOutlined } from "@ant-design/icons-vue";
export default {
  name: "TvShows",
  components: {
    DashboardList,
    ShowSearch,
    ImageModal,
    LoadingOutlined,
  },
  data() {
    return {
      loading: true,
      searching: true,
      shows: null,
      searchedShows: null,
    };
  },
  mounted() {
    this.fetchShows();
  },
  methods: {
    fetchShows() {
      this.shows = null;
      this.loading = true;
      this.axios
        .get("https://api.tvmaze.com/shows")
        .then((response) => {
          this.loading = false;
          this.shows = response.data;
        })
        .catch((err) => {
          this.loading = false;
          this.shows = null;
          console.log(err);
        });
    },
    searchShow(inputText) {
      this.searchedShows = null;
      this.searching = true;
      setTimeout(() => {
        this.axios
          .get(`https://api.tvmaze.com/search/shows?q=${inputText}`)
          .then((response) => {
            this.searching = false;
            this.searchedShows = response.data;
            if (inputText === "") {
              this.fetchShows();
            }
            this.shows = null;
          })
          .catch((err) => {
            this.searching = false;
            this.searchedShows = null;
            console.log(err);
          });
      }, 500);
    },
    getTopRated,
    getGenres,
  },
};
</script>
