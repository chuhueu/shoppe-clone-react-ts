import {
  HomePage,
  DetailProductPage,
  LoginPage,
  SignUpPage,
  SellerPage,
  ListOrderPage,
  TodoListPage,
} from "../pages/index";

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
