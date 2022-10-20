<template>
  <form
    class="flex items-center w-full md:w-60 xl:w-1/4 h-12 border border-solid border-black-1 rounded-3xl p-3 shadow-lg"
  >
    <SearchOutlined />
    <div class="flex flex-nowrap flex-1 h-full text-base text-abn-yellow-1">
      <div class="relative flex items-center flex-1 h-full p-2">
        <input
          type="text"
          :value="inputText"
          placeholder="Find your show"
          class="w-full text-lg focus:outline-none bg-abn-green-2"
          @input="searchShow($event.target.value)"
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
  props: {
    searchShow: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      inputText: '',
    };
  },
  methods: {},
};
</script>
