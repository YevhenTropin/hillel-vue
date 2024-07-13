<template>
  <router-link :to="{ name: 'home' }">Back to Article List</router-link>
  <h1>Article Details</h1>
  <h3>{{ articleData.title }}</h3>
  <p>{{ articleData.description }}</p>
  <small>Author: {{ articleData.author }}</small>
</template>

<script>
import storage from "../functions/LStorage.js"
export default {
  name: 'Article Detail',
  data () {
    return {
      articleData: null
    }
  },
  created() {
    this.articleData = storage.getArticleById(this.$route.params.id);
  },
}
</script>