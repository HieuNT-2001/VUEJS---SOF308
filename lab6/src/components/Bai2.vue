<script setup>
import { ref } from "vue";

let month = ref();
let season = ref("");

function getSeason() {
  if (month.value <= 3) {
    season.value = "Mùa Xuân";
  } else if (month.value <= 6) {
    season.value = "Mùa Hè";
  } else if (month.value <= 9) {
    season.value = "Mùa Thu";
  } else if (month.value <= 12) {
    season.value = "Mùa Đông";
  } else {
    season.value = "Vui lòng nhập tháng từ 1 đến 12!";
  }
}
</script>

<template>
  <div class="container mt-3">
    <div class="mb-3">
      <label for="month" class="form-label">Nhập tháng</label>
      <input
        type="number"
        class="form-control"
        id="month"
        v-model="month"
        @input="getSeason"
      />
      <p>Mùa: {{ season }}</p>
    </div>
  </div>
</template>

<style scoped></style>
