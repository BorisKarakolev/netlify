<template>
  <h1 class="mb-5 text-lg">{{ title }}</h1>
  <div
    v-dragscroll
    class="grid grid-flow-col auto-cols-max gap-3 remove-scroll overflow-x-auto overscroll-x-contain"
  >
    <div v-for="show in shows" :key="show.id">
      <image-modal :show="show" />
    </div>
  </div>
</template>

<script>
import ImageModal from "@/components/Image.vue";
import { dragscroll } from "vue-dragscroll";
export default {
  name: "DashboardList",
  components: {
    ImageModal,
  },
  directives: {
    dragscroll: dragscroll,
  },
  props: {
    shows: { type: Array, required: true },
    title: { type: String, required: true },
  },
};
</script>
