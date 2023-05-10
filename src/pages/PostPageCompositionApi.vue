<template>
  <h1>Composition API</h1>

  <div class="post-create">
    <h1>Страница с постами</h1>

    <search-input
      v-model="searchQuery"
      v-model:value="searchQuery"
      placeholder="Поиск"
    />

    <div class="post-selector">
      <my-button class="post-btn">Создать пост</my-button>
      <select-list
        v-model="selectedSort"
        :options="sortOption"
      />
    </div>
  </div>

  <dialog-modal v-model:show="dialogVisible">
    <post-form />
  </dialog-modal>

  <post-list
    :posts="sortedAndSearchedPosts"
    v-if="!isPostLoading"
  />

  <spinner-sign v-else />
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSerachedPosts from "@/hooks/useSortedAndSerachedPosts";
import { ref } from "vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,

      sortOption: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSerachedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
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
</style>
