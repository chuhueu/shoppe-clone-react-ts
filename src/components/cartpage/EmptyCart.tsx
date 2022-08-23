import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import emptyCartImg from "../../assets/images/cart/empty-cart.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleImg: {
      width: "200px",
    },
    styleButton: {
      textDecoration: "none",
      fontFamily: "Roboto",
      fontSize: "16px",
      color: "#fff",
      padding: "10px 25px",
      backgroundColor: "#ee4d2d",
      borderRadius: "2px",
      marginTop: "20px",
      "&:hover": {
        backgroundColor: "#e96b51",
      },
    },
  })
);

const EmptyCart = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={emptyCartImg} alt="" className={classes.styleImg} />
          <Typography variant="h5">Giỏ hàng của bạn còn trống</Typography>
          <Link to="/" className={classes.styleButton}>
            MUA NGAY
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default EmptyCart;
