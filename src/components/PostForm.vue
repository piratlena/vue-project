<template>
  <div class="create-post">
    <div class="title-main">
      <h4>Создать пост</h4>
    </div>

    <form
      class="form"
      @submit.prevent
    >
      <input
        v-bind:value="post.title"
        @input="post.title = $event.target.value"
        class="input-title"
        type="text"
        placeholder="Название поста"
      />
      <input
        v-bind:value="post.description"
        @input="post.description = $event.target.value"
        class="input-descr"
        type="text"
        placeholder="Название поста"
      />
    </form>
    <button class="btn">Создать пост</button>
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
input {
  background: transparent;
  border: 1px solid #cbe467;
  width: 48%;
  height: 2.5rem;
  color: white;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-left: 10px;
}
.btn {
  width: 15rem;
  align-self: center;
  height: 3.5rem;
  background: #a3c322;
  border: 1px solid #cbe467;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 30px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.btn:hover {
  background: transparent;
}
</style>
