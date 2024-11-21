<script setup>
import { ref } from 'vue'

let number = ref(0)
let isDisplay = ref(false)
let content = ref('Đây là nội dung được hiện thị')

function increse(param) {
  number.value += param
}

function decrese(param) {
  if (number.value > 0) {
    number.value -= param
  }
}

function reset() {
  number.value = 0
}

function display() {
  isDisplay.value = !isDisplay.value
}
</script>

<template>
  <!-- v-on:click là tương đương với @click -->
  <div>{{ number }}</div>
  <button @click="increse(5)" class="btn btn-primary">Tăng lên...</button>
  <button @click="decrese(5)" class="btn btn-danger">Giảm xuống...</button>
  <button @click="reset" class="btn btn-secondary">Đặt lại</button>
  <!-- BT
   -- Khi ấn vào nút tăng lên sẽ khiến number tăng lên 1 đơn vị
   -- KHi ấn vào nút giảm xuống sẽ khiến number giảm xuống 1 đơn vị
   (Chú ý giảm tới 0 thì dừng lại)
   -- Khi ấn nút đặt lại thì sẽ đặt biến number về số 0 -->

  <!-- BT
   Tăng lên x đơn vị -->

  <!-- BT
    -->
  <button @click="display" class="btn btn-primary">
    {{ isDisplay ? 'Ẩn nội dung' : 'Hiển thị nội dung' }}
  </button>
  <p v-if="isDisplay">{{ content }}</p>
</template>

<style scoped></style>
