import React from "react";
import {
  NavbarCartPage,
  HeaderOrderPage,
  AddressOrderPage,
  ProductOrder,
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
      <ProductOrder />
      <VoucherOrderPage />
      <TotalOrderPage />
      <Footer show={false} />
    </>
  );
};

export default OrderPage;
