import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Details from "../views/PostDetail.vue";
import Create from "../views/Create.vue";
import Tags from "../components/Tags.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/tags/:tag",
    name: "Tags",
    component: Tags,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
