<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="8">
          <todo-form @setItems="handleSetItems" />
        </el-col>
        <el-col :span="8">
          <ul>
            <li
                v-for="item in todoItems"
            >{{ item.title }}</li>
          </ul>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { ElContainer, ElMain, ElRow, ElCol } from "element-plus"
import TodoForm from "./components/TodoForm.vue"

export default {
  name: 'App',
  components: {
    ElContainer,
    ElMain,
    ElRow,
    ElCol,
    TodoForm,
  },
  data () {
    return {
      todoItems: [],
    }
  },
  methods: {
    handleSetItems (data) {
      this.todoItems.push({...data})
    }
  }
}
</script>