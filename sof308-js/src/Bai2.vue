<!-- Code JS nam trong the script -->
<script setup>
const products = [
  {
    name: "Sản phẩm 1",
    description: "Mô tả sản phẩm 1, rất chất lượng và đáng mua.",
    price: 500000,
    image: "http://picsum.photos/id/1/300/300",
  },
  {
    name: "Sản phẩm 2",
    description: "Mô tả sản phẩm 2, chất lượng tốt và giá phải chăng.",
    price: 300000,
    image: "http://picsum.photos/id/2/300/300",
  },
  {
    name: "Sản phẩm 3",
    description: "Mô tả sản phẩm 3, sản phẩm cao cấp và nhiều tính năng.",
    price: 1000000,
    image: "http://picsum.photos/id/3/300/300",
  }
];
</script>

<!-- Code HTML nam trong the template -->
<template>
  <div class="container mt-5">
    <h1 class="text-center">Danh sách sản phẩm</h1>
    <div class="row">
      <!-- Sản phẩm 1 -->
      <div class="col-sm-4" v-for="product in products" :key="product.name">
        <div class="card">
          <img :src="product.image" alt="Hình ảnh sản phẩm" class="card-img-top" />
          <div class="card-body">
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Giá: {{ product.price }} VND</p>
            <button class="btn btn-success">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Code CSS nam trong the style -->
<style scoped></style>
