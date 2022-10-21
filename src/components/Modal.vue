<template>
  <teleport to="body">
    <transition>
      <div
        v-if="modalOpen"
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white"
      >
        <div
          class="bg-black-1 w-full h-full md:w-1/2 md:h-4/5 xl:w-2/5 rounded-xl fixed"
        >
          <div
            class="absolute top-20 right-5 sm:top-3 sm:right-3 w-7 h-7 text-white bg-black-1 rounded-full flex items-center justify-center"
          >
            <CloseOutlined @click="close" />
          </div>
          <div
            class="w-full h-full flex flex-col justify-start space-y-3 overflow-y-scroll scroll-smooth remove-scroll"
          >
            <div class="w-full h-3/4">
              <img
                :src="show.image?.original"
                class="max-h-full min-w-full object-fill rounded-t-xl"
              />
            </div>
            <div class="w-full flex flex-row items-center justify-between">
              <div class="w-2/4 p-5 space-x-3">
                <span class="text-lg text-abn-yellow-1">73% Match</span>
                <span class="text-lg font-light">{{
                  show.premiered?.slice(0, 4)
                }}</span>
                <span
                  class="text-lg px-1 border border-solid border-white bg-black"
                  >16+</span
                >
              </div>
              <div class="text-sm flex flex-col font-thin px-3">
                <div class="flex flex-row space-x-1">
                  <span class="text-gray-1">Genres:</span>
                  <div v-for="genre in show.genres" :key="genre">
                    {{ genre }},
                  </div>
                </div>
                <div class="flex w-full flex-row space-x-2">
                  <span class="text-gray-1">Average runtime:</span>
                  <span>{{ show.averageRuntime }}'</span>
                </div>
                <div class="flex w-full flex-row space-x-2">
                  <span class="text-gray-1">Language:</span>
                  <span>{{ show.language }}'</span>
                </div>
              </div>
            </div>
            <div class="w-full p-5 text-sm">
              <span>{{ show.summary.replace(/<\/?[^>]+(>|$)/g, "") }}</span>
            </div>
            <div class="w-full flex flex-col">
              <h1 class="text-3xl p-5">Episodes</h1>
              <ul
                v-for="episode in episodes.slice(0, 10)"
                :key="episode.id"
                class="space-y-3 p-5 relative"
              >
                <li
                  class="flex flex-col xl:flex-row items-center justify-start xl:justify-start w-full"
                >
                  <span class="absolute top-3 right-3"
                    >{{ episode.runtime }}m</span
                  >
                  <div
                    class="flex flex-row items-center justify-start w-full mb-3 xl:w-1/4 xl:mr-10"
                  >
                    <span class="text-xl">{{ episode.number }}</span>
                    <img :src="episode.image?.medium" class="rounded-lg ml-5" />
                  </div>
                  <div
                    class="w-full xl:w-3/4 xl:ml-5 xl:h-20 overflow-hidden truncate"
                  >
                    <h2 class="text-xl">{{ episode.name }}</h2>
                    <span class="text-sm">{{
                      episode.summary.replace(/<\/?[^>]+(>|$)/g, "")
                    }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { CloseOutlined } from "@ant-design/icons-vue";
export default {
  name: "ModalShow",
  components: { CloseOutlined },
  props: {
    show: {
      type: Object,
      required: true,
    },
    modalOpen: {
      type: Boolean,
      required: true,
    },
    close: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      open: this.modalOpen,
      episodes: null,
    };
  },
  mounted() {
    this.getEpisodes();
  },
  methods: {
    getEpisodes() {
      this.axios
        .get(`https://api.tvmaze.com/shows/${this.show.id}/episodes`)
        .then((response) => {
          this.episodes = response.data;
        })
        .catch((err) => {
          this.episodes = null;
          console.log(err);
        });
    },
  },
};
</script>

<style>
.remove-scroll::-webkit-scrollbar {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
