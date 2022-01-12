import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  MonetizationOnOutlined,
  HelpOutlineOutlined,
} from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import voucherIcon from "../../assets/images/icons/cheap.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { orderItemsState } from "../../redux/reducers/orderReducer";
import { cartState } from "../../redux/reducers/cartReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      backgroundColor: "#fff",
      marginTop: "20px",
      "&.active": {
        position: "fixed",
        zIndex: 2,
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        boxShadow: "0 0 10px 5px rgba(0,0,0,.12)",
      },
    },
    styleTop: {
      borderBottom: "1px solid rgba(0,0,0,.09)",
      padding: "12px 0",
    },
    styleCenter: {
      borderBottom: "1px solid rgba(0,0,0,.09)",
      padding: "10px 0",
    },
    styleBottom: { padding: "10px 0" },
    styleIcon: {
      width: "24px",
    },
    styleLink: { textDecoration: "none" },
    styleIcon1: { fontSize: "14px", color: "rgb(255,166,0)", margin: "0 3px" },
    styleIcon2: { fontSize: "14px", color: "rgba(0,0,0,.54)", margin: "0 3px" },
    styleAction: { cursor: "pointer", marginRight: "10px" },
    styleTotalPrice: { margin: "0 8px" },
    styleButton: {
      minWidth: "13.125rem",
      backgroundColor: "#f05d40",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#f76e53",
      },
    },
  })
);

interface Props {
  checkedAll: boolean;
  selectAll: any;
}

const BottomCart = ({ checkedAll, selectAll }: Props) => {
  const classes = useStyles();

  const [onScroll, setOnScroll] = useState(true);

  const numLocation = useRef<HTMLDivElement>(null);
  let number1: number = numLocation.current?.getBoundingClientRect()
    .y as number;
  let number2: number = numLocation.current?.getBoundingClientRect()
    .height as number;
  let number = number1 + number2 * 2;

  window.onscroll = () => {
    setOnScroll(window.pageYOffset < number ? true : false);
    return () => (window.onscroll = null);
  };

  const cart = useSelector<RootState, cartState>((state) => state.cart);
  const { cartInfo } = cart;

  const order = useSelector<RootState, orderItemsState>(
    (state) => state.orderItems
  );
  const { orderItems } = order;

  const totalPrice = orderItems
    .reduce(
      (acc, item) =>
        acc +
        (item.price! - item.price! * (item.discount! / 100)) * item.quantity!,
      0
    )
    .toLocaleString("vi-VN", { currency: "VND" });

  return (
    <Container
      ref={numLocation}
      className={`${classes.styleContainer} ${onScroll ? "active" : ""}`}
    >
      <Box className={classes.styleTop}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img src={voucherIcon} alt="" className={classes.styleIcon} />
                <Typography variant="h6">Shopee Voucher</Typography>
              </Box>
              <Link to="/" className={classes.styleLink}>
                <Typography variant="h5">Áp Dụng Mã Giảm Giá Ngay!</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.styleCenter}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <Checkbox disabled />
                <Box display="flex" alignItems="center" padding="0 3px">
                  <MonetizationOnOutlined className={classes.styleIcon1} />
                  <Typography variant="body1">Shopee Xu</Typography>
                </Box>
                <Box display="flex" alignItems="center" padding="0 3px">
                  <Typography variant="body2">Bạn chưa có Shopee Xu</Typography>
                  <HelpOutlineOutlined className={classes.styleIcon2} />
                </Box>
              </Box>
              <Typography variant="body2">-₫0</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.styleBottom}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box display="flex" alignItems="center" height="100%">
              <Checkbox
                checked={checkedAll}
                onChange={(e) => selectAll(e.target.checked)}
              />
              <Box className={classes.styleAction}>
                <Typography variant="h6">
                  Chọn Tất Cả ({cartInfo?.length})
                </Typography>
              </Box>
              <Box className={classes.styleAction}>
                <Typography variant="h6">Xóa</Typography>
              </Box>
              <Box className={classes.styleAction}>
                <Typography variant="h5">Lưu vào mục Đã thích</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              height="100%"
            >
              <Typography variant="h6">
                Tổng thanh toán ({orderItems.length} Sản phẩm):
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.styleTotalPrice}
              >
                ₫{totalPrice}
              </Typography>
              <Button className={classes.styleButton}>Mua Hàng</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BottomCart;
