<template>
  <h1 class="mb-5 text-lg">{{ title }}</h1>
  <vue-horizontal responsive>
    <div v-for="show in shows" :key="show.id">
      <image-modal :show="show" />
    </div>
  </vue-horizontal>
</template>

<script>
import ImageModal from "@/components/Image.vue";
import VueHorizontal from "vue-horizontal";
export default {
  name: "DashboardList",
  components: {
    ImageModal,
    VueHorizontal,
  },
  props: {
    shows: { type: Array, required: true },
    title: { type: String, required: true },
  },
};
</script>