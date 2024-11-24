<script setup>
import { reactive, ref } from "vue";

let isEditing = ref(false);
let editingIndex = ref(null);

let student = reactive({
  name: "",
  score: null,
  birthday: "",
});

let students = reactive([
  {
    name: "Nguyễn Chí Hùng",
    score: 8,
    birthday: "2006-01-01",
  },
  {
    name: "Phạm Thị Lan",
    score: 9,
    birthday: "2006-05-15",
  },
]);

function addStudent() {
  if (isEditing.value) {
    students[editingIndex.value] = student;
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    students.push(student);
  }
  resetForm();
}

function editStudent(index) {
  student = students[index];
  isEditing.value = true;
  editingIndex.value = index;
}

function deleteStudent(index) {
  students.splice(index, 1);
}

function resetForm() {
  student = {
    name: "",
    score: null,
    birthday: "",
  };
}
</script>

<template>
  <div class="container mt-3">
    <div class="row">
      <!-- Form -->
      <form @submit.prevent="addStudent" class="col-md-4">
        <h3>Thêm học sinh</h3>
        <!-- name -->
        <div class="mb-3">
          <label for="name" class="form-label">Họ tên:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="student.name"
            required
          />
        </div>

        <!-- score -->
        <div class="mb-3">
          <label for="score" class="form-label">Điểm:</label>
          <input
            type="number"
            class="form-control"
            id="score"
            v-model="student.score"
            required
          />
        </div>

        <!-- birthday -->
        <div class="mb-3">
          <label for="birthday" class="form-label">Ngày sinh:</label>
          <input
            type="date"
            class="form-control"
            id="birthday"
            v-model="student.birthday"
            required
          />
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-success">
          {{ isEditing ? "Cập nhật" : "Thêm" }}
        </button>
      </form>

      <!-- Table -->
      <div class="col-md-8">
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in students" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.score }}</td>
              <td>{{ item.birthday }}</td>
              <td>
                <button class="btn btn-warning" @click="editStudent(index)">
                  Sửa
                </button>
              </td>
              <td>
                <button class="btn btn-danger" @click="deleteStudent(index)">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
