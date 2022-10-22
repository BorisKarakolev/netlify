<template>
  <div v-if="$store.state.foundShows && $store.state.foundShows.length > 0">
    <div class="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto remove-scroll snap-x snap-mandatory overscroll-x-contain">
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
