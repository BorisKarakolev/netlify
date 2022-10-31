<template>
  <header class="sticky top-0 w-full text-sm h-32 sm:h-16 z-20">
    <div
      class="flex flex-col sm:flex-row items-center justify-between h-full px-8 mx-auto bg-abn-green-1 shadow-xl p-5"
    >
      <div class="w-full flex items-center space-x-3 text-abn-yellow-1">
        <router-link
          :to="{ name: 'Home' }"
          class="text-2xl mx-5 font-bold hover:scale-110 active:text-abn-green-2 active:text-3xl transition-all duration-150 ease-out"
          >{{ company }}</router-link
        >
        <div v-for="(tab, index) in tabs" :key="index">
          <div
            class="text-lg hover:scale-110 active:text-abn-green-2 active:text-xl transition-all duration-150 ease-out"
          >
            <router-link :to="{ name: tab }">{{ tab }}</router-link>
          </div>
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
      tabs: ["Home", "TV Shows", "Movies"],
      author: "Boris Karakolev",
    };
  },
};
</script>
