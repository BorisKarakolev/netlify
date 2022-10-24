<template>
  <div class="space-y-5 text-center md:text-start xl:text-start w-full">
    <div v-if="$store.state.foundShows && $store.state.foundShows.length > 0">
      <vue-horizontal responsive>
        <div v-for="show in $store.state.foundShows" :key="show.show.id">
          <image-modal :show="show.show" />
        </div>
      </vue-horizontal>
    </div>
  </div>
</template>

<script>
import ImageModal from "@/components/Image.vue";
import VueHorizontal from "vue-horizontal";
export default {
  name: "FoundShows",
  components: {
    ImageModal,
    VueHorizontal,
  },
};
</script>
