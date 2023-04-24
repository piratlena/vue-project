<template>
  <div class="container">
    <post-form @create="createPost" />
    <post-list
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "JavaScript",
          description: "Описание поста 1",
        },
        {
          id: 2,
          title: "PHP",
          description: "Описание поста 2",
        },
        {
          id: 3,
          title: "Python",
          description: "Описание поста 3",
        },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
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
</style>
