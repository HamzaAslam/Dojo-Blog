import { ref } from "vue";

const useTags = (sending) => {
  const tags = ref([]);
  const tagSet = new Set();

  sending.forEach((ele) => {
    ele.tags.forEach((tag) => {
      tagSet.add(tag);
    });
  });
  tags.value = [...tagSet];

  return { tags };
};

export default useTags;
