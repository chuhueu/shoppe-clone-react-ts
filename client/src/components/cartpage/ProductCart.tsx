import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Checkbox, Grid, Typography } from "@material-ui/core";
import {
  Add,
  ArrowDropDown,
  ChevronRightSharp,
  Remove,
} from "@material-ui/icons";
import shipExtra from "../../assets/images/products/ship-extra.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQtyCartItem } from "../../redux/actions/cartAction";
import { addOrderItem, removeOrderItem } from "../../redux/actions/orderAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      border: "1px solid rgba(0,0,0,.09)",
    },
    styleTop: {
      backgroundColor: "#fff3ed",
      padding: "15px 10px",
    },
    styleComboSale: {
      marginRight: "8px",
      color: "#ee4d2d",
      padding: "1px 4px",
      lineHeight: "12px",
      fontSize: "10px",
      fontFamily: "Roboto",
      border: "1px solid #ee4d2d",
    },
    styleAdd: {
      marginLeft: "8px",
      color: "#ee4d2d",
    },
    styleGrid: { height: "100%" },
    styleLeft: {},
    styleRight: { height: "100%" },
    styleImg: { width: "80px", height: "80px", margin: "0 10px" },
    styleShipExtra: { height: "18px" },
    styleLink: {
      textDecoration: "none",
    },
    stylePrice: {
      fontFamily: "Roboto",
      color: "rgba(0,0,0,.87)",
      fontSize: "14px",
    },
    stylePriceOld: {
      color: "rgba(0,0,0,.54)",
      textDecoration: "line-through",
      margin: "0 5px",
    },
    stylePriceNew: { margin: "0 5px" },
    styleButtonQty: {
      outline: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid rgba(0,0,0,.09)",
      borderRadius: "2px",
      background: "transparent",
      color: "rgba(0,0,0,.8)",
      width: "32px",
      height: "32px",
      transition: "background-color .1s cubic-bezier(.4,0,.6,1)",
    },
    styleInputQty: {
      width: "50px",
      height: "31px",
      border: "1px solid rgba(0,0,0,.09)",
      borderLeft: 0,
      borderRight: 0,
      fontSize: "16px",
      textAlign: "center",
      cursor: "text",
      borderRadius: 0,
      "&:focus": {
        outline: "none",
      },
    },
    styleDelete: {
      cursor: "pointer",
      "&:hover h4": {
        color: "#ee4d2d",
        transition: "color .1s cubic-bezier(.4,0,.6,1)",
      },
    },
    styleSearchAs: {
      cursor: "pointer",
      "&:hover, &:hover h4": {
        color: "#ee4d2d",
        transition: "color .1s cubic-bezier(.4,0,.6,1)",
      },
    },
  })
);

interface Props {
  cartItem: any;
  idOption: number;
  checked: any;
  toggleCheck: any;
  deleteCartItem: any;
  reload?: boolean;
  setReload?: any;
}

const ProductCart = ({
  cartItem,
  idOption,
  checked,
  toggleCheck,
  deleteCartItem,
  reload,
  setReload,
}: Props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    if (checked) {
      dispatch(
        addOrderItem(
          cartItem._id,
          cartItem.product,
          cartItem.brand,
          cartItem.name,
          cartItem.image,
          cartItem.price,
          cartItem.discount,
          cartItem.quantity
        )
        //addOrderItem(cartItem)
      );
    } else {
      dispatch(removeOrderItem(cartItem._id));
    }
  }, [checked, dispatch, cartItem]);

  const toVND = (price: any) => {
    let vnd =
      typeof price === "undefined"
        ? 0
        : price.toLocaleString("vi-VN", {
            currency: "VND",
          });
    return vnd;
  };

  const priceDiscount = (price: any, discount: any) => {
    return toVND(price - price * (discount / 100));
  };

  const totalPrice = (price: any, discount: any, qty: any) => {
    return toVND((price - price * (discount / 100)) * qty);
  };
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const handleQuantity = (type: string) => {
    if (type === "dec") {
      quantity > 0 && setQuantity(quantity - 1);
      dispatch(updateQtyCartItem(cartItem._id, quantity - 1));
      //dispatch(updateQtyCartItem(cartItem._id, cartItem.quantity - 1));
    } else {
      setQuantity(quantity + 1);
      dispatch(updateQtyCartItem(cartItem._id, quantity + 1));
      //dispatch(updateQtyCartItem(cartItem._id, cartItem.quantity + 1));
    }
  };
  useEffect(() => {
    setQuantity(cartItem.quantity);
  }, [cartItem.quantity]);

  return (
    <Box className={classes.styleWrapper}>
      <Box display="flex" alignItems="center" className={classes.styleTop}>
        <Box className={classes.styleComboSale}>Combo khuyến mãi</Box>
        <Typography variant="h4">Mua thêm 2 sản phẩm (để giảm 1 %)</Typography>
        <Box display="flex" alignItems="center" className={classes.styleAdd}>
          <Typography variant="h5">Thêm</Typography>
          <ChevronRightSharp />
        </Box>
      </Box>
      <Box className={classes.styleGrid}>
        <Grid container>
          <Grid item lg={6} md={6} xs={12}>
            <Box className={classes.styleLeft}>
              <Grid container>
                <Grid item lg={8} md={12} xs={12}>
                  <Box display="flex" alignItems="center" overflow="hidden">
                    <Checkbox
                      checked={checked}
                      onChange={() => toggleCheck(idOption)}
                    />
                    <Link
                      to={{
                        pathname:
                          "/info/" + cartItem?.name + "/" + cartItem?._id,
                      }}
                    >
                      <img
                        src={cartItem.image}
                        alt=""
                        className={classes.styleImg}
                      />
                    </Link>
                    <Box maxWidth="220px">
                      <Link
                        to={{
                          pathname:
                            "/info/" + cartItem?.name + "/" + cartItem?._id,
                        }}
                        className={classes.styleLink}
                      >
                        <p className="custom-p-2">{cartItem.name}</p>
                      </Link>
                      <img
                        src={shipExtra}
                        alt=""
                        className={classes.styleShipExtra}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4} md={12} xs={12}>
                  <Box
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="center"
                    flexDirection="column"
                    height="100%"
                    padding="0 10px"
                  >
                    <Box display="flex" alignItems="center">
                      <Typography variant="h4">Phân Loại Hàng:</Typography>
                      <ArrowDropDown />
                    </Box>
                    <Typography variant="h4">[B-C7] Đen,12 Promax</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Grid container className={classes.styleRight}>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  className={classes.stylePrice}
                >
                  <p className={classes.stylePriceOld}>
                    ₫{toVND(cartItem.price)}
                  </p>
                  <p className={classes.stylePriceNew}>
                    ₫{priceDiscount(cartItem.price, cartItem.discount)}
                  </p>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                >
                  <button
                    className={classes.styleButtonQty}
                    onClick={() => handleQuantity("dec")}
                  >
                    <Remove />
                  </button>
                  <input
                    min="1"
                    type="text"
                    className={classes.styleInputQty}
                    //value={cartItem.quantity}
                    value={quantity}
                  />
                  <button
                    className={classes.styleButtonQty}
                    onClick={() => handleQuantity("inc")}
                  >
                    <Add />
                  </button>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                >
                  <Typography variant="h5">
                    ₫
                    {totalPrice(
                      cartItem.price,
                      cartItem.discount,
                      cartItem.quantity
                    )}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  height="100%"
                >
                  <Box className={classes.styleDelete}>
                    <Typography
                      variant="h4"
                      onClick={() => deleteCartItem(cartItem._id)}
                    >
                      Xóa
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    textAlign="center"
                    className={classes.styleSearchAs}
                  >
                    <Typography variant="h4">Tìm sản phẩm tương tự</Typography>
                    <ArrowDropDown />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductCart;
