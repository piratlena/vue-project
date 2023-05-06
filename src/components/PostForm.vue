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
        v-focus
        v-model="post.title"
        v-model:value="post.title"
        class="input-title"
        type="text"
        placeholder="Название поста"
      />
      <form-input
        v-model="post.body"
        v-model:value="post.body"
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
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
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
  color: #a3c322;
  font-size: 2.5rem;
}

.title-main {
  margin: 0 auto;
  width: 350px;
  margin-bottom: 20px;
  text-align: center;
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
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
