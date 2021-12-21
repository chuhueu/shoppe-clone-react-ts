import { HomePage, LoginPage, SignUpPage } from "../pages/index";
export const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
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
