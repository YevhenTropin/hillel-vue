<template>
  <el-form :model="form">
    <el-form-item>
      <el-input
        v-model="form.title"
        placeholder="Title"
      />
    </el-form-item>
    <el-form-item>
      <el-input
        type="textarea"
        v-model="form.description"
        placeholder="Description"
      />
    </el-form-item>
    <el-form-item>
      <el-select
        v-model="form.status"
        placeholder="Status"
      >
        <el-option
          v-for="item in todoStatuses"
          :key="item.id"
          :label="item.title"
          :value="item.value"
        >

        </el-option>
      </el-select>
    </el-form-item>
    <el-button
        type="primary"
        @click.stop="handleSubmit"
    >Save item</el-button>
  </el-form>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton } from 'element-plus'
import { todoStatuses } from '../common/options.js'
export default {
  name: 'TodoForm',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElButton,
  },
  data () {
    return {
      form: {
        title: '',
        description: '',
        status: '',
      }
    }
  },
  computed: {
    todoStatuses () {
      return todoStatuses;
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('setItems', this.form)
      this.clearForm()
    },
    clearForm () {
      this.form = {
        title: '',
        description: '',
        status: '',
      }
    },
  }
}
</script>