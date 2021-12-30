import {
  HomePage,
  DetailProductPage,
  LoginPage,
  SignUpPage,
} from "../pages/index";

const routesUser = [
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

export default routesUser;
