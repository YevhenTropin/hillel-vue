<template>
  <div
    class="alert"
    :class="[alertType]"
    role="alert"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      required: true,
      default: 'primary',
    },
    text: {
      type: String,
      required: true,
      default: 'Alert text',
    },
  },
  computed: {
    alertType () {
      return 'alert-' + this.type
    }
  }
}
</script>