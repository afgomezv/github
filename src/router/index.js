import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => {
      return import("../views/Login.vue");
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => {
      return import("../views/Signup.vue");
    },
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => {
      return import("../views/Todo.vue");
    },
  },
  {
    path: "/editar/:id",
    name: "Editar",
    component: () => {
      return import("../views/Editar.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
