<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

// BT1: Khai bao 2 biến fullname và studentCode;
let fullname = 'Nguyễn Trung Hiếu'
let studentCode = 'PP03096'

// BT2: Sử dụng component Alert trong bootstrap
// để hiển thị 2 biến fullname và studentCard

// BT3: Khai báo 1 object myCar gồm các key: hangXe, mauXe, kieuXe,  tenXe, soChoNgoi trong thẻ Card
let myCar = {
  hangXe: 'HONDA',
  mauXe: 'Trắng',
  kieuXe: 'SUV',
  tenXe: 'Lexus',
  soChoNgoi: '5 chỗ ngồi',
}
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!-- Hiển thị 2 biến fullname và studentCode -->
    <div class="alert alert-success" role="alert">
      <p>Fullname: {{ fullname }}</p>
      <p>Student Code: {{ studentCode }}</p>
    </div>

    <!-- Hiển thị biến object myCar -->
    <div class="card" style="width: 18rem">
      <img
        src="https://m.baotuyenquang.com.vn/media/images/2022/11/img_20221125083953.jpeg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ myCar.hangXe }}</h5>
        <p>Màu xe: {{ myCar.mauXe }}</p>
        <p>Kiểu xe: {{ myCar.kieuXe }}</p>
        <p>Tên xe: {{ myCar.tenXe }}</p>
        <p>Số chỗ ngồi: {{ myCar.soChoNgoi }}</p>
        <a href="#" class="btn btn-primary">Mua</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
