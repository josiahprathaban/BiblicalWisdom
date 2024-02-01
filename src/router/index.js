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
  // Auth Pages
  {
    path: "/auth",
    redirect: "/auth/organization-selection",
    component: () =>
      import(/* webpackChunkName: "layout-main" */ "@/layouts/LayoutMain.vue"),
    // beforeEnter: multiguard([loggedInSuccess]),
    children: [
      {
        path: "organization-selection",
        name: "PageAuthOrganizationSelection",
        component: () =>
          import(
            /* webpackChunkName: "auth-organization-selection" */ "@/views/auth/OrganizationSelection.vue"
          ),
        meta: {
          title: "Org",
        },
      },
      {
        path: "signin",
        name: "PageAuthSignin",
        component: () =>
          import(
            /* webpackChunkName: "auth-signin" */ "@/views/auth/Signin.vue"
          ),
        meta: {
          title: "Signin",
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
      ? to.meta.title + " | OfficeNexus"
      : "OfficeNexus";
  });
});

export default router;
