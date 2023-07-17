<template>
  <div>
    <div v-for="item in sending" :key="item.id" class="post">
      <SinglePost :SinglePostProp="item" />
    </div>
  </div>
</template>
<script>
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["sending"],
};
</script>
<style></style>
