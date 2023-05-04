<template>
  <div class="post-create">
    <h1>Страница с постами</h1>

    <search-input
      v-model="searchQuery"
      v-model:value="searchQuery"
      placeholder="Поиск"
    />

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
    :posts="sortedAndSearchedPosts"
    @remove="removePost"
    v-if="!isPostLoading"
  />

  <spinner-sign v-else />

  <div
    ref="observer"
    class="observer"
  ></div>

  <!-- <div class="page__wrapper">
        <div
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          class="page"
          :class="{ 'current-page': page === pageNumber }"
          @click="changePge(pageNumber)"
        >
          {{ pageNumber }}
        </div>
      </div> -->
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
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
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
    // changePge(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true;

        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Something went wrong");
      } finally {
        this.isPostLoading = false;
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1;
        // this.isPostLoading = true;

        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("Something went wrong");
      }
    },
  },

  mounted() {
    this.fetchPosts();
    console.log(this.$refs.observer);
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPost.filter((post) =>
        post.title.includes(this.searchQuery)
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
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
