<template>
  <div id="app">
    <Header
      :searchedResult="searchedResult"
      :searchedWord="searchedWord"
      @messageChanged="searchedWord = $event"
      @change.native="getImages(searchedWord)"
    ></Header>
    <div v-if="images">
      <ImageComp :Images="images" v-if="images.length > 0" />
      <div class="main-load" v-else>
        <h1>Image not found</h1>
      </div>
    </div>
    <div class="main-load" v-else>
      <div>
        <img :src="gif" alt />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import ImageComp from "./components/ImageComp.vue";
import gif from "./assets/gif.svg";

export default {
  name: "app",
  components: {
    Header,
    ImageComp
  },
  data() {
    return {
      images: null,
      per_page: 20,
      page: 1,
      searchedWord: "",
      gif: gif,
      searchedResult: ""
    };
  },
  methods: {
    getImages(key) {
      this.images = null;
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${key}&per_page=${this.per_page}&page=${this.page}&client_id=58c9ea70a468c4fe4b4edb8e8a417d44caddc09847f3d2bfac7dff8b61278fd9`
        )
        .then(res => {
          this.images = res.data.results;
        });
      this.searchedResult = this.searchedWord;
      this.searchedWord = "";
    }
  },
  mounted() {
    this.getImages((this.searchedWord = "Africa"));
  }
};
</script> 

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
}
.main-load {
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-center {
  text-align: center;
  padding-top: 40px;
}
.main-load > h1 {
  font-size: 50px;
}
</style>
