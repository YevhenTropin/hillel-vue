<template>
  <h1>Article list</h1>
  <p>Welcome to the home page!</p>
  <h4 v-if="!articles.length">Article List is empty. Let's create the first!</h4>
  <el-row
    v-else
    :gutter="20"
  >
    <el-col
      v-for="article in articles"
      :key="article.id"
      :span="6"
      style="margin-bottom: 20px"
    >
      <el-card>
        <template #header>
          <div class="card-header">
            {{ article.title }}
          </div>
        </template>
        <p class="text item">{{ article.description }}</p>
        <small>Author: {{ article.author }}</small>
        <template #footer>
          <router-link :to="{ name: 'details', params: { id: `${article.id}` } }">Details</router-link>
        </template>
      </el-card>
    </el-col>
  </el-row>
  <el-button
    type="primary"
    size="default"
    @click="goToAdd"
  >Create Article</el-button>
</template>

<script>
import { ElRow, ElCol, ElCard } from "element-plus"
import storage from "../functions/LStorage.js"
export default {
  name: 'Home',
  components: {
    ElRow,
    ElCol,
    ElCard,
  },
  data () {
    return {
      articles: [],
    }
  },
  created() {
    this.articles = storage.getArticles();
  },
  methods: {
    goToAdd () {
      this.$router.push({name: 'create'})
    },
  },
}
</script>