<template>
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
      size="default"
      @change="handleChangeItemStatus(item)"
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
        @click="handleRemoveItem(item)"
      >Delete</el-button>
    </template>
  </el-card>
</template>

<script>
import { ElButton, ElCard } from "element-plus"
import { todoStatuses } from '../common/options.js'
export default {
  name: 'ItemCard',
  components: {
    ElCard,
    ElButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: {},
    }
  },
  computed: {
    todoStatuses () {
      return todoStatuses;
    }
  },
  methods: {
    handleChangeItemStatus (){
      this.$emit('changeItemStatus')
    },
    handleRemoveItem (){
      this.$emit('removeItem')
    }
  },
}
</script>