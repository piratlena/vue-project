<template>
  <div
    class="post"
    v-for="post in posts"
  >
    <div>
      <div class="title">Название:</div>
      <div class="descr">{{ post.title }}</div>
    </div>
    <div>
      <div class="title">Описание:</div>
      <div class="descr">
        {{ post.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.title {
  font-size: 2rem;
  color: #cbe467;
  text-transform: uppercase;
  line-height: 48px;
}
.descr {
  font-size: 1.5rem;
}
</style>
