<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style>
.btn {
  padding: 10px 20px 10px 20px;
  align-self: center;
  background: #a3c322;
  border: 1px solid #cbe467;
  border-radius: 8px;
  color: white;
  font-size: 2rem;

  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.btn:hover {
  background: transparent;
}
</style>
