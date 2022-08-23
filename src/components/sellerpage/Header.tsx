import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/shopee-logo2.png";
import { Menu, NotificationsNone } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: "5px",
    },
    styleHeader: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "#fff",
      boxShadow: "0 6px 6px rgb(0 0 0 / 6%)",
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,.09)",
      zIndex: 99,
    },
    styleContainer: {
      maxWidth: "1280px",
      padding: "10px 24px",
      margin: "0 auto",
      height: "100%",
      [theme.breakpoints.down("md")]: {
        padding: "0 16px",
      },
    },
    styleLogo: {
      height: "36px",
      marginRight: "5px",
    },
    styleLinkHeader: {
      textDecoration: "none",
    },
    styleUser: {
      paddingRight: "15px",
      borderRight: "1px solid rgba(0,0,0,.1)",
      cursor: "pointer",
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
    styleDrop: {
      backgroundColor: "#fff",
      borderRadius: "3px",
      position: "absolute",
      right: "0",
      top: "calc(100% + 15px)",
      width: "200px",
      padding: "5px",
      transformOrigin: "calc(100% - 32px) top",
      opacity: "0",
      transform: "scale(0)",
      willChange: "opacity, transform",
      transition: "all 0.3s ease",
      boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
    },
    styleDropBox: {
      padding: "5px",
      cursor: "pointer",
      "&:hover h4": {
        color: "#f53d2d",
      },
    },
    styleIcon: {
      margin: "0 10px",
      cursor: "pointer",
    },
    styleButtonHelp: {
      textDecoration: "none",
      fontSize: "14px",
      color: "rgba(0,0,0,.54)",
      padding: "5px 10px",
      borderRadius: "20px",
      border: "1px solid rgba(0,0,0,.34)",
      marginLeft: "10px",
    },
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.styleHeader}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={classes.styleContainer}
      >
        <Box display="flex" alignItems="center">
          <Link to="/">
            <img src={logo} alt="" className={classes.styleLogo} />
          </Link>
          <Link to="/cart" className={classes.styleLinkHeader}>
            <Typography variant="h1">Kênh Người Bán</Typography>
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" className={classes.styleUser}>
            <Avatar
              className={classes.small}
              src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
            ></Avatar>
            <Typography variant="h4">abc</Typography>
            <Box className={classes.styleDrop}>
              <Box className={classes.styleDropBox}>
                <Link to="/account/profile" style={{ textDecoration: "none" }}>
                  <Typography variant="h4">Tài Khoản Của Tôi</Typography>
                </Link>
              </Box>
              <Box className={classes.styleDropBox}>
                <Typography variant="h4">Đăng Xuất</Typography>
              </Box>
            </Box>
          </Box>
          <Menu className={classes.styleIcon} />
          <NotificationsNone className={classes.styleIcon} />
          <Link to="/seller" className={classes.styleButtonHelp}>
            Trung Tâm Trợ Giúp
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
