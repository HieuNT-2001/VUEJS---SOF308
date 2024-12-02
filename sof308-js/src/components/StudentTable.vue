<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'

let students = ref([])

async function handleSubmit(data) {
  try {
    await axios.post('http://localhost:3000/students', data)
    fetchData()
  } catch (error) {
    console.log(error)
  }
}

async function fetchData() {
  try {
    let response = await axios.get('http://localhost:3000/students')
    students.value = response.data
  } catch (error) {
    console.log(error)
  }
}

fetchData()
</script>

<template>
  <StudentForm @addStudent="handleSubmit" />
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
      <tr v-for="(student, index) in students" :key="student.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ student.id }}</td>
        <td>{{ student.fullname }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
