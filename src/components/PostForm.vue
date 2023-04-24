<template>
  <div class="create-post">
    <div class="title-main">
      <h4>Создать пост</h4>
    </div>

    <form
      class="form"
      @submit.prevent
    >
      <form-input
        v-model="post.title"
        v-model:value="post.title"
        class="input-title"
        type="text"
        placeholder="Название поста"
      />
      <form-input
        v-model="post.description"
        v-model:value="post.description"
        class="input-descr"
        type="text"
        placeholder="Описание поста"
      />
    </form>
    <my-button
      class="btn"
      @click="createPost"
    >
      Создать пост
    </my-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        description: "",
      };
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

h4 {
  color: white;
  font-size: 2.5rem;
}

.title-main {
  margin: 0 auto;
  width: 350px;
  margin-bottom: 20px;
}

.create-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form {
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
/* input {
  background: transparent;
  border: 1px solid #cbe467;
  width: 48%;
  height: 2.5rem;
  color: white;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-left: 10px;
} */
</style>
