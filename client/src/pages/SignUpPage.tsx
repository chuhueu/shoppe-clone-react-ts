import React from "react";
import { Footer, HeaderAuth, SignUpAuth } from "../components";

const SignUpPage = () => {
  return (
    <>
      <HeaderAuth show={true} />
      <SignUpAuth />
      <Footer show={false} />
    </>
  );
};

export default SignUpPage;
