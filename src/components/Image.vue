<template>
  <img :src="show.image?.medium" class="rounded-lg h-60 w-52" @click="openModal" />
  <modal ref="modal" :close="closeModal" :modal-open="modalOpen" :show="show" />
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

    const closeModal = () => {
      modalOpen.value = modalOpen.value = false;
    };

    const openModal = () => {
      modalOpen.value = modalOpen.value = true;
    };

    return { modalOpen, closeModal, modal, openModal };
  },
};
</script>
