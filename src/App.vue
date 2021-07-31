<template>
  <div class="App">
    <Title />
    <Upload />
    <ImageGrid @selected="updateSelectedPicture" />
    <Modal
      v-if="selectedPicture"
      :imgUrl="selectedPicture"
      @closeModal="updateSelectedPicture"
    />
  </div>
</template>

<script>
import ImageGrid from "./components/ImageGrid.vue";
import Title from "./components/Title.vue";
import Upload from "./components/Upload.vue";
import Modal from "./components/Modal.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    ImageGrid,
    Title,
    Upload,
    Modal,
  },
  setup() {
    const selectedPicture = ref(null);

    const updateSelectedPicture = (url) => {
      selectedPicture.value = url;
    };

    return { selectedPicture, updateSelectedPicture };
  },
};
</script>

<style>
</style>
