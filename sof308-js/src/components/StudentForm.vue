<script setup>
import { ref } from 'vue'

let id = ref()
let fullname = ref()
let age = ref()
let email = ref()

let emit = defineEmits()

function addStudent() {
  emit('addStudent', {
    id: id.value,
    fullname: fullname.value,
    age: age.value,
    email: email.value,
  })
}
</script>

<template>
  <form @submit.prevent="addStudent">
    <div class="col-md-">
      <div class="mb-3">
        <label for="id" class="form-label">ID: </label>
        <input type="text" class="form-control" id="id" v-model="id" />
      </div>
      <div class="mb-3">
        <label for="fullname" class="form-label">Fullname: </label>
        <input
          type="text"
          class="form-control"
          id="fullname"
          v-model="fullname"
        />
      </div>
    </div>

    <div class="col-md-">
      <div class="mb-3">
        <label for="age" class="form-label">Age: </label>
        <input type="number" class="form-control" id="age" v-model="age" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email: </label>
        <input type="text" class="form-control" id="email" v-model="email" />
      </div>
    </div>

    <div class="text-center">
      <button type="submit" class="btn btn-success">Thêm</button>
    </div>
  </form>
</template>

<style scoped></style>
