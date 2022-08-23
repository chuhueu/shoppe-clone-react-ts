import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container, Button, Grid } from "@material-ui/core";
import { Edit, PersonOutlineOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      display: "block",
      width: "180px",
      flexShrink: 0,
      fontFamily: "Roboto",
    },
    styleAvatar: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    },
    styleUsername: {
      paddingLeft: "15px",
      overflow: "hidden",
    },
    styleSideBar: {
      "& img": {
        height: "1.25rem",
      },
      "& a": {
        textDecoration: "none",
        color: "rgba(0,0,0,.87)",
        marginBottom: "20px",
      },
      "& a:hover": {
        color: "#ee4d2d !important",
      },
    },
    styleSpan: {
      fontWeight: 500,
      color: "rgba(0,0,0,.65)",
      "&:hover": {
        color: "#ee4d2d !important",
      },
    },
  })
);
const SideBarAccount = () => {
  //styles
  const classes = useStyles();
  //state
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
  return (
    <Box className={classes.styleBox}>
      <Box display="flex" padding="15px 0" borderBottom="1px solid #efefef">
        <img src={userInfo.avatar} alt="" className={classes.styleAvatar} />
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className={classes.styleUsername}
        >
          <Box overflow="hidden" color="#333" fontWeight="600">
            {userInfo.username}
          </Box>
          <Box display="flex" alignItems="center" color="#888">
            <Edit style={{ height: "17px" }} />
            Sửa Hồ Sơ
          </Box>
        </Box>
      </Box>
      <Box mt={3} className={classes.styleSideBar}>
        <Link to="/account">
          <Box display="flex" alignItems="center">
            <img
              src="https://cf.shopee.vn/file/12bc9caf9344342250a67bc34cde32c3"
              alt=""
            />
            <Box ml={2} component="span" fontWeight="500">
              Tết Sale
            </Box>
          </Box>
        </Link>
        <Box mt={2}>
          <Link to="/account/profile">
            <Box display="flex" alignItems="center">
              <img
                src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
                alt=""
              />
              <Box ml={2} component="span" fontWeight="500">
                Tài Khoản của tôi
              </Box>
            </Box>
          </Link>
          <Box
            display="flex"
            flexDirection="column"
            padding="10px 0px 0px 36px"
          >
            <Link to="/account/profile">
              <Box component="span" className={classes.styleSpan}>
                Hồ Sơ
              </Box>
            </Link>
            <Link to="/account/payment">
              <Box component="span" className={classes.styleSpan}>
                Ngân Hàng
              </Box>
            </Link>
            <Link to="/account/address">
              <Box component="span" className={classes.styleSpan}>
                Địa Chỉ
              </Box>
            </Link>
            <Link to="/account/password">
              <Box component="span" className={classes.styleSpan}>
                Mật Khẩu
              </Box>
            </Link>
          </Box>
        </Box>

        <Link to="/account">
          <Box display="flex" alignItems="center">
            <img
              src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078"
              alt=""
            />
            <Box ml={2} component="span" fontWeight="500">
              Đơn Mua
            </Box>
          </Box>
        </Link>

        <Link to="/account">
          <Box mt={2} display="flex" alignItems="center">
            <img
              src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c"
              alt=""
            />
            <Box ml={2} component="span" fontWeight="500">
              Thông Báo
            </Box>
          </Box>
        </Link>

        <Link to="/account">
          <Box mt={2} display="flex" alignItems="center">
            <img
              src="https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748"
              alt=""
            />
            <Box ml={2} component="span" fontWeight="500">
              Kho Voucher
            </Box>
          </Box>
        </Link>

        <Link to="/account">
          <Box mt={2} display="flex" alignItems="center">
            <img
              src="https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784"
              alt=""
            />
            <Box ml={2} component="span" fontWeight="500">
              Shopee Xu
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default SideBarAccount;
