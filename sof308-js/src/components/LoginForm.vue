<!--
1. Chưa đăng nhập / đăng xuất
2. Đang đăng nhập (chờ 2s)
 -- Nếu tài khoản và mật khẩu đúng => hiển thị thông báo chào mừng
 -- Nếu tài khoản hoặc mật khẩu sai => alert("Thông tin tài khoản và mật khẩu chưa đúng")
 => chuyển về trạng thái chưa đăng nhập -->

<script setup>
import { ref } from 'vue'
import ProductTable from './ProductTable.vue'

// Khai báo biến status để lưu trạng thái đăng nhập
// Trạng thái mặc định là loggedOut
let status = ref('loggedOut')

// Khai báo biến user để lưu trạng thái tài khoản
let user = ref('')
let password = ref('')

// Hàm đăng nhập
function login() {
  // Đổi trạng thái đăng nhập từ loggedOut sang loggingin
  // Sử dụng phương thức .value để đổi trạng thái của status
  // (bởi vì đang ref để quản lý state)
  status.value = 'loggingIn'

  // Sử dụng hàm setTimeOut để chờ 2s
  setTimeout(() => {
    if (user.value === 'admin' && password.value === 'admin') {
      // Đổi trạng thái sau khi đăng nhập thành công
      status.value = 'loggedIn'
    } else {
      // Đổi trạng thái nếu người dùng không nhập gì
      // hoặc nhập sai tài khoản và mật khẩu
      status.value = 'loggedOut'
      alert('Sợ thì đi về ...')
    }
  }, 2000)
}

function logout() {
  status.value = 'loggedOut'
}
</script>

<template>
  <!-- Form đăng nhập -->
  <div class="card mt-4" v-if="status === 'loggedOut'">
    <div class="card-body">
      <div class="mb-3">
        <label for="account" class="form-label">Tài khoản</label>
        <input v-model="user" type="text" class="form-control" id="account" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mật khẩu</label>
        <input
          v-model="password"
          type="text"
          class="form-control"
          id="password"
        />
      </div>
      <div class="text-center">
        <!-- Muốn biết người dùng click chuột thì phải có @click -->
        <button class="btn btn-primary" @click="login">Đăng nhập</button>
      </div>
    </div>
  </div>
  <!-- Thông tin trạng thái đăng nhập -->
  <div
    class="alert alert-primary mt-3"
    role="alert"
    v-else-if="status === 'loggingIn'"
  >
    Đang đăng nhập...
  </div>
  <div class="card" v-else>
    <div class="card-body">
      <div class="alert alert-success mt-3" role="alert">
        Chào mừng bạn {{ user }}
      </div>
      <ProductTable :status="status" />
      <div class="text-center">
        <button class="btn btn-primary" @click="logout">Đăng xuất</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
