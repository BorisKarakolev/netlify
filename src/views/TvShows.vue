<template>
  <div class="w-full text-white p-10 relative">
    <h1 class="text-2xl mb-20">TV Shows</h1>
    <div class="absolute right-10 top-10 w-1/5">
      <show-search :search-show="searchShow" />
    </div>
    <loading-outlined
      v-if="loading"
      class="w-full text-6xl flex items-center justify-center"
    />
    <empty
      v-if="!shows && !searchedShows && !searching"
      class="w-full text-6xl flex items-center justify-center"
      description="No Shows"
    />
    <div v-if="searchedShows && searchedShows.length > 0">
      <div class="grid grid-cols-10 gap-3">
        <div v-for="show in searchedShows" :key="show.show.id">
          <img :src="show.show.image?.medium" />
        </div>
      </div>
    </div>
    <div v-if="shows && shows.length > 0" class="space-y-5">
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
import { getTopRated, getGenres } from "@/utils/helpers";
import { Empty } from "ant-design-vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
export default {
  name: "TvShows",
  components: {
    DashboardList,
    ShowSearch,
    LoadingOutlined,
    Empty,
  },
  data() {
    return {
      loading: true,
      searching: true,
      shows: null,
      searchedShows: null,
      modalOpen: false,
    };
  },
  mounted() {
    this.fetchShows();
  },
  methods: {
    fetchShows() {
      this.shows = null;
      this.loading = true;
      fetch("https://api.tvmaze.com/shows")
        .then((res) => res.json())
        .then((data) => {
          this.loading = false;
          this.shows = data;
          console.log(data);
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
    searchShow(inputText) {
      this.searchedShows = null;
      this.searching = true;
      setTimeout(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${inputText}`)
          .then((res) => res.json())
          .then((data) => {
            this.searching = false;
            this.searchedShows = data;
            if (inputText === "") {
              this.fetchShows();
            }
            this.shows = null;
          })
          .catch((err) => {
            this.searching = false;
            console.log(err);
          });
      }, 500);
    },
    getTopRated,
    getGenres,
  },
};
</script>
