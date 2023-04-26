<template>
  <div
    class="dialog"
    v-if="show"
    @click.stop="hideDialog"
  >
    <div
      class="dialog__content"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 8px;
  min-height: 100px;
  min-width: 300px;
  padding: 20px;
}
</style>
