<script setup>
// Quản lý  trạng thái của biến
// ref: chỉ nhận những kiểu dữ liệu : String(chuỗi), number(số), boolean(true/false)

import { reactive, ref } from 'vue'

// reactive: chỉ nhận dữ liệu là object

let numberOne = ref(1)
let myClass = ref('sd19301')

let myCar = reactive({
  carBrand: 'toyota',
  carColor: 'black',
  carImage: '/toyota.jpg',
})

// Khai báo biến count với giá trị ban đầu là 0
let count = ref(0)

// Khai báo hàm tăng số sau khi click chuột
function counter() {
  // Đối với state của biến mà quản lý qua ref
  // Muốn gán giá trị của biến thì dùng phương thức .value
  count.value++
}
</script>

<template>
  <div class="col-md-12">
    <p>{{ numberOne }}</p>

    <p>Đếm : {{ count }}</p>
    <button class="btn btn-primary" @click="counter">Tăng số</button>
  </div>

  <div class="col-md-12">
    <h2>Binding 1 chiều với thẻ img</h2>
    <div class="card" style="width: 18rem">
      <!-- VD: BINDING 1 CHIỀU -->
      <!-- v-bind:src = :src dùng để chèn ảnh -->
      <img :src="myCar.carImage" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ myCar.carBrand }}</h5>
        <p class="card-text">{{ myCar.carColor }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <div class="col-md-12">
    <h2>Binding 2 chiều với thẻ input</h2>
    <div class="card">
      <!-- VD: BINDING 2 CHIỀU -->

      <div class="alert alert-success mt-2" role="alert">{{ myClass }}</div>
    </div>
    <div class="card-body">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Nhập tên lớp</label
        >
        <!-- v-model: cập nhật dữ liệu 2 chiều -->
        <input
          v-model="myClass"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
