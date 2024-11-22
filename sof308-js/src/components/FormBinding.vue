<script setup>
import { reactive, ref } from 'vue'

let fullname = ref('')
let email = ref('')
let age = ref()
let students = reactive([])

function validate() {
  if (!fullname.value || !email.value || !age.value) {
    alert('Bạn cần nhập đầy đủ thông tin')
    return false
  }
  return true
}

function getInfo() {
  // Sử dụng backtick (ấn dấu ` phía dưới phím esc)
  if (validate()) {
    // console.log(`Họ và tên: ${fullname.value}`)
    // console.log(`Tuổi: ${age.value}`)
    // console.log(`Email: ${email.value}`)
    students.push({
      fullname: fullname.value,
      email: email.value,
      age: age.value,
    })
  }
}

function space() {
  alert('Bạn vừa ấn phím space')
}
</script>

<template>
  <h1>Form thu thập thông tin</h1>
  <!-- submit -->
  <form @submit.prevent="getInfo">
    <label for="">Họ và tên</label>
    <input
      type="text"
      class="form-control"
      name=""
      id=""
      v-model.trim="fullname"
    /><br />

    <label for="">Email</label>
    <input
      type="email"
      class="form-control"
      name=""
      id=""
      v-model.trim="email"
    /><br />

    <label for="">Tuổi</label>
    <input
      type="text"
      class="form-control"
      name=""
      id=""
      v-model.trim="age"
    /><br />

    <button type="submit" class="btn btn-primary">Gửi đi</button>
  </form>
  <button @keyup.space="space" type="submit">
    Ấn nút space để gọi nút space
  </button>

  <!-- BT:
   -- Sửa lại giao diện theo bootstrap
   -- Validate dữ liệu trống
   -- Sau khi nhập đầy đủ thông tin: Họ tên, email, tuổi
   hiển thị lên bảng -->

  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Họ tên</th>
        <th scope="col">Email</th>
        <th scope="col">Tuổi</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(student, index) in students" :key="student.fullname">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ student.fullname }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* Add your styles here */
</style>
