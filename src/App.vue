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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #005554;
}

.remove-scroll::-webkit-scrollbar {
  display: none;
}
</style>
