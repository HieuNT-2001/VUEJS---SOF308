<script setup>
import Bai1 from "./components/Bai1.vue";
import Bai2 from "./components/Bai2.vue";
import Bai3 from "./components/Bai3.vue";
import Bai4 from "./components/Bai4.vue";

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container mt-3 mb-3">
    <!-- bai 1 -->
    <div class="card mt-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Bài 1</h5>
        <p class="card-text">
          <Bai1 />
        </p>
      </div>
    </div>

    <!-- bai 2 -->
    <div class="card mt-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Bài 2</h5>
        <p class="card-text">
          <Bai2 />
        </p>
      </div>
    </div>

    <!-- bai 3 -->
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Bài 3</h5>
        <p class="card-text">
          <Bai3 />
        </p>
      </div>
    </div>

    <!-- bai 4 -->
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Bài 4</h5>
        <p class="card-text">
          <Bai4 />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
