<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :sending="postWithTags" />
      <TagCloud :sending="postWithTags" />
    </div>
  </div>
</template>
<script>
import fetchData from "../composeable/fectData";
import PostList from "../components/PostList.vue";
import TagCloud from "../views/TagCloud.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  components: { PostList, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, error, load } = fetchData();
    load();

    const postWithTags = computed(() => {
      return posts.value.filter((ele) => ele.tags.includes(route.params.tag));
    });
    return { postWithTags, posts, error };
  },
};
</script>
<style></style>
