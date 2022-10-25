<template>
  <header class="sticky top-0 w-full text-sm h-16 z-20">
    <div
      class="flex flex-nowrap items-center justify-between h-full px-8 mx-auto bg-abn-green-1 shadow-xl"
    >
      <div class="flex items-center space-x-3 text-abn-yellow-1">
        <router-link :to="{ name: 'Home' }" class="text-2xl mx-5 font-bold">{{
          company
        }}</router-link>
        <div v-for="(tab, index) in tabs" :key="index">
          <router-link :to="{ name: tab }" class="text-lg">{{
            tab
          }}</router-link>
        </div>
      </div>
      <show-search />
    </div>
  </header>
</template>

<script>
import ShowSearch from "@/components/ShowSearch.vue";
export default {
  name: "MainNav",
  components: {
    ShowSearch,
  },
  data() {
    return {
      company: "Netlify",
      tabs: ["TV Shows", "Movies"],
      author: "Boris Karakolev",
    };
  },
};
</script>
