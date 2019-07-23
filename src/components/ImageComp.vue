<template>
  <div class="image-grid">
    <div @click="showModal(image)" v-for="image in Images" :key="image.id" class="image-card">
      <progressive-img
        :src="image.urls.regular"
        class="main-image"
        id="image"
        :class="`mainimage_${image.id}`"
      />
      <div class="area">
        <div class="area-first">{{image.user.name}}</div>
        <div class="area-second">{{image.user.location}}</div>
      </div>
    </div>
    <Modal :item="modalItems" v-if="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  props: {
    Images: Array
  },
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false,
      modalItems: null
    };
  },
  methods: {
    showModal(item) {
      this.isModalVisible = true;
      this.modalItems = item;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>
.image-grid {
  width: 60%;
  margin: -70px auto;
  columns: 3;
  padding: 20px;
  column-gap: 40px;
  border-radius: 8px;
}
.image-card {
  break-inside: avoid;
  width: 100%;
  margin: 0 0 20px;
  background: black;
  position: relative;
  border-radius: 8px;
  display: flex;
  overflow: hidden;
}
.main-image {
  opacity: 0.6;

  border-radius: 8px !important;
}
.main-image:hover {
  opacity: 1;
}
.image-card >>> img {
  border-radius: 8px;
}
.area {
  position: absolute;
  z-index: 15;
  color: white;
  bottom: 0px;
}
.area-first {
  font-size: 14px;
  padding-left: 15px;
  font-weight: 500;
  text-transform: capitalize;
}
.area-second {
  font-size: 12px;
  padding-left: 15px;
  font-weight: 100;
  padding-bottom: 20px;
}
@media (max-width: 1200px) {
  .image-grid {
    columns: 3;
    width: calc(100% -40px);
    box-sizing: border-box;
    padding: 20px 20px 20px 0;
  }
}
@media (max-width: 768 px) {
  .image-grid {
    columns: 2;
  }
}
@media (max-width: 480px) {
  .image-grid {
    columns: 1;
  }
}
</style>



