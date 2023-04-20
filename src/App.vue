<template>
  <div class="container">
    <form class="form">
      <input
        class="input-title"
        type="text"
        placeholder="Название поста"
      />
      <input
        class="input-descr"
        type="text"
        placeholder="Название поста"
      />
    </form>
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
  </div>
</template>

<script>
export default {
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
};
</script>

<style>
body {
  background-color: #333;
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

.form {
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
input {
  background: transparent;
  border: 1px solid #cbe467;
  width: 48%;
  height: 2.5rem;

  margin-bottom: 20px;
  border-radius: 10px;
  padding-left: 10px;
}
</style>
