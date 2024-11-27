<script setup>
let emit = defineEmits()

function notify() {
  emit('emitEvent', 'Đây là thông')
}
</script>

<template>
  <div class="col-md-12">
    <h1>Emit</h1>
    <button class="btn btn-primary" @click="notify">Ấn vào đây...</button>
  </div>
</template>

<style scoped></style>
