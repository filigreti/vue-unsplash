<template>
  <main>
    <div class="header-area">
      <div @click="clearResult" class="search" v-if="searchedResult == newWord">
        Search Results for
        <span class="search-color">"{{searchedResult}}"</span>
      </div>
      <div v-else class="search-area">
        <i class="fas fa-search icon-search"></i>
        <input
          autofocus
          type="text"
          class="input-area"
          placeholder="Search for photo"
          :value="searchedWord"
          @input="changeSearch"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    searchedWord: String,
    searchedResult: String
  },
  data() {
    return {
      newWord: ""
    };
  },
  methods: {
    changeSearch(event) {
      this.newWord = event.target.value;
      this.$emit("messageChanged", this.newWord);
    },
    clearResult() {
      this.newWord = null;
    }
  }
};
</script>

<style scoped>
.header-area {
  width: 100%;
  height: 30vh;
  padding-bottom: 20px;
  background: #dde2e9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-area {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.input-area {
  padding: 20px 0 20px 60px;
  width: 100%;
  outline: none;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  color: #2c3e50;
}
.icon-search {
  position: absolute;
  left: 20px;
  color: #2c3e50;
}
.search {
  font-size: 40px;
  cursor: default;
}
.search-color {
  color: #6f7d93;
}
</style>
