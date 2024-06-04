<template>
  <div class="container py-4 px-3 mx-auto">
    <Definitions :data="definitions" />
  </div>
</template>

<script>
import Definitions from './components/Definitions.vue'

export default {
  name: 'App',
  components: {
    Definitions,
  },
  data() {
    return {
      definitions: [{
          dt: 'one',
          dd: 'two',
          id: 1
        },
        {
          dt:'another term',
          dd: 'another description',
          id: 2
        },
      ],
    };
  },
}
</script>
