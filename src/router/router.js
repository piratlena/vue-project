import Main from "@/pages/Main";
import { createRouter, createWebHashHistory } from "vue-router";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostLinkPage from "@/pages/PostLinkPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostLinkPage,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});
export default router;
