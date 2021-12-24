import React from "react";
import { Footer, HeaderAuth, LoginAuth } from "../components";

const LoginPage = () => {
  return (
    <>
      <HeaderAuth show={false} />
      <LoginAuth />
      <Footer show={false} />
    </>
  );
};

export default LoginPage;
