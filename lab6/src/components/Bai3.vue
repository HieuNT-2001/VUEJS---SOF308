<script setup>
import { reactive, ref } from "vue";

let items = reactive([
  {
    image: "http://picsum.photos/id/1/300/300",
    title: "8 Loại rau củ quả giàu canxi",
    content:
      "Canxi là loại khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...",
  },
  {
    image: "http://picsum.photos/id/2/300/300",
    title: "Các loại gia vị tốt cho sức khỏe",
    content:
      "Một số loại gia vị cung cấp nhiều polyphennol chống oxi hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn...",
  },
  {
    image: "http://picsum.photos/id/3/300/300",
    title: "9 Loại đậu bổ dưỡng nên dùng nhiều",
    content:
      "Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...",
  },
]);
</script>

<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4" v-for="item in items" :key="item.title">
        <div class="card" style="width: 18rem">
          <img :src="item.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>
            <a href="#" class="btn btn-primary">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
