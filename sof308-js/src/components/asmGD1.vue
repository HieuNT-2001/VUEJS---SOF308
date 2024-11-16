<script setup>
import { reactive, ref } from 'vue'

let status = ref('isLogout')
let user = ref('')
let password = ref('')
let isDisplay = ref('true')
let products = reactive([
  {
    id: 1,
    image: 'https://picsum.photos/id/1/50/50',
    name: 'Item 1',
    code: '001',
    price: 10.0,
    available: true,
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/2/50/50',
    name: 'Item 2',
    code: '002',
    price: 20.0,
    available: false,
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/3/50/50',
    name: 'Item 3',
    code: '003',
    price: 30.0,
    available: true,
  },
])

// Đăng nhập
function login() {
  status.value = 'loging'

  setTimeout(() => {
    if (user.value === 'admin' && password.value === 'admin') {
      status.value = 'islogin'
      setTimeout(() => {
        isDisplay.value = false
      }, 2000)
    } else {
      status.value = 'isLogout'
      alert('Vui lòng nhập tên đăng nhập và mật khẩu')
    }
  }, 2000)
}

// Đăng xuất
function logout() {
  status.value = 'isLogout'
}
</script>

<template>
  <!-- Form đăng nhập -->
  <div class="card mt-4" v-if="status === 'isLogout'">
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
        <button class="btn btn-primary" @click="login">Đăng nhập</button>
      </div>
    </div>
  </div>

  <!-- Thông tin trạng thái đăng nhập -->
  <div
    class="alert alert-primary mt-3"
    role="alert"
    v-else-if="status === 'loging'"
  >
    Đang đăng nhập, vui lòng chờ...
  </div>

  <div class="card" v-else>
    <div class="card-body">
      <div class="alert alert-success mt-3" role="alert" v-if="isDisplay">
        Chào mừng bạn admin! Bạn đã đăng nhập thành công
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Tên</th>
            <th scope="col">Mã</th>
            <th scope="col">Giá</th>
            <th scope="col">Tình trạng</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td><img :src="product.image" alt="" /></td>
            <td>{{ product.name }}</td>
            <td>{{ product.code }}</td>
            <td>{{ product.price }}</td>
            <td>
              <p class="text-light bg-success rounded" v-if="product.available">
                Có sẵn
              </p>
              <p
                class="text-light bg-secondary rounded"
                v-if="!product.available"
              >
                Hết hàng
              </p>
            </td>
            <td><button class="btn btn-danger">Xóa</button></td>
          </tr>
        </tbody>
      </table>

      <div class="text-center">
        <button class="btn btn-primary" @click="logout">Đăng xuất</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-light {
  display: inline-block; /* Giúp background vừa khít nội dung */
  padding: 0.2em 0.5em; /* Tăng khoảng cách giữa nội dung và viền */
  border-radius: 5px; /* Làm tròn góc */
  font-size: 0.9em; /* Tùy chỉnh kích thước chữ */
}
</style>
