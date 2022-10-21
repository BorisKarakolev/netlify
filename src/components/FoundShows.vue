<template>
  <div v-if="$store.state.foundShows && $store.state.foundShows.length > 0">
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-10 gap-3">
      <div v-for="show in $store.state.foundShows" :key="show.show.id">
        <image-modal :show="show.show" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageModal from "@/components/Image.vue";
export default {
  name: "FoundShows",
  components: {
    ImageModal,
  },
};
</script>
