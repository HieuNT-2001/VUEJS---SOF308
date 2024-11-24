<script setup>
import { ref } from "vue";

let score = ref();
let ability = ref("");

function classification() {
  if (score.value < 5) {
    ability.value = "yếu";
  } else if (score.value < 6.5) {
    ability.value = "Trung bình";
  } else if (score.value < 8) {
    ability.value = "khá";
  } else if (score.value < 9) {
    ability.value = "Giỏi";
  } else {
    ability.value = "Xuất sắc";
  }
}
</script>

<template>
  <div class="container mt-3">
    <div class="mb-3">
      <label for="score" class="form-label">Nhập điểm</label>
      <input
        type="number"
        class="form-control"
        id="score"
        v-model="score"
        @input="classification"
      />
      <p>Xếp loại: {{ ability }}</p>
    </div>
  </div>
</template>

<style scoped></style>
