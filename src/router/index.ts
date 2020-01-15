import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../views/Home.vue";
import * as routerNames from "./routerNames";
import Aside from "../views/aside/Aside.vue";
import BookList from "../views/bookList/BookList.vue";

Vue.use(VueRouter);

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
      name: routerNames.HELLO
    }
  },
  {
    path: "/home",
    name: routerNames.HELLO,
    components: {
      aside: Aside,
      body: BookList
    },
    meta: {
      pageTitle: `router.${routerNames.HELLO}`
    }
  },
  {
    path: "/booklist",
    name: routerNames.BOOKLIST,
    components: {
      aside: Aside,
      body: BookList
    },
    meta: {
      pageTitle: `router.${routerNames.BOOKLIST}`
    }
    // children: [
    //   {
    //     path: ':subName',
    //     name: routerNames.COMPONENTDETAIL,
    //     component: Post,
    //     meta: {
    //       detail: routerNames.COMPONENTDETAIL,
    //       pageTitle: `router.${routerNames.COMPONENTDETAIL}`,
    //       contentData: componentList
    //     }
    //   }
    // ]
  },
  {
    path: "/about",
    name: routerNames.HELLO,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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
