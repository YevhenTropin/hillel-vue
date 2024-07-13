<template>
  <h1>Create Article</h1>
  <p>Create new article here.</p>
  <el-row>
    <el-col :span="12">
      <article-form @setArticles="handleSetArticles" />
    </el-col>
  </el-row>
</template>

<script>
import ArticleForm from "../components/ArticleForm.vue"
import storage from "../functions/LStorage.js"
export default {
  name: 'Add Article',
  components: {
    ArticleForm,
  },
  data () {
    return {
      articles: [],
    }
  },
  methods: {
    handleSetArticles (data) {
      const savedArticle = storage.saveArticle(data)
      this.articles.push(savedArticle)
      this.$router.push({name: 'home'})
    },
  }
}
</script>