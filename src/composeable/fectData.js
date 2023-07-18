import { ref } from "vue";
import { projectFireStore } from "../firebase/config.js";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFireStore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();

      // if (!res.exists) {
      //   error.value = "No posts yet";
      // }

      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};

export default getPosts;
