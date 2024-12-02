<script setup>
import axios from 'axios'
import { ref } from 'vue'

// Bien postData dung de luu du lieu lay duoc tu ham fetchData
let postData = ref([])

// Ham lay du lieu
async function fetchData() {
  try {
    // Gọi tới API
    let response = await axios.get('http://localhost:3000/posts')

    // Lữu dữ liệu lấy được từ biến response vào mảng postData
    postData.value = response.data
  } catch (error) {
    console.log(error)
  }
}

fetchData()
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in postData" :key="data.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ data.id }}</td>
        <td>{{ data.title }}</td>
        <td>{{ data.author }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
