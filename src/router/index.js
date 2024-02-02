import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store";
// import multiguard from "vue-router-multiguard";
Vue.use(VueRouter);

// Logic for login gard for routes
// const loggedIn = function (to, from, next) {
//   if (!store.state.auth.data.Session) {
//     next({
//       name: "PageAccessMain",
//     });
//   }
// };

// to redirect if already a student loged in
// const loggedInSuccess = function (to, from, next) {
//   if (store.state.auth.data.Session) {
//     next({ name: "PageIslandClassroom" });
//   }
// };

//Logic for language locale
var pathArray = window.location.pathname.split("/");
var locale = pathArray[1];
if (locale != "" && !(locale == "en" || locale == "zh" || locale == "ms")) {
  window.location.href = window.location.origin;
}

// all route logics
const routes = [
  
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout-main" */ "@/layouts/LayoutMain"),
    children: [
      {
        path: "/",
        name: "PageHome",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/Home"
          ),
        meta: {
          title: "Home",
        },
      },
    ],
  },

  // Error Pages
  {
    path: "",
    component: () =>
      import(/* webpackChunkName: "layout-main" */ "@/layouts/LayoutMain.vue"),
    children: [
      {
        path: "error/expired",
        name: "PageErrorSessionExpired",
        component: () =>
          import(
            /* webpackChunkName: "main-expaired" */ "@/views/error/PageErrorSessionExpired.vue"
          ),
      },
      {
        path: "/:catchAll(.*)",
        name: "PageErrorNotFound",
        component: () =>
          import(
            /* webpackChunkName: "main-not-found" */ "@/views/error/PageErrorNotFound.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: locale,
  routes,
});

//page title
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
      ? to.meta.title + " | Biblical Wisdom"
      : "Biblical Wisdom";
  });
});

export default router;
