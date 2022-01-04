import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Checkbox, Container, Typography } from "@material-ui/core";
import ProductCart from "./ProductCart";
import voucherIcon from "../../assets/images/icons/cheap.png";
import shipIcon from "../../assets/images/icons/ship.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginBottom: "10px",
      backgroundColor: "#fff",
    },
    styleTop: {
      padding: "10px 0",
      borderBottom: "1px solid rgba(0,0,0,.09)",
    },
    styleLike: {
      margin: "0 10px",
      padding: "1px 3px",
      borderRadius: "2px",
      backgroundColor: "rgb(238, 77, 45)",
    },
    styleText: {},
    styleVoucher: { padding: "15px 0", borderTop: "1px solid rgba(0,0,0,.09)" },
    styleShip: { padding: "15px 0", borderTop: "1px solid rgba(0,0,0,.09)" },
    styleIcon: { width: "24px", marginRight: "10px" },
    styleLink: {
      textDecoration: "none",
      margin: "0 10px",
      "& h4": {
        color: "#05a",
      },
    },
  })
);

const ItemCart = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <Container className={classes.styleContainer}>
      <Box display="flex" alignItems="center" className={classes.styleTop}>
        <Checkbox checked={checked} onChange={handleChange} />
        <Box className={classes.styleLike}>
          <Typography variant="h3">Yêu thích</Typography>
        </Box>
        <Box className={classes.styleText}>
          <Typography variant="h4">ỐP LƯNG IPHONE - SHIN CASE</Typography>
        </Box>
      </Box>
      <Box padding="20px 0">
        <ProductCart />
      </Box>
      <Box display="flex" alignItems="center" className={classes.styleVoucher}>
        <img src={voucherIcon} alt="" className={classes.styleIcon} />
        <Box className={classes.styleText}>
          <Typography variant="h4">Shop Voucher giảm đến ₫50k</Typography>
        </Box>
        <Link to="/" className={classes.styleLink}>
          <Typography variant="h4">Xem thêm voucher</Typography>
        </Link>
      </Box>
      <Box display="flex" alignItems="center" className={classes.styleShip}>
        <img src={shipIcon} alt="" className={classes.styleIcon} />
        <Box className={classes.styleText}>
          <Typography variant="h4">
            Giảm ₫25.000 phí vận chuyển đơn tối thiểu ₫50.000; Giảm ₫70.000 phí
            vận chuyển đơn tối thiểu ₫300.000
          </Typography>
        </Box>
        <Link to="/" className={classes.styleLink}>
          <Typography variant="h4">Tìm hiểu thêm</Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default ItemCart;
