<template>
  <main-nav />
  <router-view></router-view>
</template>

<script>
import MainNav from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
