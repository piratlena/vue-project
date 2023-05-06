<template>
  <div>
    <div class="container">
      <nav-bar></nav-bar>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/pages/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
body {
  background-color: #333;
  font-family: "Arial", sans-serif;
}
* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  align-items: center;
  padding-top: 200px;
}
</style>
