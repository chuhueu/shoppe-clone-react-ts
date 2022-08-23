import React from "react";
import {
  NavbarCartPage,
  HeaderOrderPage,
  AddressOrderPage,
  ProductOrderPage,
  VoucherOrderPage,
  TotalOrderPage,
  Footer,
} from "../components";
const OrderPage = () => {
  return (
    <>
      <NavbarCartPage />
      <HeaderOrderPage />
      <AddressOrderPage />
      <ProductOrderPage />
      <VoucherOrderPage />
      <TotalOrderPage />
      <Footer show={false} />
    </>
  );
};

export default OrderPage;
