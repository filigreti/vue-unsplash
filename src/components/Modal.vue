<template>
  <transition name="modal-fade">
    <div v-if="item" class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <button
              type="button"
              class="btn-close btn-area"
              @click="close"
              aria-label="Close modal"
            >x</button>
            <img :src="item.urls.full" alt class="image-fluid" />
          </slot>
        </header>
        <footer class="modal-footer">
          <slot name="footer">
            <div class="modals">
              <div class="modal-first">{{item.user.name}}</div>
              <div class="modal-second">{{item.user.location}}</div>
            </div>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: "modal",
  props: {
    item: Object
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>


<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
}

.modal {
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 80vh;
}

.modal-header,
.modal-footer {
  display: flex;
}

.modal-header {
  color: #4aae9b;
  justify-content: space-between;
  height: 80%;
}

.modal-footer {
  height: 20%;
  display: flex;
  align-items: center;
  padding-left: 40px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: transparent;
  outline: none;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.btn-area {
  position: absolute;
  top: 20px;
  right: 100px;
  z-index: 100;
}
.image-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal-first {
  font-size: 16px;
  color: #253858;
  font-weight: bold;
}
.modal-second {
  font-size: 14px;
  padding-top: 4px;
  color: grey;
  font-weight: 500;
}
</style>
