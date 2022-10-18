<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap justify-between h-full px-8 mx-auto bg-abn-green-1"
      >
        <div class="flex items-center space-x-3">
          <router-link :to="{ name: 'Home' }" class="text-2xl mx-5">{{
            company
          }}</router-link>
          <div v-for="tab in tabs" :key="tab">
            <router-link :to="{ name: tab }" class="text-md">{{ tab }}</router-link>
          </div>
        </div>

        <h2 class="flex items-center h-full text-abn-yellow-1">
          Developed by {{ author }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Netlify",
      tabs: ["TV Shows", "Movies"],
      author: "Boris Karakolev",
    };
  },
};
</script>
