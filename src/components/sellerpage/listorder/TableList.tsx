import React from "react";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  FindInPageOutlined,
  KeyboardArrowDown,
  Message,
  PrintOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import product1 from "../../../assets/images/products/product-1.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: "5px",
    },
    styleWrapper: { padding: "20px 0" },
    styleTop: {},
    styleSort: {},
    styleOption: {
      border: "1px solid rgba(0,0,0,.26)",
      borderRadius: "5px",
      padding: "4px 7px",
      marginLeft: "3px",
    },
    styleOptionText: {
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      maxWidth: "100px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    styleOptionIcon: {
      fontSize: "18px",
      color: "rgba(0,0,0,.87)",
      cursor: "pointer",
    },
    stylePrint: {
      backgroundColor: "#ee4d2d",
      borderRadius: "5px",
      padding: "5px 10px",
      cursor: "pointer",
    },
    stylePrintIcon: { fontSize: "20px", color: "#fff" },
    stylePrintText: { fontSize: "14px", color: "#fff", marginLeft: "3px" },
    styleTable: { marginTop: "20px" },
    styleHeading: {
      padding: "15px 10px",
      backgroundColor: "#f5f5f5",
      border: "1px solid rgba(0,0,0,.1)",
      borderRadius: "5px",
      margin: "5px 0",
    },
    styleHeadingText: { fontSize: "14px", color: "rgba(0,0,0,.64)" },
    styleItem: {
      margin: "10px 0",
      border: "1px solid rgba(0,0,0,.1)",
      borderRadius: "5px",
    },
    styleItemHeading: {
      borderBottom: "1px solid rgba(0,0,0,.1)",
      backgroundColor: "#f5f5f5",
      padding: "10px",
    },
    styleName: { fontSize: "14px", color: "rgba(0,0,0,.67)", margin: "0 3px" },
    styleNameIcon: { fontSize: "18px", color: "#ee4d2d", margin: "0 3px" },
    styleInfo: {
      padding: "20px",
    },
    styleProductImg: { width: "50px", height: "50px", objectFit: "cover" },
    styleProductName: {
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      padding: "3px 0",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    styleProductOption: {
      fontSize: "12px",
      color: "rgba(0,0,0,.53)",
      padding: "3px 0",
    },
    styleProductQty: {
      fontSize: "16px",
      color: "rgba(0,0,0,.87)",
      paddingRight: "15px",
    },
    styleText1: { fontSize: "14px", color: "rgba(0,0,0,.87)" },
    styleText2: {
      fontSize: "12px",
      color: "rgba(0,0,0,.53)",
      padding: "3px 0",
    },
    styleText3: { fontSize: "14px", color: "rgba(0,0,0,.87)", fontWeight: 500 },
    styleWatch: {
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
    },
    styleWatchIcon: { fontSize: "18px" },
  })
);

const TableList = () => {
  const classes = useStyles();

  return (
    <Box className={classes.styleWrapper}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={classes.styleTop}
      >
        <Typography variant="subtitle2">Đơn hàng</Typography>
        <Box display="flex" alignItems="center" className={classes.styleSort}>
          <Box margin="0 5px" display="flex" alignItems="center">
            <Typography variant="h4">Chọn hàng giao tại bưu cục:</Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleOption}
            >
              <p className={classes.styleOptionText}>Tất cả đơn hàng</p>
              <KeyboardArrowDown className={classes.styleOptionIcon} />
            </Box>
          </Box>
          <Box margin="0 5px" display="flex" alignItems="center">
            <Typography variant="h4">Sắp xếp theo:</Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleOption}
            >
              <p className={classes.styleOptionText}>Ngày đặt</p>
              <KeyboardArrowDown className={classes.styleOptionIcon} />
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" className={classes.stylePrint}>
          <PrintOutlined className={classes.stylePrintIcon} />
          <p className={classes.stylePrintText}>
            Chọn ngày/In phiếu giao hàng loạt
          </p>
        </Box>
      </Box>
      <Box className={classes.styleTable}>
        <Box className={classes.styleHeading}>
          <Grid container>
            <Grid item lg={4}>
              <p className={classes.styleHeadingText}>Sản phẩm</p>
            </Grid>
            <Grid item lg={8}>
              <Grid container>
                <Grid item lg={2}>
                  <p className={classes.styleHeadingText}>Tổng Đơn hàng</p>
                </Grid>
                <Grid item lg={2}>
                  <p className={classes.styleHeadingText}>Trạng Thái</p>
                </Grid>
                <Grid item lg={2}>
                  <p className={classes.styleHeadingText}>Đếm ngược</p>
                </Grid>
                <Grid item lg={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    className={classes.styleHeadingText}
                  >
                    Vận chuyển
                    <KeyboardArrowDown className={classes.styleOptionIcon} />
                  </Box>
                </Grid>
                <Grid item lg={4}>
                  <Box textAlign="center" className={classes.styleHeadingText}>
                    Thao tác
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.styleItem}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.styleItemHeading}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                className={classes.small}
                src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
              />
              <p className={classes.styleName}>abcabc2022</p>
              <Message className={classes.styleNameIcon} />
            </Box>
            <p className={classes.styleName}>ID Đơn hàng: 202212345AB</p>
          </Box>
          <Grid container className={classes.styleInfo}>
            <Grid item lg={4}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <img
                    src={product1}
                    alt=""
                    className={classes.styleProductImg}
                  />
                  <Box marginLeft="10px">
                    <p className={classes.styleProductName}>
                      Ốp lưng Iphone đẳng cấp
                    </p>
                    <p className={classes.styleProductOption}>
                      Phân loại: 13 ProMax
                    </p>
                  </Box>
                </Box>
                <p className={classes.styleProductQty}>x1</p>
              </Box>
            </Grid>
            <Grid item lg={8}>
              <Grid container spacing={2}>
                <Grid item lg={2}>
                  <p className={classes.styleText1}>₫70.000</p>
                  <p className={classes.styleText2}>Thanh toán khi nhận hàng</p>
                </Grid>
                <Grid item lg={4}>
                  <p className={classes.styleText3}>Đã giao</p>
                  <p className={classes.styleText2}>
                    Đang đợi Người mua xác nhận đã nhận hàng muộn nhất vào
                    01-01-2022
                  </p>
                </Grid>
                <Grid item lg={2}>
                  <p className={classes.styleText1}>J&T Express</p>
                </Grid>
                <Grid item lg={4}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Link to="/" className={classes.styleWatch}>
                      <FindInPageOutlined className={classes.styleWatchIcon} />
                      Xem chi tiết
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.styleItem}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.styleItemHeading}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                className={classes.small}
                src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
              />
              <p className={classes.styleName}>abcabc2022</p>
              <Message className={classes.styleNameIcon} />
            </Box>
            <p className={classes.styleName}>ID Đơn hàng: 202212345AB</p>
          </Box>
          <Grid container className={classes.styleInfo}>
            <Grid item lg={4}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <img
                    src={product1}
                    alt=""
                    className={classes.styleProductImg}
                  />
                  <Box marginLeft="10px">
                    <p className={classes.styleProductName}>
                      Ốp lưng Iphone đẳng cấp
                    </p>
                    <p className={classes.styleProductOption}>
                      Phân loại: 13 ProMax
                    </p>
                  </Box>
                </Box>
                <p className={classes.styleProductQty}>x1</p>
              </Box>
            </Grid>
            <Grid item lg={8}>
              <Grid container spacing={2}>
                <Grid item lg={2}>
                  <p className={classes.styleText1}>₫70.000</p>
                  <p className={classes.styleText2}>Thanh toán khi nhận hàng</p>
                </Grid>
                <Grid item lg={4}>
                  <p className={classes.styleText3}>Đã giao</p>
                  <p className={classes.styleText2}>
                    Đang đợi Người mua xác nhận đã nhận hàng muộn nhất vào
                    01-01-2022
                  </p>
                </Grid>
                <Grid item lg={2}>
                  <p className={classes.styleText1}>J&T Express</p>
                </Grid>
                <Grid item lg={4}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Link to="/" className={classes.styleWatch}>
                      <FindInPageOutlined className={classes.styleWatchIcon} />
                      Xem chi tiết
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.styleItem}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.styleItemHeading}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                className={classes.small}
                src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
              />
              <p className={classes.styleName}>abcabc2022</p>
              <Message className={classes.styleNameIcon} />
            </Box>
            <p className={classes.styleName}>ID Đơn hàng: 202212345AB</p>
          </Box>
          <Grid container className={classes.styleInfo}>
            <Grid item lg={4}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <img
                    src={product1}
                    alt=""
                    className={classes.styleProductImg}
                  />
                  <Box marginLeft="10px">
                    <p className={classes.styleProductName}>
                      Ốp lưng Iphone đẳng cấp
                    </p>
                    <p className={classes.styleProductOption}>
                      Phân loại: 13 ProMax
                    </p>
                  </Box>
                </Box>
                <p className={classes.styleProductQty}>x1</p>
              </Box>
            </Grid>
            <Grid item lg={8}>
              <Grid container spacing={2}>
                <Grid item lg={2}>
                  <p className={classes.styleText1}>₫70.000</p>
                  <p className={classes.styleText2}>Thanh toán khi nhận hàng</p>
                </Grid>
                <Grid item lg={4}>
                  <p className={classes.styleText3}>Đã giao</p>
                  <p className={classes.styleText2}>
                    Đang đợi Người mua xác nhận đã nhận hàng muộn nhất vào
                    01-01-2022
                  </p>
                </Grid>
                <Grid item lg={2}>
                  <p className={classes.styleText1}>J&T Express</p>
                </Grid>
                <Grid item lg={4}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Link to="/" className={classes.styleWatch}>
                      <FindInPageOutlined className={classes.styleWatchIcon} />
                      Xem chi tiết
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TableList;
