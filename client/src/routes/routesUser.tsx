import {
  HomePage,
  DetailProductPage,
  LoginPage,
  SignUpPage,
  CartPage,
  StorePage,
  OrderPage,
  AccountPage,
  ProfilePage,
  AddressPage,
} from "../pages/index";
import ListProductPage from "../pages/ListProductPage";
const Payment = () => <h1>this is the payment page</h1>;
const Password = () => <h1>this is the password page</h1>;
export const routesUser = [
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
    path: "/product-list",
    component: ListProductPage,
  },
  {
    path: "/checkout",
    component: OrderPage,
  },
  {
    path: "/account",
    component: AccountPage,
    routes: [
      {
        path: "/account/profile",
        component: ProfilePage,
      },
      {
        path: "/account/address",
        component: AddressPage,
      },
      {
        path: "/account/payment",
        component: Payment,
      },
      {
        path: "/account/password",
        component: Password,
      },
    ],
  },
];
