<template>
  <div class="tagcloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag" class="layout">
      <router-link :to="{ name: 'Tags', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>
<script>
import useTags from "../composeable/useTags";
export default {
  props: ["sending"],

  setup(props) {
    const { tags } = useTags(props.sending);
    return { tags };
  },
};
</script>
<style>
.tagcloud {
  padding: 10px;
}
.tagcloud h3 {
  padding: 16px 8px;
  color: #444;
  border-bottom: 1px solid #eee;
}
.tagcloud div {
  display: inline-block;
  padding: 10px;
}
.tagcloud a {
  color: #ccc;
  text-decoration: none;
}
.tagcloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
