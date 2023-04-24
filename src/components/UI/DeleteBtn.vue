<template>
  <button class="delete__btn"><slot></slot></button>
</template>

<script>
export default {
  name: "delete-btn",
};
</script>

<style>
.delete__btn {
  margin-bottom: 30px;
  padding: 0px 10px 0px 10px;
  width: 9rem;
  height: 2rem;
  align-self: center;
  background: transparent;
  border: 1px solid #cbe467;
  border-radius: 8px;
  color: white;
  font-size: 1rem;

  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.post__btn:hover {
  background: #a3c322;
}
</style>
