<template>
  <img :src="show.image?.medium" @click="toggleModal" />
  <modal ref="modal" :close="toggleModal" :modal-open="modalOpen" :show="show" />
</template>

<script>
import Modal from "@/components/Modal.vue";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
export default {
  name: "ImageModal",
  components: {
    Modal,
  },
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const modalOpen = ref(false);
    const modal = ref(null);
    onClickOutside(modal, () => (modalOpen.value = false));

    const toggleModal = () => {
      modalOpen.value = !modalOpen.value;
    };

    return { modalOpen, toggleModal, modal };
  },
};
</script>
