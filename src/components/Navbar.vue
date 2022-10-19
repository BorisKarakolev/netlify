<template>
  <header class="sticky top-0 w-full text-sm h-16 bg-white">
    <div
      class="flex flex-nowrap justify-between h-full px-8 mx-auto bg-abn-green-1"
    >
      <div class="flex items-center space-x-3">
        <router-link :to="{ name: 'Home' }" class="text-2xl mx-5">{{
          company
        }}</router-link>
        <div v-for="tab, index in tabs" :key="index">
          <router-link :to="{ name: tab }" class="text-md">{{
            tab
          }}</router-link>
        </div>
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
