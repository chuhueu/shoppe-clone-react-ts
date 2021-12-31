import {
  HomePage,
  DetailProductPage,
  LoginPage,
  SignUpPage,
  SellerPage,
} from "../pages/index";

const routesSeller = [
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
  {
    path: "/seller",
    component: SellerPage,
  },
];

export default routesSeller;
