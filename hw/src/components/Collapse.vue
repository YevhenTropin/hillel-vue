<template>
  <div>
    <p>
      <a
        class="btn btn-primary"
        data-bs-toggle="collapse"
        href="#"
        role="button"
        aria-expanded="false"
        @click.prevent="toggleCollapse"
      >Link with href</a>
    </p>
    <div
      class="collapse"
      :class="{ 'show' : isCollapseOpen }"
    >
      <div class="card card-body">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    text: {
      type: String,
      required: true,
      default: 'collapse me',
    },
    opened: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  data() {
    return {
      isCollapseOpen: this.opened,
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapseOpen = !this.isCollapseOpen
    },
  }
}
</script>