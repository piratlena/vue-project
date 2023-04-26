<template>
  <div>
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spinner-sign",
};
</script>

<style>
.loading-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #bfde42 transparent #bfde42 transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
