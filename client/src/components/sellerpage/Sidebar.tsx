import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  AccountBalanceWalletOutlined,
  BookOutlined,
  InsertChartOutlined,
  KeyboardArrowUp,
  LocalMallOutlined,
  LocalOfferOutlined,
  SettingsOutlined,
  StorefrontOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleSidebar: {
      height: "100vh",
      width: "220px",
      position: "sticky",
      overflowY: "scroll",
      background: "#fff",
      padding: "60px 10px 10px 10px",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    styleBox: { padding: "15px 0" },
    styleIconMenu: {
      fontSize: "20px",
      color: "rgba(0,0,0,0.56)",
      marginRight: "5px",
    },
    styleIconDrop: {
      fontSize: "18px",
      color: "rgba(0,0,0,0.66)",
      padding: 0,
      cursor: "pointer",
      transition: "transform 0.3s ease",
      "&:hover": { color: "#ee2d4d" },
      "&.active": {
        transform: "rotate(180deg)",
        transition: "transform 0.3s ease",
      },
    },
    styleList: {
      padding: "5px 0 0 25px",
      visibility: "hidden",
      height: 0,
      "&.active": {
        visibility: "visible",
        height: "auto",
      },
    },
    styleItem: {
      textDecoration: "none",
      fontSize: "14px",
      color: "rgba(0,0,0,.8)",
      padding: "5px 0",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#ee2d4d",
        transition: "color 0.3s ease",
      },
    },
  })
);

const Sidebar = () => {
  const classes = useStyles();

  const [toggle1, setToggle1] = useState<boolean>(true);
  const [toggle2, setToggle2] = useState<boolean>(true);
  const [toggle3, setToggle3] = useState<boolean>(true);
  const [toggle4, setToggle4] = useState<boolean>(true);
  const [toggle5, setToggle5] = useState<boolean>(true);
  const [toggle6, setToggle6] = useState<boolean>(true);
  const [toggle7, setToggle7] = useState<boolean>(true);

  return (
    <Box className={classes.styleSidebar}>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <BookOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Quản Lý Đơn Hàng</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle1 ? "active" : ""}`}
              onClick={() => setToggle1(!toggle1)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle1 ? "active" : ""}`}
        >
          <Link to="/seller/order" className={classes.styleItem}>
            Tất Cả
          </Link>
          <Link to="/" className={classes.styleItem}>
            Trả Hàng / Hoàn Tiền
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <LocalMallOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Quản Lý Sản Phẩm</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle2 ? "active" : ""}`}
              onClick={() => setToggle2(!toggle2)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle2 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            Tất Cả Sản Phẩm
          </Link>
          <Link to="/" className={classes.styleItem}>
            Thêm Sản Phẩm
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <LocalOfferOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Kênh Marketing</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle3 ? "active" : ""}`}
              onClick={() => setToggle3(!toggle3)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle3 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            Kênh Marketing
          </Link>
          <Link to="/" className={classes.styleItem}>
            Quảng Cáo Của Tôi
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <AccountBalanceWalletOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Tài Chính</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle4 ? "active" : ""}`}
              onClick={() => setToggle4(!toggle4)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle4 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            Doanh Thu
          </Link>
          <Link to="/" className={classes.styleItem}>
            Ví Shopee
          </Link>
          <Link to="/" className={classes.styleItem}>
            Tài Khoản Ngân Hàng
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <InsertChartOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Dữ Liệu</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle5 ? "active" : ""}`}
              onClick={() => setToggle5(!toggle5)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle5 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            Phân Tích Bán Hàng
          </Link>
          <Link to="/" className={classes.styleItem}>
            Hiệu Quả Hoạt Động
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <StorefrontOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Quản Lý Shop</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle6 ? "active" : ""}`}
              onClick={() => setToggle6(!toggle6)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle6 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            Đánh Giá Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            Hồ Sơ Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            Trang Trí Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            Danh Mục Của Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            Báo Cáo Của Tôi
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <SettingsOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Thiết Lập Shop</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle7 ? "active" : ""}`}
              onClick={() => setToggle7(!toggle7)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle7 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            Cài Đặt Vận Chuyển Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            Địa Chỉ
          </Link>
          <Link to="/" className={classes.styleItem}>
            Thiết Lập Cơ Bản
          </Link>
          <Link to="/" className={classes.styleItem}>
            Tài Khoản
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
