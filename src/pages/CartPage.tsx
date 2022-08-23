import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { cartState } from "../redux/reducers/cartReducer";
import { getCart } from "../redux/actions/cartAction";
import { removeCartItem } from "../redux/actions/cartAction";
import EmptyCart from "../components/cartpage/EmptyCart";

type options = {
  [key: number]: boolean;
};

const CartPage = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  const cart = useSelector<RootState, cartState>((state) => state.cart);
  const { cartInfo, isFetching, error } = cart;

  const checkOptions: options = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
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

  const deleteCartItem = (id: string) => {
    dispatch(removeCartItem(id));
    setReload(!reload);
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, reload]);

  return (
    <>
      <NavbarCartPage />
      <HeaderCartPage />
      {cartInfo?.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <TopCart />
          <HeadingCart checkedAll={checkedAll} selectAll={selectAll} />
          {isFetching ? (
            <CircularProgress />
          ) : (
            cartInfo?.map((cartItem: any, index: any) => {
              return (
                <ItemCart
                  cartItem={cartItem}
                  idOption={index}
                  checked={checked}
                  toggleCheck={toggleCheck}
                  deleteCartItem={deleteCartItem}
                  reload={reload}
                  setReload={setReload}
                />
              );
            })
          )}
          <BottomCart checkedAll={checkedAll} selectAll={selectAll} />
        </>
      )}
      <Box height="40px"></Box>
      <ListProduct />
      <Footer show={false} />
    </>
  );
};

export default CartPage;
