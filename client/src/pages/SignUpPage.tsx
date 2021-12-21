import React from "react";
import { Footer, HeaderAuth, SignUpAuth } from "../components";

const SignUpPage = () => {
  return (
    <>
      <HeaderAuth show={true} />
      <SignUpAuth />
      <Footer />
    </>
  );
};

export default SignUpPage;
