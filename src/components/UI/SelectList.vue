<template>
  <select
    class="select"
    :value="modelValue"
    @change="changeOption"
  >
    <option
      class="option"
      disabled
      value=""
    >
      Выберите из списка
    </option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "select-list",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      console.log(event);
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
.select {
  border: 2px solid #cbe467;
  outline: none;
  color: #cbe467;
  border-radius: 8px;
  background: #333;
  padding: 10px;
  font-size: 20px;
}
</style>
