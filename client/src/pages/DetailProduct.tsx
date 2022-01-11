import React, { useState } from "react";
import {
  Header,
  Footer,
  DirectoryProduct,
  MainProduct,
  ShopProduct,
  ListProduct,
} from "../components/index";
const DetailProduct = () => {
  const [reload, setReload] = useState<boolean>(false);

  return (
    <>
      <Header reload={reload} />
      <DirectoryProduct />
      <MainProduct reload={reload} setReload={setReload} />
      <ShopProduct />
      <ListProduct />
      <Footer show={false} />
    </>
  );
};

export default DetailProduct;
