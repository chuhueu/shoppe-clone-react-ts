import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
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

type options = {
  [key: string]: boolean;
};

const CartPage = () => {
  const checkOptions: options = {
    id1: false,
    id2: false,
    id3: false,
  };
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(checkOptions);

  const toggleCheck = (inputName: any) => {
    setChecked((prevState: any) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  const selectAll = (value: any) => {
    setCheckedAll(value);
    setChecked((prevState: any) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  return (
    <>
      <NavbarCartPage />
      <HeaderCartPage />
      <TopCart />
      <HeadingCart checkedAll={checkedAll} selectAll={selectAll} />
      <ItemCart idOption="id1" isChecked={checked} toggleCheck={toggleCheck} />
      <ItemCart idOption="id2" isChecked={checked} toggleCheck={toggleCheck} />
      <ItemCart idOption="id3" isChecked={checked} toggleCheck={toggleCheck} />
      <BottomCart checkedAll={checkedAll} selectAll={selectAll} />
      <Box height="40px"></Box>
      <ListProduct />
      <Footer show={false} />
    </>
  );
};

export default CartPage;
