<template>
  <ul class="list-group">
    <li
      v-for="(item, index) in $slots.default()"
      :key="index"
      class="list-group-item"
    >
      <component :is="item.type">{{ item.children }}</component>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListGroup',
}
</script>