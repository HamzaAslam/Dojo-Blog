import { ref } from "vue";
import { projectFireStore } from "../firebase/config.js";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await projectFireStore.collection("posts").doc(id).get();
      if (!res.exists) {
        post.value = "This post does not exist";
      }
      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
