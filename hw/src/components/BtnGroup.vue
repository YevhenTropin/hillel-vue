<template>
  <div
    class="btn-group"
    role="group"
  >
    <button
      type="button"
      class="btn btn-secondary left"
      :class="{ 'active' : isLeftBtnActive }"
      @click="toggleLeftButton()"
    >Left</button>
    <button
      type="button"
      class="btn btn-secondary right"
      :class="{ 'active' : isRightBtnActive }"
      @click="toggleRightButton()"
    >Right</button>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',

  data() {
    return {
      isLeftBtnActive: false,
      isRightBtnActive: false,
    };
  },
  methods: {
    toggleLeftButton() {
      this.isLeftBtnActive = true
      this.isRightBtnActive = false
    },
    toggleRightButton() {
      this.isRightBtnActive = true
      this.isLeftBtnActive = false
    },
  },
}
</script>