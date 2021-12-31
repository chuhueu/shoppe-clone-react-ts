import React from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/shopee-logo2.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleHeader: {
      backgroundColor: "#fff",
      boxShadow: "0 6px 6px rgb(0 0 0 / 6%)",
      width: "100%",
      height: "84px",
    },
    styleContainer: {
      maxWidth: "1200px",
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
    styleLink: {
      textDecoration: "none",
      color: "inherit",
    },
  })
);

const HeaderCart = () => {
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
          <Link to="/cart">
            <Typography variant="h1">Giỏ Hàng</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderCart;
