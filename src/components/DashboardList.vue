<template>
  <h1 class="mb-5">{{ title }}</h1>
  <div class="grid grid-cols-10 gap-5">
    <div v-for="show in shows" :key="show.id">
      <img :src="show.image.medium" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardList",
  props: {
    shows: { type: Array, required: true },
    title: { type: String, required: true },
  },
};
</script>
