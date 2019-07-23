import Vue from 'vue'
import App from './App.vue'
import VueProgressiveImage from 'vue-progressive-image'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry);
Vue.use(VueProgressiveImage, {
  placeholder: 'https://unsplash.it/1920/1080?image=20'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')