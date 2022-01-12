import React from "react";
import {
  NavbarCartPage,
  HeaderOrderPage,
  AddressOrderPage,
  ProductOrder,
  Footer,
} from "../components";
const OrderPage = () => {
  return (
    <>
      <NavbarCartPage />
      <HeaderOrderPage />
      <AddressOrderPage />
      <ProductOrder />
      <Footer show={false} />
    </>
  );
};

export default OrderPage;
