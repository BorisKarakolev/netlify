<template>
  <form
    class="flex items-center w-1/2 md:w-60 xl:w-60 h-10 bg-transparent border border-solid border-black-1 rounded-3xl p-3 shadow-xl absolute top-40 left-1/4 sm:top-3 sm:left-2/3 lg:left-3/4"
    @submit.prevent="onSubmit"
  >
    <SearchOutlined class="text-xl" />
    <div class="flex flex-nowrap flex-1 h-full text-base text-abn-yellow-1">
      <div class="relative flex items-center flex-1 h-full p-2">
        <input
          v-model="inputText"
          type="text"
          placeholder="Find your show"
          class="w-full text-lg focus:outline-none bg-transparent sm:placeholder:text-black-1"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { SearchOutlined } from "@ant-design/icons-vue";
export default {
  name: "ShowSearch",
  components: {
    SearchOutlined,
  },
  computed: {
    inputText: {
      get() {
        return this.$store.state.inputText;
      },
      set(newSearch) {
        if (newSearch === "") {
          return this.$router.push({ name: "TV Shows" });
        }
        this.$store.commit("SET_NEWSEARCH", newSearch);
        return this.$router.push({
          name: "Found Shows",
          query: { q: newSearch },
        });
      },
    },
  },
  methods: {
    onSubmit() {
      this.$router.push({name: 'Found Shows', query: {q: this.$store.state.inputText}})
      this.$store.commit('SET_NEWSEARCH', '')
    }
  }
 };
</script>
