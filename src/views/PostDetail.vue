<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete">Delete</button>
  </div>
  <div v-else><Spinner /></div>
</template>
<script>
import fetchSinglePost from "../composeable/fetchSinglePost";
import Spinner from "../components/Spinner.vue";
import { projectFireStore } from "../firebase/config.js";
import { useRouter } from "vue-router";
export default {
  props: ["id"],
  component: { Spinner },
  setup(props) {
    const { post, error, load } = fetchSinglePost(props.id);
    const router = useRouter();

    load();

    const handleDelete = async () => {
      await projectFireStore.collection("posts").doc(props.id).delete();

      router.push({ name: "Home" });
    };

    return { post, error, handleDelete };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
</style>
