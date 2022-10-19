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
          :shows="getTopRated(10)"
        />
        <dashboard-list :title="'Comedies'" :shows="getGenres('Comedy')" />
        <dashboard-list :title="'Action'" :shows="getGenres('Action')" />
        <dashboard-list :title="'Sport'" :shows="getGenres('Sports')" />
        <dashboard-list :title="'Horror'" :shows="getGenres('Horror')" />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardList from "@/components/DashboardList.vue";
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
    getTopRated(size) {
      return this.shows
        ?.sort((a, b) => b.rating.average - a.rating.average)
        .slice(0, size);
    },
    getGenres(genreArg) {
      return this.shows
        ?.filter((show) => show.genres.some((genre) => genre === genreArg))
        .sort((a, b) => b.rating.average - a.rating.average)
        .slice(0, 10);
    },
  },
};
</script>
