<script setup>
import router from '@/router'
import axios from 'axios'
import { onMounted, ref } from 'vue'

let props = defineProps({
  id: Number,
})

let student = ref({
  id: '',
  fullname: '',
  age: null,
  email: '',
})

onMounted(async () => {
  try {
    let response = await axios.get(`http://localhost:3000/students/${props.id}`)
    student.value = response.data
  } catch (error) {
    console.log(error)
  }
})

async function updateStudent() {
  try {
    await axios.put(`http://localhost:3000/students/${props.id}`, student.value)
    router.push('/students')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <h1 class="text-center mb-3">Edit Student</h1>
  <form @submit.prevent="updateStudent()">
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="id" class="form-label fw-bold">ID:</label>
          <input type="text" class="form-control" id="id" v-model="student.id" disabled />
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
        <button type="submit" class="btn btn-success">Save</button>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
