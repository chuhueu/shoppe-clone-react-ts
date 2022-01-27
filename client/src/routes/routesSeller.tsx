import {
  CartPage,
  HomePage,
  DetailProductPage,
  LoginPage,
  SignUpPage,
  SellerPage,
  ListOrderPage,
  TodoListPage,
  StorePage,
  ListProductPage,
  ShopPage,
  OrderPage,
  AccountPage,
  ProfilePage,
  AddressPage,
} from "../pages/index";
const Payment = () => <h1>this is the payment page</h1>;
const Password = () => <h1>this is the password page</h1>;

export const routesSeller = [
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
    path: "/product/category/:category/type/:type/min/:min/max/:max/rating/:rating/page/:pageNumber/sort/:sortOrder",
    exact: true,
    component: ListProductPage,
  },
  {
    path: "/shop/:id",
    exact: true,
    component: ShopPage,
  },
  {
    path: "/shop/:id/type/:type/page/:pageNumber/sort/:sortOrder",
    exact: true,
    component: ShopPage,
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
  {
    path: "/seller",
    component: SellerPage,
    routes: [
      {
        path: "/seller",
        exact: true,
        component: TodoListPage,
      },
      {
        path: "/seller/order",
        component: ListOrderPage,
      },
    ],
  },
];
