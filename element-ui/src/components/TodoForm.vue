<template>
  <el-form
    :model="form"
    :size="'large'"
  >
    <el-form-item>
      <el-input
        v-model="form.title"
        placeholder="Title"
        @keyup="validateField('title')"
        style="margin-bottom: 5px;"
      />
      <el-alert
        v-if="errors.title"
        :title="errors.title"
        type="error"
        :closable="false"
        show-icon
      />
    </el-form-item>
    <el-form-item>
      <el-input
        type="textarea"
        v-model="form.description"
        placeholder="Description"
        @keyup="validateField('description')"
        style="margin-bottom: 5px;"
      />
      <el-alert
        v-if="errors.description"
        :title="errors.description"
        type="error"
        :closable="false"
        show-icon
      />
    </el-form-item>
    <el-form-item>
      <el-select
        v-model="form.status"
        placeholder="Status"
        @change="validateField('status')"
        style="margin-bottom: 5px;"
      >
        <el-option
          v-for="item in todoStatuses"
          :key="item.id"
          :label="item.title"
          :value="item.value"
        >

        </el-option>
      </el-select>
      <el-alert
        v-if="errors.status"
        :title="errors.status"
        type="error"
        :closable="false"
        show-icon
      />
    </el-form-item>
    <el-button
      type="primary"
      @click.stop="handleCheckFormData"
    >Save item</el-button>
  </el-form>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElAlert } from 'element-plus'
import { todoStatuses } from '../common/options.js'
import { reactive, ref } from 'vue'
import { validationSchema } from '../schemas/validationSchema'
export default {
  name: 'TodoForm',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElButton,
    ElAlert,
  },
  data () {
    return {
      form: reactive({
        title: '',
        description: '',
        status: '',
      }),
      errors: ref({}),
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
    async validateField(field) {
      try {
        await validationSchema.validateAt(field, this.form)
        this.errors[field] = null
      } catch (err) {
        this.errors[field] = err.message
      }
    },
    async validate() {
      try {
        await validationSchema.validate(this.form, { abortEarly: false })
        this.errors = {}
        return true
      } catch (err) {
        const validationErrors = {}
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })
        this.errors = validationErrors
        return false
      }
    },
    async handleCheckFormData() {
      const isValid = await this.validate()
      if (isValid) {
        this.handleSubmit()
      }
    },
  }
}
</script>