<template>
  <div class="container">
    <div class="post-create">
      <h1>Страница с постами</h1>
      <div class="post-selector">
        <my-button
          class="post-btn"
          @click="showDialog"
          >Создать пост</my-button
        >
        <select-list
          v-model="selectedSort"
          :options="sortOption"
        />
      </div>
    </div>

    <dialog-modal v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </dialog-modal>

    <post-list
      :posts="sortedPost"
      @remove="removePost"
      v-if="!isPostLoading"
    />

    <spinner-sign v-else />
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
      isPostLoading: false,
      selectedSort: "",
      sortOption: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
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
        this.isPostLoading = true;

        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        this.posts = response.data;
      } catch (e) {
        alert("Something went wrong");
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
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
.post-selector {
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
