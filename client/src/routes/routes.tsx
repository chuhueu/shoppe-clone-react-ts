import {
  HomePage,
  DetailProductPage,
  LoginPage,
  SignUpPage,
} from "../pages/index";
//const user = JSON.parse(localStorage.getItem("user") || "");

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/info/:infoID",
    component: DetailProductPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignUpPage,
  },
];
