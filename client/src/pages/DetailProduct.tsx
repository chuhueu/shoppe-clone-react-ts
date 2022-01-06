import React from "react";
import {
  Header,
  Footer,
  DirectoryProduct,
  MainProduct,
  ShopProduct,
  ListProduct,
} from "../components/index";
const DetailProduct = () => {
  return (
    <>
      <Header />
      <DirectoryProduct />
      <MainProduct />
      <ShopProduct />
      <ListProduct />
      <Footer show={false} />
    </>
  );
};

export default DetailProduct;
