<template>
  <div class="container">
    <div class="post-create">
      <h1>Страница с постами</h1>
      <my-button @click="fetchPosts">Получить посты</my-button>
      <my-button
        class="post-btn"
        @click="showDialog"
        >Создать пост</my-button
      >
    </div>

    <dialog-modal v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </dialog-modal>

    <post-list
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        this.posts = response.data;
        console.log(response);
      } catch (e) {
        alert("Something went wrong");
      }
    },
  },
};
</script>

<style>
body {
  background-color: #333;
  font-family: "Arial", sans-serif;
}
* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  align-items: center;
  padding-top: 100px;
}
.post-create {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  text-align: center;
  padding: 30px 0px 50px 0px;
  border: 1px solid #cbe467;
  border-radius: 8px;
}
h1 {
  color: white;

  font-size: 4rem;
}
</style>
