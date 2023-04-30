<template>
  <div class="search-input__box">
    <input
      type="text"
      class="search-input"
      :value="value"
      @input="updateInput"
    />
    <i
      class="fa-solid fa-xmark close-icon"
      @click="clearInput"
    ></i>
  </div>
</template>

<script>
export default {
  name: "search-input",
  props: {
    value: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:value", event.target.value);
    },
    clearInput() {
      this.$emit("update:value", "");
    },
  },
};
</script>

<style>
.search-input__box {
  width: 70%;
  margin: 0 auto;
  position: relative;
}
.search-input {
  background: transparent;
  border: 1px solid #cbe467;

  width: 70%;
  height: 2.5rem;
  color: black;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-left: 10px;
  transition: 0.3s;
  outline: none;
  color: white;
}
.search-input:focus {
  border: 2px solid #bfde42;
  transform: scale(1.04);
}
.close-icon {
  position: absolute;
  color: #cbe467;
  cursor: pointer;
  right: 18%;
  top: 12px;
}
</style>
