<script setup>
import router from '@/router'
import axios from 'axios'
import { ref } from 'vue'

// let id = ref()
// let fullname = ref()
// let age = ref()
// let email = ref()

// let emits = defineEmits('addStudent')

// function addStudent() {
//   emits('addStudent', {
//     id: id.value,
//     fullname: fullname.value,
//     age: age.value,
//     email: email.value,
//   })
//   router.push('/students')
// }

let student = ref({
  id: '',
  fullname: '',
  age: null,
  email: '',
})

async function addStudent() {
  try {
    await axios.post('http://localhost:3000/students', student.value)
    router.push('/students')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <h1 class="text-center mb-3">Add Student</h1>
  <form @submit.prevent="addStudent()">
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="id" class="form-label fw-bold">ID:</label>
          <input type="text" class="form-control" id="id" v-model="student.id" required />
        </div>

        <div class="mb-3">
          <label for="fullname" class="form-label fw-bold">Fullname: </label>
          <input
            type="text"
            class="form-control"
            id="fullname"
            v-model="student.fullname"
            required
          />
        </div>
      </div>

      <div class="col-md-6">
        <div class="mb-3">
          <label for="age" class="form-label fw-bold">Age: </label>
          <input type="number" class="form-control" id="age" v-model="student.age" required />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label fw-bold">Email address: </label>
          <input type="email" class="form-control" id="email" v-model="student.email" required />
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-success">Add</button>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
