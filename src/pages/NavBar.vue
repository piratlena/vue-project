<template>
  <div class="navbar">
    <div
      class="logo"
      @click="$router.push('/')"
    >
      Vue3
    </div>
    <ul class="navbar__items">
      <li
        class="navbar__item"
        @click="$router.push('/posts')"
      >
        Посты
      </li>
      <li
        class="navbar__item"
        @click="$router.push('/about')"
      >
        О сайте
      </li>
      <li
        class="navbar__item"
        @click="$router.push('/store')"
      >
        Store
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes hithere {
  30% {
    transform: scale(1);
  }
  40% {
    transform: rotate(-6deg);
  }
  60% {
    transform: rotate(-6deg);
  }
  50% {
    transform: rotate(6deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: scale(1);
  }
}
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding-top: 30px;
  padding-bottom: 20px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  z-index: 50;
  background-color: #333;
  align-items: center;
}
.navbar__items {
  width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.navbar__item {
  list-style-type: none;
  color: #a3c322;
  font-size: 1.3rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
}
.navbar__item:hover {
  color: #a3c322;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.9);
  transform: rotate(5deg) scale(1.3);
}
.logo {
  color: #a3c322;
  font-size: 2rem;
  margin-left: 30%;
  cursor: pointer;
}
</style>
