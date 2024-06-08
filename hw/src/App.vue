<template>
  <div class="container py-4 px-3 mx-auto">
    <Carousel
      :data="imageData"
    />
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'

export default {
  name: 'App',
  components: {
    Carousel,
  },
  data() {
    return {
      imageData: [],
    };
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/photos/')
        .then((response) => response.json())
        .then((json) => this.imageData = json.slice(0, 3));
  },
}
</script>
