<template>
  <div class="w-full h-full flex flex-col items-center text-white p-10">
    <div
      class="w-full h-full flex flex-col md:flex-row xl:flex-row items-center justify-center md:justify-between xl:justify-between mb-10"
    >
      <h1 class="text-2xl mb-10">Found TV Shows</h1>
    </div>
    <div
      v-if="$store.state.searching"
      class="absolute h-full w-full flex items-center justify-center text-8xl animate-bounce"
    >
    <SearchOutlined />
    </div>
    <div class="space-y-5 text-center md:text-start xl:text-start w-full">
      <div v-if="$store.state.foundShows && $store.state.foundShows.length > 0">
        <vue-horizontal responsive>
          <div v-for="show in $store.state.foundShows" :key="show.show.id">
            <image-modal :show="show.show" />
          </div>
        </vue-horizontal>
      </div>
    </div>
  </div>
</template>

<script>
import ImageModal from "@/components/Image.vue";
import VueHorizontal from "vue-horizontal";
import {SearchOutlined} from '@ant-design/icons-vue'
export default {
  name: "FoundShows",
  components: {
    ImageModal,
    VueHorizontal,
    SearchOutlined
  },
};
</script>
