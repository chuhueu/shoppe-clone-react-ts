import {
  HomePage,
  DetailProductPage,
  LoginPage,
  SignUpPage,
  CartPage,
  StorePage,
  OrderPage,
} from "../pages/index";
import ListProductPage from "../pages/ListProductPage";

const routesUser = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/info/:name/:infoID",
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
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/store/:name",
    component: StorePage,
  },
  {
    path: "/product/category/:category",
    exact: true,
    component: ListProductPage,
  },
  {
    path: "/product/category/:category/type/:type/min/:min/max/:max/rating/:rating/page/:pageNumber",
    exact: true,
    component: ListProductPage,
  },
  {
    path: "/checkout",
    component: OrderPage,
  },
];

export default routesUser;
