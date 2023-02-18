import Vue from 'vue';

import VueRouter from  'vue-router'

import NavDrawer from "../views/NavDrawer"
import AdminOne from "../components/AdminOne"
import SelectionsView from "../components/SelectionsView"
import UpdateView from "../components/UpdateView"
import HomeView from "../views/HomeView"
import StudentOne from "../components/StudentOne"
import NavDrawerTwo from "../views/NavDrawerTwo"
import StudentStatus from "../components/StudentStatus"
import PasswordUser from "../components/PasswordUser"
import PasswordAdmin from "../components/PasswordAdmin"
import UserAccount from "../components/UserAccount"
import messageView from "../components/messageView"




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/messageView",
    name: "messageView",
    component: messageView,
  },
  {
    path: "/UserAccount",
    name: "UserAccount",
    component: UserAccount,
  },
  {
    path: "/PasswordUser",
    name: "PasswordUser",
    component: PasswordUser,
  },
  {
    path: "/PasswordAdmin",
    name: "PasswordAdmin",
    component: PasswordAdmin,
  },
  {
    path: "/NavDrawer",
    name: "NavDrawer",
    component: NavDrawer,
  },
  {
    path: "/NavDrawerTwo",
    name: "NavDrawerTwo",
    component: NavDrawerTwo,
  },
  {
    path: "/StudentStatus",
    name: "StudentStatus",
    component: StudentStatus,
  },
  {
    path: "/AdminOne",
    name: "AdminOne",
    component: AdminOne,
  },
  {
    path: "/SelectionsView",
    name: "SelectionsView",
    component: SelectionsView,
  },
  {
    path: "/UpdateView",
    name: "UpdateView",
    component: UpdateView,
  },
  {
    path: "/StudentOne",
    name: "StudentOne",
    component: StudentOne,
  },
     
     
]

const router = new VueRouter({
  routes
})

export default router

