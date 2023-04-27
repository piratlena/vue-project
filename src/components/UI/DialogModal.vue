<template>
  <transition-group name="dialog-outer">
    <div
      class="dialog"
      v-if="show"
      @click.stop="hideDialog"
    >
      <transition-group name="dialog-inner">
        <div
          class="dialog__content"
          @click.stop
        >
          <slot></slot>
        </div>
      </transition-group>
    </div>
  </transition-group>
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

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
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
.dialog-outer-enter-active,
.dialog-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.dialog-outer-enter-from,
.dialog-outer-leave-to {
  opacity: 0;
}
.dialog-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.dialog-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.dialog-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.dialog-inner-leave-to {
  transform: scale(0.8);
}
</style>
