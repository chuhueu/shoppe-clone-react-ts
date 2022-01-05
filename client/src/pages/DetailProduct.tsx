import React from "react";
import {
  Header,
  Footer,
  DirectoryProduct,
  MainProduct,
  ShopProduct,
} from "../components/index";
const DetailProduct = () => {
  return (
    <>
      <Header />
      <DirectoryProduct />
      <MainProduct />
      <ShopProduct />
      <Footer show={false} />
    </>
  );
};

export default DetailProduct;
