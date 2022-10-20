<template>
  <h1 class="mb-5">{{ title }}</h1>
  <div class="grid grid-cols-10 gap-3">
    <div v-for="show in shows" :key="show.id">
      <image-modal :show="show" />
    </div>
  </div>
</template>

<script>
import ImageModal from "@/components/Image.vue";
export default {
  name: "DashboardList",
  components: {
    ImageModal,
  },
  props: {
    shows: { type: Array, required: true },
    title: { type: String, required: true },
  },
};
</script>
