import React from "react";
import {
  NavbarCartPage,
  HeaderCartPage,
  TopCart,
  Footer,
  HeadingCart,
  ItemCart,
  BottomCart,
  ListProduct,
} from "../components";

const CartPage = () => {
  return (
    <>
      <NavbarCartPage />
      <HeaderCartPage />
      <TopCart />
      <HeadingCart />
      <ItemCart />
      <BottomCart />
      <ListProduct />
      <Footer show={false} />
    </>
  );
};

export default CartPage;
