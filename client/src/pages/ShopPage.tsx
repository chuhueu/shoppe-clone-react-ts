import React from "react";
import {
  Footer,
  Header,
  ShopCollection,
  ShopInfo,
  ShopListProduct,
  ShopVoucher,
} from "../components";

const ShopPage = () => {
  return (
    <>
      <Header />
      <ShopInfo />
      <ShopVoucher />
      <ShopCollection />
      <ShopListProduct />
      <Footer show={false} />
    </>
  );
};

export default ShopPage;
