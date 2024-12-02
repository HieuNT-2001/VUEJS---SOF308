<script setup>
import axios from 'axios'
import { ref } from 'vue'

let studentList = ref([])

async function findAll() {
  try {
    let response = await axios.get('http://localhost:3000/students')
    studentList.value = response.data
  } catch (error) {
    console.log(error)
  }
}

findAll()
</script>

<template>
  <h1 class="text-center mb-3">Danh Sách Sinh Viên</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Fullname</th>
        <th scope="col">Age</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(student, index) in studentList" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ student.id }}</td>
        <td>{{ student.fullname }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.email }}</td>
      </tr>
    </tbody>
  </table>
  <RouterLink to="/students/add" class="btn btn-primary">Thêm sinh viên</RouterLink>
</template>

<style scoped></style>
