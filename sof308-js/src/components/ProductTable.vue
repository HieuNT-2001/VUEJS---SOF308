<script setup>
import { reactive } from 'vue'

let prop = defineProps({
  status: String,
})

let products = reactive([
  {
    id: 1,
    productName: 'Sản phẩm 1',
    price: 300,
  },
  {
    id: 2,
    productName: 'Sản phẩm 2',
    price: 300,
  },
  {
    id: 3,
    productName: 'Sản phẩm 3',
    price: 300,
  },
])
</script>

<template>
  <div class="col-md-12">
    <table class="table" v-if="prop.status === 'loggedIn'">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Giá</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.id }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
