import { HomePage, DetailProduct } from "../pages/index";
export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/info/:infoID",
    component: DetailProduct,
  },
];
