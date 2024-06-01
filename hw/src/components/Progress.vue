<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ width: percentage + '%' }"
      :aria-valuenow="percentage"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
}
</script>
