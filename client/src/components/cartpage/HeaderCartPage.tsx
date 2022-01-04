import React from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/shopee-logo2.png";
import SearchBoxCartPage from "./SearchBoxCartPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleHeader: {
      backgroundColor: "#fff",
      boxShadow: "0 6px 6px rgb(0 0 0 / 6%)",
      width: "100%",
      height: "84px",
      borderBottom: "1px solid rgba(0,0,0,.09)",
    },
    styleContainer: {
      maxWidth: "1280px",
      padding: "0 24px",
      margin: "0 auto",
      height: "100%",
      [theme.breakpoints.down("md")]: {
        padding: "0 16px",
      },
    },
    styleLogo: {
      height: "42px",
      marginRight: "10px",
    },
    styleLinkHeader: {
      textDecoration: "none",
      borderLeft: "0.0625rem solid #ee4d2d",
      paddingLeft: "0.9375rem",
      marginLeft: "0.937rem",
    },
  })
);

const HeaderCartPage = () => {
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
            <Typography variant="h1">Giỏ Hàng</Typography>
          </Link>
        </Box>
        <SearchBoxCartPage />
      </Box>
    </Box>
  );
};

export default HeaderCartPage;
