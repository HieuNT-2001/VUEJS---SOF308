<script setup>
import { reactive, ref } from 'vue'
let isStatus = ref(true)
let isVisible = ref(true)
let students = reactive([
  {
    name: 'Hoàng Quang Thắng',
    code: 'PP00001',
    class: 'WD19',
  },
  {
    name: 'Trần Nguyễn Khánh Lâm',
    code: 'PP00002',
    class: 'WD19',
  },
  {
    name: 'Nguyễn Quang Hiếu',
    code: 'PP00003',
    class: 'SD19',
  },
  {
    name: 'Trần Minh Hằng',
    code: 'PP00004',
    class: 'LO19',
  },
])
</script>

<template>
  <h1 v-if="isStatus">Ẩn thân chi thuật</h1>
  <h1 v-show="isVisible">Ẩn thân chi thuật</h1>

  <div
    class="card mx-3"
    style="width: 18rem"
    v-for="(student, index) in students"
    :key="student.name"
  >
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ index + 1 }}</li>
      <li class="list-group-item">{{ student.name }}</li>
      <li class="list-group-item">{{ student.code }}</li>
      <li class="list-group-item">{{ student.class }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
