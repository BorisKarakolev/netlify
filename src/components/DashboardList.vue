<template>
  <h1 class="mb-5 text-lg">{{ title }}</h1>
  <div
    class="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto remove-scroll snap-x snap-mandatory overscroll-x-contain"
  >
    <div
      v-for="show in shows"
      :key="show.id"
      class="snap-normal snap-center sm:snap-start"
    >
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
