import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../views/LoginForm.vue";
import HomeForm from "../views/HomeForm.vue";
import WishList from "../views/WishList.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/tickets",
    name: "Home",
    component: HomeForm,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
