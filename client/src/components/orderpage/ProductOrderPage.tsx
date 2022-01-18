import React from "react";
import { Box, Typography, Container, Grid, Hidden } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Forum, ReceiptOutlined } from "@material-ui/icons";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      boxShadow: "0 1px 0px 0 rgb(0 0 0 / 5%)",
      background: "#fff",
      fontFamily: "Roboto",
    },
    styleBox: {
      padding: "24px 30px 0;",
      minHeight: "400px",
    },
    styleHidden: {
      color: "#bbb",
      boxShadow: "0 1px 0px 0 rgb(0 0 0 / 9%)",
    },
    styleProduct: {
      borderBottom: "1px dashed rgba(0,0,0,.09)",
    },
    styleGrid: {
      display: "flex",
      alignItems: "center",
      padding: "15px 0",
      "& span": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        [theme.breakpoints.down("sm")]: {
          overflow: "unset",
          whiteSpace: "unset",
        },
      },
    },
    styleShop: {
      "& div": {
        marginRight: theme.spacing(1),
      },
      "& div:nth-child(1)": {
        backgroundColor: "#ee4d2d",
        color: "#fff",
        padding: "3px",
        fontSize: "13px",
        fontWeight: 500,
        borderRadius: "3px",
      },
      "& div:nth-child(2)": {
        fontFamily:
          "HelveticaNeueMedium,HelveticaNeue-Medium,Helvetica Neue Medium,Helvetica Neue,Arial Bold,arial,sans-serif",
      },
      "& div:nth-child(3)": {
        color: "#00bfa5",
        marginLeft: "10px",
        borderLeft: "1px solid rgba(0,0,0,.09)",
        "& svg": {
          padding: "0 10px",
        },
      },
    },
    styleImg: { width: "40px", height: "40px", margin: "0 10px" },
    styleVoucher: {
      borderBottom: "1px dashed rgba(0,0,0,.09)",
      paddingBottom: "10px",
      "& svg": {
        marginRight: "4px",
        width: "22px",
        height: "100%",
        color: "#ee4d2d",
      },
    },
    styleMess: {
      backgroundColor: "#fafdff",
      borderBottom: "1px dashed rgba(0,0,0,.09)",
      padding: "16px 10px",
      "& input": {
        outline: "none",
        padding: "4px 12px",
        width: "80%",
        background: "#fff",
        alignItems: "center",
        boxShadow: "inset 0 2px 0 0 rgb(0 0 0 / 2%)",
        borderRadius: "2px",
        boxSizing: "border-box",
        border: "1px solid rgba(0,0,0,.14)",
        transition:
          "border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out",
        height: "40px",
      },
    },
    styleAddress: {
      "& div:nth-child(1)": {
        marginBottom: "5px",
        fontSize: "16px",
        fontWeight: 500,
      },
      "& div:nth-child(2)": {
        marginBottom: "5px",
        fontSize: "12px",
        fontWeight: 400,
      },
      "& div:nth-child(3)": {
        fontSize: "12px",
        color: "#888",
      },
    },
    styleTotal: {
      backgroundColor: "#fafdff",
      height: "73px",
      "& div:nth-child(2)": {
        marginLeft: "20px",
        fontSize: "20px",
        color: "#ee4d2d",
      },
    },
  })
);
interface orderItem {
  _id?: string;
  name?: string;
  image?: string;
  brand?: string;
  price?: number;
  quantity?: number;
  discount?: number;
}
const ProductOrder = () => {
  //style
  const classes = useStyles();
  //state
  const index = localStorage.getItem("orderItems")
    ? JSON.parse(localStorage.getItem("orderItems")!)
    : null;
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

  const totalPrice = (price: any, discount: any, qty: any, ship: any) => {
    return toVND((price - price * (discount / 100)) * qty + ship);
  };
  return (
    <Container className={classes.styleContainer}>
      <Box mt={2} className={classes.styleBox}>
        <Box className={classes.styleHidden}>
          <Grid container spacing={5}>
            <Hidden smDown>
              <Grid item md={8}>
                <Box fontSize="18px" color="#222">
                  Sản phẩm
                </Box>
              </Grid>
              <Grid item md={1}>
                <Box>Đơn giá</Box>
              </Grid>
              <Grid item md={1}>
                <Box fontSize="15px">Số lượng</Box>
              </Grid>
              <Grid item md={2}>
                <Box display="flex" justifyContent="flex-end">
                  Thành tiền
                </Box>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
        {index.orderItems?.map((item: orderItem) => {
          return (
            <>
              <Box className={classes.styleProduct}>
                <Grid container spacing={5} className={classes.styleGrid}>
                  <Grid item md={12}>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.styleShop}
                    >
                      <Box>Yêu thích</Box>
                      <Box>CHANH XẢ SHOP - ỐP CHỐNG SỐC</Box>
                      <Box display="flex" alignItems="center">
                        <Forum /> Chat ngay
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={5}>
                    <Box display="flex" alignItems="center">
                      <img
                        src={item.image}
                        alt=""
                        className={classes.styleImg}
                      />
                      <Box component="span">{item?.name}</Box>
                    </Box>
                  </Grid>
                  <Grid item sm={3} md={3}>
                    <Box display="flex" alignItems="center">
                      <Box display="flex" alignItems="center">
                        <Typography variant="h4" style={{ color: "#bbb" }}>
                          Loại: TIỀN VÀO NHƯ NƯỚC
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={3} md={1}>
                    <Box textAlign="center">
                      ₫{priceDiscount(item.price, item.discount)}
                    </Box>
                  </Grid>
                  <Grid item sm={3} md={1}>
                    <Box textAlign="center">{item.quantity}</Box>
                  </Grid>
                  <Grid item sm={3} md={2}>
                    <Box display="flex" justifyContent="flex-end">
                      ₫{totalPrice(item.price, item.discount, item.quantity, 0)}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2} className={classes.styleVoucher}>
                <Box display="flex" alignItems="center">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    flex="6"
                  >
                    <ReceiptOutlined />
                    <Box>Voucher của Shop</Box>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    flex="4"
                    color="#05a"
                  >
                    Chọn Voucher
                  </Box>
                </Box>
              </Box>
              <Box className={classes.styleMess}>
                <Grid container style={{ alignItems: "center" }}>
                  <Grid item xs={12} sm={6} md={5}>
                    <Box
                      display="flex"
                      alignItems="center"
                      borderRight="1px dashed rgba(0,0,0,.09)"
                    >
                      <Box mr={2}>Lời nhắn: </Box>
                      <input type="text" placeholder="Lưu ý cho Người bán..." />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={7}>
                    <Grid
                      container
                      style={{ alignItems: "center", marginLeft: "10px" }}
                    >
                      <Grid item md={3}>
                        <Box color="#00bfa5">Đơn vị vận chuyển: </Box>
                      </Grid>
                      <Grid item md={5}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          className={classes.styleAddress}
                        >
                          <Box>Vận chuyển nhanh quốc tế</Box>
                          <Box>Standard Express</Box>
                          <Box>Nhận hàng vào 25 Th01 - 15 Th02</Box>
                        </Box>
                      </Grid>
                      <Grid item md={2}>
                        <Box color="#05a">THAY ĐỔI</Box>
                      </Grid>
                      <Grid item md={2}>
                        <Box display="flex" justifyContent="flex-end">
                          ₫17.000
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                className={classes.styleTotal}
              >
                <Box color="#929292">
                  Tổng số tiền ({item.quantity} sản phẩm):
                </Box>
                <Box>
                  ₫{totalPrice(item.price, item.discount, item.quantity, 17000)}
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </Container>
  );
};

export default ProductOrder;
