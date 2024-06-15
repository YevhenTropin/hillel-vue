<template>
  <div class="container py-4 px-3 mx-auto">
    <h1>Приклад компонента Collapse</h1>
    <Collapse
      text="Це прихований текст"
      :opened="true"
    />
  </div>
</template>

<script>
import Collapse from './components/Collapse.vue'

export default {
  name: 'App',
  components: {
    Collapse,
  },
}
</script>
