<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="carousel-item"
        :class="{'active' : index === activeSlideIndex}"
      >
        <img
          :alt="item.title"
          class="d-block w-100"
          :src="item.url"
        >
      </div>
    </div>
    <button
        class="carousel-control-prev"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="prev"
        @click="showPrevSlide"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="next"
        @click="showNextSlide"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    data: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      activeSlideIndex: 0,
    }
  },
  methods: {
    showPrevSlide() {
      if (this.activeSlideIndex === 0) {
        this.activeSlideIndex = this.data.length - 1
      } else {
        this.activeSlideIndex--
      }
    },
    showNextSlide() {
      if (this.activeSlideIndex === this.data.length - 1) {
        this.activeSlideIndex = 0
      } else {
        this.activeSlideIndex++
      }
    },
  }
}
</script>