<template>
  <div class="post">
    <div class="post__content">
      <div>
        <div>{{ post.id }} likes = {{ $store.state.likes }}</div>
        <div class="title">Название:</div>
        <div class="descr">{{ post.title }}</div>
      </div>
      <div>
        <div class="title">Описание:</div>
        <div class="descr">
          {{ post.body }}
        </div>
      </div>
    </div>
    <div class="post_btns">
      <delete-btn
        class="post__btn"
        @click="$emit('remove', post)"
        >Удалить</delete-btn
      >

      <delete-btn
        class="post__btn"
        @click="$router.push(`/posts/${post.id}`)"
        >Открыть</delete-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post {
  width: 70%;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid #a3c322;
  border-radius: 8px;
  color: white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__content {
  display: flex;
  flex-direction: column;
  padding: 0px 15px 0px 15px;
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
.post__btns {
  display: flex;
  flex-direction: column;
}
</style>
