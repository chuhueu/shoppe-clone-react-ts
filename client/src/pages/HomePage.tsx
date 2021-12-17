import React from "react";
import {
  Banner,
  SearchTop,
  SearchTrend,
  ShopeeMall,
  Directory,
  FlashSale,
  ListProduct,
} from "../components/index";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Directory />
      <FlashSale />
      <ShopeeMall />
      <SearchTrend />
      <SearchTop />
      <ListProduct />
    </>
  );
};

export default HomePage;
