<template>
  <div class="w-full bg-black-1 text-white p-10">
    <div
      v-if="loading"
      class="w-full h-screen text-6xl flex items-center justify-center"
    >
      Loading...
    </div>
    <div
      v-if="!shows"
      class="w-full h-screen text-6xl flex items-center justify-center"
    >
      No shows to show
    </div>
    <div v-else>
      <h1 class="text-2xl mb-20">TV Shows</h1>
      <div class="space-y-5">
        <dashboard-list
          :title="'Top 10 rated Tv Shows'"
          :shows="getTopRated(shows, 10)"
        />
        <dashboard-list
          :title="'Comedies'"
          :shows="getGenres(shows, 'Comedy')"
        />
        <dashboard-list :title="'Action'" :shows="getGenres(shows, 'Action')" />
        <dashboard-list :title="'Sport'" :shows="getGenres(shows, 'Sports')" />
        <dashboard-list :title="'Horror'" :shows="getGenres(shows, 'Horror')" />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardList from "@/components/DashboardList.vue";
import { getTopRated, getGenres } from "@/utils/helpers";
export default {
  name: "TvShows",
  components: {
    DashboardList,
  },
  data() {
    return {
      loading: true,
      shows: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.post = null;
      this.loading = true;
      fetch("https://api.tvmaze.com/shows")
        .then((res) => res.json())
        .then((data) => {
          this.loading = false;
          this.shows = data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTopRated,
    getGenres,
  },
};
</script>
