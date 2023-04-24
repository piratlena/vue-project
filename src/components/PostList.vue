<template>
  <div v-if="posts.length > 0">
    <div class="title-list">
      <h3>Список пользователей</h3>
    </div>

    <post-item
      class="post"
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
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

<style>
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
</style>
