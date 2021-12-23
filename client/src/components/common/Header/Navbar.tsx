import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  NotificationsNoneOutlined,
  HelpOutlineOutlined,
  LanguageOutlined,
  KeyboardArrowDown,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import qrCode from "../../../assets/images/header/qr-code.png";
import appStore from "../../../assets/images/header/app-store.png";
import ggPlay from "../../../assets/images/header/gg-play.png";
import appGallery from "../../../assets/images/header/app-gallery.png";
import noNoti from "../../../assets/images/header/no-noti.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
    },
    styleWrapperLeft: {
      justifyContent: "space-between",
      alignItems: "center",
      "& > h2": {
        marginRight: "16px",
      },
      "& h2:not(:last-child)": {
        position: "relative",
        "&::after": {
          content: "close-quote",
          position: "absolute",
          height: "100%",
          width: "1px",
          backgroundColor: "#fff",
          opacity: "0.5",
          right: "-10px",
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
    },
    styleWrapperRight: {
      "& > h2": {
        marginLeft: "16px",
      },
      "& h2:last-child": {
        position: "relative",
        "&::after": {
          content: "close-quote",
          position: "absolute",
          height: "100%",
          width: "1px",
          backgroundColor: "#fff",
          opacity: "0.5",
          left: "-10px",
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
    },
    styleLink: {
      textDecoration: "none",
      color: "inherit",
      margin: "0 3px",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        opacity: "0.7",
      },
    },
    styleIcon: {
      fontSize: "20px",
      margin: "0 3px",
    },
    styleDownloadHover: {
      "&:hover div": {
        display: "block",
      },
      position: "relative",
      "&::before": {
        content: "close-quote",
        position: "absolute",
        height: "10px",
        width: "100%",
        right: "0",
        top: "100%",
      },
    },
    styleDownload: {
      display: "none",
      backgroundColor: "#fff",
      borderRadius: "3px",
      position: "absolute",
      left: "0",
      top: "calc(100% + 10px)",
      width: "200%",
      padding: "5px",
      zIndex: 9,
      transition: "all 0.5s ease",
      cursor: "pointer",
      boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
    },
    styleDownloadImg: {
      maxWidth: "45%",
      padding: "3px 0",
    },
    styleNotiHover: {
      position: "relative",
      "&::before": {
        display: "none",
        content: "close-quote",
        position: "absolute",
        right: "30%",
        top: "100%",
        borderColor: "transparent transparent #fff transparent",
        borderStyle: "solid",
        borderWidth: " 0 10px 10px 10px",
      },
      "&:hover::before": {
        display: "block",
      },
      "&:hover div": {
        opacity: "1",
        transform: "scale(1)",
      },
    },
    styleNoti: {
      backgroundColor: "#fff",
      borderRadius: "3px",
      position: "absolute",
      right: "0",
      top: "calc(100% + 10px)",
      width: "400px",
      height: "300px",
      padding: "5px",
      zIndex: 9,
      transformOrigin: "calc(100% - 32px) top",
      opacity: "0",
      transform: "scale(0)",
      willChange: "opacity, transform",
      transition: "all 0.3s ease",
      boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
    },
    styleNotiBox: {
      height: "100%",
      padding: "10px",
      // overflowY: "scroll",
    },
    styleButton: {
      textTransform: "unset",
      fontWeight: 400,
      backgroundColor: "rgba(0,0,0,0.04)",
      transition: "all 0.2s ease-in",
      "&:hover": {
        color: "#f53d2d",
        backgroundColor: "rgba(0,0,0,0.1)",
      },
    },
    styleLanguageHover: {
      position: "relative",
      "&::before": {
        display: "none",
        content: "close-quote",
        position: "absolute",
        right: "30%",
        top: "100%",
        borderColor: "transparent transparent #fff transparent",
        borderStyle: "solid",
        borderWidth: " 0 10px 10px 10px",
      },
      "&:hover::before": {
        display: "block",
      },
      "&:hover div": {
        opacity: "1",
        transform: "scale(1)",
      },
    },
    styleLanguage: {
      backgroundColor: "#fff",
      borderRadius: "3px",
      position: "absolute",
      right: "0",
      top: "calc(100% + 10px)",
      width: "200px",
      padding: "5px",
      zIndex: 9,
      transformOrigin: "calc(100% - 32px) top",
      opacity: "0",
      transform: "scale(0)",
      willChange: "opacity, transform",
      transition: "all 0.3s ease",
      boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
    },
    styleLanguageBox: {
      padding: "5px",
      cursor: "pointer",
      "&:hover h4": {
        color: "#f53d2d",
      },
    },
  })
);

const logoutSocial = () => {
  window.open("http://localhost:5000/auth/logout", "_self");
};

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box display="flex" className={classes.styleWrapper}>
      <Box
        display="flex"
        alignItems="center"
        className={classes.styleWrapperLeft}
      >
        <Typography variant="h2">
          <Link to="#" className={classes.styleLink}>
            Kênh Người Bán
          </Link>
        </Typography>
        <Typography variant="h2">
          <Link to="#" className={classes.styleLink}>
            Trở thành Người bán Shopee
          </Link>
        </Typography>
        <Typography variant="h2" className={classes.styleDownloadHover}>
          <Link to="#" className={classes.styleLink}>
            Tải ứng dụng
          </Link>
          <Box className={classes.styleDownload}>
            <img src={qrCode} alt="" style={{ maxWidth: "100%" }} />
            <Box
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <img src={appStore} alt="" className={classes.styleDownloadImg} />
              <img src={ggPlay} alt="" className={classes.styleDownloadImg} />
              <img
                src={appGallery}
                alt=""
                className={classes.styleDownloadImg}
              />
            </Box>
          </Box>
        </Typography>
        <Typography variant="h2">
          <Box display="flex" alignItems="center">
            Kết nối
            <Link to="#" className={classes.styleLink}>
              <Facebook className={classes.styleIcon} />
            </Link>
            <Link to="#" className={classes.styleLink}>
              <Instagram className={classes.styleIcon} />
            </Link>
          </Box>
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={classes.styleWrapperRight}
      >
        <Typography variant="h2" className={classes.styleNotiHover}>
          <Link to="#" className={classes.styleLink}>
            <NotificationsNoneOutlined className={classes.styleIcon} />
            Thông báo
          </Link>
          <Box
            className={classes.styleNoti}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.styleNotiBox}
            >
              <img src={noNoti} alt="" style={{ maxWidth: "40%" }} />
            </Box>
            <Box display="flex" alignItems="center" width="100%">
              <Button fullWidth className={classes.styleButton}>
                Đăng kí
              </Button>
              <Button fullWidth className={classes.styleButton}>
                Đăng nhập
              </Button>
            </Box>
          </Box>
        </Typography>
        <Typography variant="h2">
          <Link to="#" className={classes.styleLink}>
            <HelpOutlineOutlined className={classes.styleIcon} />
            Hỗ trợ
          </Link>
        </Typography>
        <Typography variant="h2" className={classes.styleLanguageHover}>
          <Link to="#" className={classes.styleLink}>
            <LanguageOutlined className={classes.styleIcon} />
            Tiếng việt
            <KeyboardArrowDown className={classes.styleIcon} />
          </Link>
          <Box className={classes.styleLanguage}>
            <Box className={classes.styleLanguageBox}>
              <Typography variant="h4">Tiếng Việt</Typography>
            </Box>
            <Box className={classes.styleLanguageBox}>
              <Typography variant="h4">English</Typography>
            </Box>
          </Box>
        </Typography>
        <Typography variant="h2">
          <Link to="/signup" className={classes.styleLink}>
            Đăng ký
          </Link>
        </Typography>
        <Typography variant="h2">
          <Link to="/login" className={classes.styleLink}>
            Đăng nhập
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
