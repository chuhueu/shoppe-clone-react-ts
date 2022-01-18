import React from "react";
import { Box, Button, Container, Grid, Hidden } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { orderItemsState } from "../../redux/reducers/orderReducer";
import { RootState } from "../../redux/store";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginTop: theme.spacing(2),
      background: "#fff",
      fontFamily: "Roboto",
    },
    stylePaymentMethod: {
      padding: "28px 30px",
      borderBottom: "1px solid rgba(0,0,0,.05)",
      "& div:nth-child(3)": {
        marginLeft: "60px",
      },
    },
    styleTotal: {
      background: "#fffefb",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 5%)",
      borderTop: "1px solid #f1f0ed",
      paddingTop: theme.spacing(2),
      color: "rgba(0,0,0,.54)",
      "& div": {
        paddingBottom: theme.spacing(2),
      },
    },
    styleButton: {
      background: "#ee4d2d",
      color: "#fff",
      border: "1px solid rgba(0,0,0,.09)",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
      borderRadius: "2px!important",
      width: "210px",
      height: "40px",
      "&:hover": {
        background: "#ee4d2d",
        opacity: "0.9",
        transition: "0.1s",
      },
    },
  })
);
const TotalOrderPage = () => {
  //styles
  const classes = useStyles();
  //state
  const order = useSelector<RootState, orderItemsState>(
    (state) => state.orderItems
  );
  const { orderItems } = order;
  const totalPrice = orderItems
    .reduce(
      (acc: any, item: any) =>
        acc +
        (item.price! - item.price! * (item.discount! / 100)) * item.quantity!,
      0
    )
    .toLocaleString("vi-VN", { currency: "VND" });
  const totalPriceAndShip = orderItems
    .reduce(
      (acc: any, item: any) =>
        acc +
        (item.price! - item.price! * (item.discount! / 100)) * item.quantity! +
        17000,
      0
    )
    .toLocaleString("vi-VN", { currency: "VND" });
  return (
    <Container className={classes.styleContainer}>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          className={classes.stylePaymentMethod}
        >
          <Box flex="1">Phương thức thanh toán</Box>
          <Box fontSize="14px">Thanh toán khi nhận hàng</Box>
          <Box color="#05a">THAY ĐỔI</Box>
        </Box>
        <Container className={classes.styleTotal}>
          <Grid container>
            <Hidden smDown>
              <Grid item sm={6} md={9}></Grid>
            </Hidden>
            <Grid item xs={12} sm={6} md={3}>
              <Grid container>
                <Grid item md={8}>
                  <Box>Tổng tiền hàng</Box>
                </Grid>
                <Grid item md={4}>
                  <Box display="flex" justifyContent="flex-end">
                    ₫{totalPrice}
                  </Box>
                </Grid>
                <Grid item md={8}>
                  <Box>Phí vận chuyển</Box>
                </Grid>
                <Grid item md={4}>
                  <Box display="flex" justifyContent="flex-end">
                    ₫17.000
                  </Box>
                </Grid>
                <Grid item md={8}>
                  <Box>Combo khuyến mãi</Box>
                </Grid>
                <Grid item md={4}>
                  <Box display="flex" justifyContent="flex-end">
                    -₫440
                  </Box>
                </Grid>
                <Grid item md={8}>
                  <Box>Tổng thanh toán:</Box>
                </Grid>
                <Grid item md={4}>
                  <Box
                    color="#ee4d2d"
                    fontSize="28px"
                    display="flex"
                    justifyContent="flex-end"
                  >
                    ₫{totalPriceAndShip}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="28px 30px"
        >
          <Box display="flex">
            <Box color="rgba(0,0,0,.54)" mr={1}>
              Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{" "}
            </Box>
            <Link
              to="https://shopee.vn/legaldoc/policies/"
              style={{ textDecoration: "none" }}
            >
              Điều khoản Shopee
            </Link>
          </Box>
          <Button variant="outlined" className={classes.styleButton}>
            Đặt Hàng
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TotalOrderPage;
