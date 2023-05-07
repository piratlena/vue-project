<template>
  <div class="post-create">
    <h2>
      {{
        $store.state.isAuth
          ? "Пользователь авторизован"
          : "Авторизуйтесь, чтобы использовать сервис"
      }}
    </h2>
    <h2>{{ $store.getters.doubleLikes }}</h2>
    <h1>Страница с постами</h1>
    <div class="likes">
      <i
        class="fa-regular fa-thumbs-up fa-2x like"
        @click="$store.commit('incrementLikes')"
      ></i>

      <i
        class="fa-regular fa-thumbs-down dislike fa-2x dislike"
        @click="$store.commit('decrementLikes')"
      ></i>
    </div>

    <search-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск"
    />

    <div class="post-selector">
      <my-button
        class="post-btn"
        @click="showDialog"
        >Создать пост</my-button
      >
      <select-list
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOption"
      />
    </div>
  </div>

  <dialog-modal v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </dialog-modal>

  <post-list
    :posts="sortedAndSearchedPosts"
    @remove="removePost"
    v-if="!isPostLoading"
  />

  <spinner-sign v-else />

  <div
    v-intersection="loadMorePosts"
    class="observer"
  ></div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },

  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
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
  },

  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      dialogVisible: (state) => state.post.dialogVisible,
      isPostLoading: (state) => state.post.isPostLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOption: (state) => state.post.sortOption,
    }),
    ...mapGetters({
      sortedPost: "post/sortedPost",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
  watch: {},
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
  padding-top: 200px;
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
.page__wrapper {
  display: flex;
  margin-top: 15px;
  margin: 0 auto;
  width: 550px;
  justify-content: space-between;
}

.page {
  display: block;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 45px;
  height: 45px;
  padding: 10px;
  border: 1px solid #cbe467;
  border-radius: 30px;
  margin-right: 10px;
  cursor: pointer;
  color: #cbe467;
  transition: #cbe467 0.3s ease-in-out;
}
.page:hover {
  background-color: #c0de42;
  color: white;
}
.current-page {
  background-color: #c0de42;
  color: white;
}
.observer {
  height: 30px;
  background: #c0de42;
}
.likes {
  margin: 0 auto;
  width: 80px;
  display: flex;
  justify-content: space-between;
}
.like {
  color: #c0de42;
  cursor: pointer;
}
.dislike {
  color: #c0de42;
  cursor: pointer;
}
h2 {
  font-size: 2rem;
  color: #c0de42;
}
</style>
