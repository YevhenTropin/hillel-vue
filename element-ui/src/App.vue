<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="8">
          <todo-form @setItems="handleSetItems" />
        </el-col>
        <el-col :span="16">
          <el-row :gutter="15">
            <el-col
              :span="6"
              v-for="(item, index) in todoItems"
              :key="index"
              style="margin-bottom: 15px"
            >
              <item-card
                :item="item"
                @changeItemStatus="handleChangeItemStatus(item, index)"
                @removeItem="handleRemoveItem(item, index)"
              />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { ElContainer, ElMain, ElRow, ElCol } from "element-plus"
import TodoForm from "./components/TodoForm.vue"
import ItemCard from './components/ItemCard.vue'
import storage from "./functions/LStorage.js"

export default {
  name: 'App',
  components: {
    ElContainer,
    ElMain,
    ElRow,
    ElCol,
    TodoForm,
    ItemCard,
  },
  data () {
    return {
      todoItems: [],
    }
  },
  created() {
    this.todoItems = storage.getItems();
  },
  methods: {
    handleSetItems (data) {
      const savedItem = storage.saveItem(data)
      this.todoItems.push(savedItem)
    },
    handleRemoveItem (item, index) {
      storage.removeItem(item.id)
      this.todoItems.splice(index, 1)
    },
    handleChangeItemStatus (item) {
      storage.changeItemStatus(item)
    },
  }
}
</script>