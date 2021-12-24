import React from "react";
import {
  Header,
  Footer,
  DirectoryProduct,
  MainProduct,
} from "../components/index";
const DetailProduct = () => {
  return (
    <>
      <Header />
      <DirectoryProduct />
      <MainProduct />
      <Footer show={false} />
    </>
  );
};

export default DetailProduct;
