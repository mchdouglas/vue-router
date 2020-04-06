import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    icon: "mdi-home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/clientes",
    name: "Clientes",
    icon: "mdi-account-multiple-outline",
    component: () => import("@/views/Clientes.vue"),
  },
  {
    path: "/fornecedores",
    name: "Fornecedores",
    icon: "mdi-cash-usd",
    component: () => import("@/views/Fornecedores.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
