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

async function remove(id) {
  try {
    await axios.delete(`http://localhost:3000/students/${id}`)
    findAll()
  } catch (error) {
    console.log(error)
  }
}

findAll()
</script>

<template>
  <h1 class="text-center mb-3">List Student</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Fullname</th>
        <th scope="col">Age</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(student, index) in studentList" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ student.id }}</td>
        <td>{{ student.fullname }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.email }}</td>
        <td>
          <RouterLink :to="`/students/edit/${student.id}`" class="btn btn-warning">Edit</RouterLink>
          <button class="btn btn-danger" @click="remove(student.id)">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
  <RouterLink to="/students/add" class="btn btn-primary">Add more student</RouterLink>
</template>

<style scoped></style>
