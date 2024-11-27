<script setup>
import { reactive } from 'vue'
import BookForm from './BookForm.vue'

let props = defineProps({
  books: Array,
})

// let books = reactive([])

// function handleSubmit(data) {
//   books.push(data)
//   console.log(books)
// }
</script>

<template>
  <!-- <BookForm @addBook="handleSubmit" /> -->
  <div class="col-md-8">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên sách</th>
          <th scope="col">Tác giả</th>
          <th scope="col">Giá tiền</th>
          <th scope="col">Danh mục</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in props.books" :key="book.title">
          <!-- <tr v-for="(book, index) in books" :key="book.title"> -->
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
