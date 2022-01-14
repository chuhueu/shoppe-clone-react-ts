import React from "react";
import {
  BannerLP,
  Footer,
  Header,
  ProductLP,
  ShopeeMallLP,
} from "../components";

const ListProductPage = () => {
  return (
    <>
      <Header />
      <BannerLP />
      <ShopeeMallLP />
      <ProductLP />
      <Footer show={false} />
    </>
  );
};

export default ListProductPage;
