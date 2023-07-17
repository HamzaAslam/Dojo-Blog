<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>

    <div v-if="posts.length" class="layout">
      <PostList :sending="posts" />
      <TagCloud :sending="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import TagCloud from "../views/TagCloud.vue";
import getPosts from "../composeable/fectData";
import Spinner from "../components/Spinner.vue";
export default {
  name: "Home",
  components: { TagCloud, PostList, Spinner },

  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error, load };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
