<script setup>
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
  <!-- Hiển thị 2 biến fullname và studentCode -->
  <div class="alert alert-success" role="alert">
    <p>Fullname: {{ fullname }}</p>
    <p>Student Code: {{ studentCode }}</p>
  </div>

  <!-- Hiển thị biến object myCar -->
  <div class="card" style="width: 18rem">
    <img src="https://m.baotuyenquang.com.vn/media/images/2022/11/img_20221125083953.jpeg" class="card-img-top"
      alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ myCar.hangXe }}</h5>
      <p>Màu xe: {{ myCar.mauXe }}</p>
      <p>Kiểu xe: {{ myCar.kieuXe }}</p>
      <p>Tên xe: {{ myCar.tenXe }}</p>
      <p>Số chỗ ngồi: {{ myCar.soChoNgoi }}</p>
      <a href="#" class="btn btn-primary">Mua</a>
    </div>
  </div>
</template>
