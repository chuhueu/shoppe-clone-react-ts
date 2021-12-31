import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import cartEmpty from "../../../assets/images/header/cart-empty.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleIcon: {
      color: "#fff",
      fontSize: "30px",
      cursor: "pointer",
      padding: "5px",
    },
    styleCart: {
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
        transition: "all 0.2s ease",
      },
      "&::after": {
        display: "none",
        content: "close-quote",
        position: "absolute",
        right: "0",
        top: "90%",
        width: "200%",
        height: "20px",
        transition: "all 0.3s ease",
      },
      "&:hover::before,&:hover::after": {
        display: "block",
      },
      "&:hover div": {
        opacity: "1",
        transform: "scale(1)",
      },
    },
    styleCartBox: {
      backgroundColor: "#fff",
      borderRadius: "3px",
      position: "absolute",
      right: "0",
      top: "calc(100% + 10px)",
      width: "400px",
      maxHeight: "400px",
      padding: "5px",
      zIndex: 9,
      boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
      transformOrigin: "calc(100% - 32px) top",
      opacity: "0",
      transform: "scale(0)",
      willChange: "opacity, transform",
      transition: "all 0.3s ease",
    },
    styleImgCartEmpty: {
      maxWidth: "100%",
    },
  })
);

const HeaderCart = () => {
  const classes = useStyles();
  return (
    <Box
      width="162px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box className={classes.styleCart}>
        <Link to="/cart">
          <ShoppingCartOutlined className={classes.styleIcon} />
        </Link>
        <Box className={classes.styleCartBox}>
          <img src={cartEmpty} alt="" className={classes.styleImgCartEmpty} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderCart;
