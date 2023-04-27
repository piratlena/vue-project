<template>
  <div v-if="posts.length > 0">
    <div class="title-list">
      <h3>Список постов</h3>
    </div>
    <transition-group name="post-list">
      <post-item
        class="post"
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2
    v-else
    style="color: #cbe467"
  >
    Список постов пуст
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1140px;
  margin: 0 auto;
  align-items: center;
  padding-top: 100px;
}

.post {
  width: 70%;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid #a3c322;
  border-radius: 8px;
  color: white;
  margin-bottom: 20px;
}
.title-list {
  width: 700px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 30px;
}

h3 {
  color: white;
  font-size: 3rem;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
