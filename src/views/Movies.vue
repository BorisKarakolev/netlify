<template>
  <h1>{{ $store.state.moives }}</h1>
</template>

<script>
export default {
  name: "MoviesView",
  beforeMount() {
    this.$store.dispatch("fetchMovies");
  },
};
</script>
