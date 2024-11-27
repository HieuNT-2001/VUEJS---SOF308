<script setup>
import { reactive, ref } from 'vue'

let title = ref()
let author = ref()
let price = ref()
let category = ref()

let emit = defineEmits()

function addBook() {
  emit('addBook', {
    title: title.value,
    author: author.value,
    price: price.value,
    category: category.value,
  }) // phát ra sự kiện với dữ liệu book
}
</script>

<template>
  <div class="col-md-4">
    <form @submit.prevent="addBook">
      <div class="mb-3">
        <label for="" class="form-label">Tên sách</label>
        <input type="text" class="form-control" v-model="title" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Tác giả</label>
        <input type="text" class="form-control" v-model="author" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Giá tiền</label>
        <input type="number" class="form-control" v-model="price" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Danh mục</label>
        <input type="text" class="form-control" v-model="category" />
      </div>

      <button type="submit" class="btn btn-success">Thêm sách</button>
    </form>
  </div>
</template>

<style scoped></style>
