import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../views/Home.vue";
import * as routerNames from "./routerNames";
import AddWord from "../views/addWord/AddWord.vue";
import WordEbbinghaus from "../views/wordEbbinghaus/WordEbbinghaus.vue";
// import WordEbbinghaus from "../views/wordEbbinghaus/WordEbbinghaus.vue";



Vue.use(VueRouter);
// const MenuData = [
//   {
//     icon: "ios-add",
//     label: "",
//     value: "add",
//     routeName: "addWord",
//     route: "word/add"
//   },
//   {
//     icon: "ios-book-outline",
//     label: "单词书籍",
//     value: "book",
//     routeName: "addWord",
//     routerName: ''
//   },
//   {
//     icon: "ios-bonfire-outline",
//     label: "单词测试",
//     value: "test",
//     routeName: "addWord",
//     routerName: ''
//   },
//   {
//     icon: "ios-basket-outline",
//     label: "单词汇总",
//     value: "all",
//     routeName: "addWord",
//     routerName: ''
//   }
// ];
export const routes = [
  {
    path: "/",
    redirect: {
      name: routerNames.ADDWORD
    }
  },
  {
    path: "/addWord",
    name: routerNames.ADDWORD,
    component: AddWord,
    meta: {
      pageTitle: `router.${routerNames.ADDWORD}`
    }
  },
  {
    path: "/WordEbbinghaus",
    name: routerNames.WORDEBBINGHAUS,
    component: WordEbbinghaus,
    meta: {
      pageTitle: `router.${routerNames.WORDEBBINGHAUS}`
    }
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/Login.vue")
  },
  {
    path: "/word/add",
    name: "addWord",
    meta: {
      icon: "ios-add",
      title: "录入单词"
    },
    isMenu: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/addWord/AddWord.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
