<template>
  <input
    type="text"
    class="input"
    :value="value"
    @input="updateInput"
  />
</template>

<script>
export default {
  name: "form-input",
  props: {
    value: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>

<style>
.input {
  background: transparent;
  border: 1px solid #cbe467;
  width: 100%;
  height: 2.5rem;
  color: black;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-left: 10px;
  transition: 0.3s;
  outline: none;
}
.input:focus {
  border: 1px solid #cbe467;
  transform: scale(1.1);
}
</style>
