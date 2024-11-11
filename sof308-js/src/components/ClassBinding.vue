<script setup>
import { ref } from 'vue'

let changeColor = ref(true)

// Khai báo ra hàm đổi màu
function color() {
  changeColor.value = !changeColor.value
}

// Khai báo 1 biến score có giá trị là số
let score = ref(0)
</script>

<template>
  <div class="col-md-12">
    <!-- Sử dụng class để chuyển class dựa trên điều kiện -->
    <h1 :class="changeColor ? 'text-danger' : ''">Danger</h1>
  </div>

  <div class="col-md-12">
    <!-- Sử dụng câu lệnh điều kiện trong vuejs -->
    <!-- BT: cho người dùng v-if & v-else trong vuejs
      nếu điểm >= 9 => xuất sắc => alert-success
      nếu điểm >= 8 => giỏi => alert-primary
      nếu điểm >= 7 => khá => alert-secondary
      nếu điểm >= 6 => trung bình => alert-info
      còn lại là yếu => alert-danger -->
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Nhập điểm</label>
      <input
        v-model="score"
        type="number"
        class="form-control"
        id="exampleFormControlInput1"
      />
    </div>
    <div v-if="score >= 9" class="alert alert-success" role="alert">
      Xuất sắc
    </div>
    <div v-if="score >= 8" class="alert alert-primary" role="alert">Giỏi</div>
    <div v-if="score >= 7" class="alert alert-secondary" role="alert">Khá</div>
    <div v-if="score >= 6" class="alert alert-info" role="alert">
      Trung bình
    </div>
    <div v-else class="alert alert-danger" role="alert">Yếu</div>
  </div>

  <button class="btn btn-primary" @click="color">Đổi màu</button>
</template>

<style scoped></style>
