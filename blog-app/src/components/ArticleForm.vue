<template>
  <el-form :model="form">
    <el-form-item>
      <el-input
        v-model="form.title"
        placeholder="Title"
        size="default"
      />
    </el-form-item>
    <el-form-item>
      <el-input
        type="textarea"
        v-model="form.description"
        placeholder="Description"
        size="default"
      />
    </el-form-item>
    <el-form-item>
      <el-input
        v-model="form.author"
        placeholder="Author"
        size="default"
      />
    </el-form-item>
    <el-button
      type="primary"
      size="default"
      @click.stop="handleSubmit"
    >Create</el-button>
  </el-form>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
export default {
  name: 'TodoForm',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  },
  data () {
    return {
      form: {
        title: '',
        description: '',
        author: '',
      },
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('setArticles', this.form)
      this.clearForm()
    },
    clearForm () {
      this.form = {
        title: '',
        description: '',
        author: '',
      }
    },
  }
}
</script>