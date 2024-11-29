<script setup>
import { reactive, ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

import LoginForm from './components/LoginForm.vue'
import Props from './components/Props.vue'
import Emits from './components/Emits.vue'
import BookForm from './components/BookForm.vue'
import BookTable from './components/BookTable.vue'

// let tinNhan = ref('đây là tin nhắn')

// let tinNhanEmit = ref('')

// function emitHandle(tinNhan) {
//   tinNhanEmit.value = tinNhan
// }

let books = reactive([])

function handleSubmit(data) {
  books.push(data)
  console.log(books)
}
</script>

<template>
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
              <li>
                <hr class="dropdown-divider" />
              </li>
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
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container mt-3">
    <div class="row">
      <!-- <LoginForm />
      <Props :message="tinNhan" id="9999" /> -->

      <!-- Khi ấn vào nút Nhấn vào đây... thì
       hiển thị ra một đoạn thông báo -->
      <!-- <Emits @emitEvent="emitHandle" /> -->
      <!-- <h2>{{ tinNhanEmit }}</h2> -->

      <!-- GỢI Ý: -->
      <!-- <BookForm @addBook="handleSubmit" /> -->
      <!-- <BookTable :books="books" /> -->
      <!-- <BookTable /> -->
    </div>
  </div>

  <div id="app">
    <RouterView />
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
