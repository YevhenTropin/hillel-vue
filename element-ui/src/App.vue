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
              <el-card>
                <template #header>
                  <div class="card-header">
                    <span>#{{ item.id }} {{ item.title }}</span>
                  </div>
                </template>
                <p class="text item">{{ item.description }}</p>
                <p class="text item">{{ item.status }}</p>
                <el-select
                  v-model="item.status"
                  placeholder="Status"
                  size="small"
                  @change="handleChangeItemStatus(item, index)"
                >
                  <el-option
                    v-for="statusItem in todoStatuses"
                    :key="statusItem.id"
                    :label="statusItem.title"
                    :value="statusItem.value"
                  ></el-option>
                </el-select>
                <template #footer>
                  <el-button
                    type="danger"
                    @click="handleRemoveItem(item, index)"
                  >Delete</el-button>
                </template>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { ElContainer, ElMain, ElRow, ElCol, ElButton, ElCard } from "element-plus"
import TodoForm from "./components/TodoForm.vue"
import storage from "./functions/LStorage.js"
import { todoStatuses } from './common/options.js'

export default {
  name: 'App',
  components: {
    ElContainer,
    ElMain,
    ElRow,
    ElCol,
    ElButton,
    ElCard,
    TodoForm,
  },
  data () {
    return {
      todoItems: [],
    }
  },
  computed: {
    todoStatuses () {
      return todoStatuses;
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
    handleChangeItemStatus (item, index) {
      storage.changeItemStatus(item)
    },
  }
}
</script>