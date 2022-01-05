import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Checkbox, Grid, Typography } from "@material-ui/core";
import {
  Add,
  ArrowDropDown,
  ChevronRightSharp,
  Remove,
} from "@material-ui/icons";
import product1 from "../../assets/images/products/product-1.jpg";
import shipExtra from "../../assets/images/products/ship-extra.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      border: "1px solid rgba(0,0,0,.09)",
    },
    styleTop: {
      backgroundColor: "#fff3ed",
      padding: "15px 10px",
    },
    styleComboSale: {
      marginRight: "8px",
      color: "#ee4d2d",
      padding: "1px 4px",
      lineHeight: "12px",
      fontSize: "10px",
      fontFamily: "Roboto",
      border: "1px solid #ee4d2d",
    },
    styleAdd: {
      marginLeft: "8px",
      color: "#ee4d2d",
    },
    styleGrid: { height: "100%" },
    styleLeft: {},
    styleRight: { height: "100%" },
    styleImg: { width: "80px", height: "80px", margin: "0 10px" },
    styleShipExtra: { height: "18px" },
    styleLink: {
      textDecoration: "none",
    },
    stylePrice: {
      fontFamily: "Roboto",
      color: "rgba(0,0,0,.87)",
      fontSize: "14px",
    },
    stylePriceOld: {
      color: "rgba(0,0,0,.54)",
      textDecoration: "line-through",
      margin: "0 5px",
    },
    stylePriceNew: { margin: "0 5px" },
    styleButtonQty: {
      outline: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid rgba(0,0,0,.09)",
      borderRadius: "2px",
      background: "transparent",
      color: "rgba(0,0,0,.8)",
      width: "32px",
      height: "32px",
      transition: "background-color .1s cubic-bezier(.4,0,.6,1)",
    },
    styleInputQty: {
      width: "50px",
      height: "31px",
      border: "1px solid rgba(0,0,0,.09)",
      borderLeft: 0,
      borderRight: 0,
      fontSize: "16px",
      textAlign: "center",
      cursor: "text",
      borderRadius: 0,
      "&:focus": {
        outline: "none",
      },
    },
    styleDelete: {
      cursor: "pointer",
      "&:hover h4": {
        color: "#ee4d2d",
        transition: "color .1s cubic-bezier(.4,0,.6,1)",
      },
    },
    styleSearchAs: {
      cursor: "pointer",
      "&:hover, &:hover h4": {
        color: "#ee4d2d",
        transition: "color .1s cubic-bezier(.4,0,.6,1)",
      },
    },
  })
);

const ProductCart = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Box className={classes.styleWrapper}>
      <Box display="flex" alignItems="center" className={classes.styleTop}>
        <Box className={classes.styleComboSale}>Combo khuyến mãi</Box>
        <Typography variant="h4">Mua thêm 2 sản phẩm (để giảm 1 %)</Typography>
        <Box display="flex" alignItems="center" className={classes.styleAdd}>
          <Typography variant="h5">Thêm</Typography>
          <ChevronRightSharp />
        </Box>
      </Box>
      <Box className={classes.styleGrid}>
        <Grid container>
          <Grid item lg={6}>
            <Box className={classes.styleLeft}>
              <Grid container>
                <Grid item lg={8}>
                  <Box display="flex" alignItems="center" overflow="hidden">
                    <Checkbox checked={checked} onChange={handleChange} />
                    <Link to="/">
                      <img src={product1} alt="" className={classes.styleImg} />
                    </Link>
                    <Box>
                      <Link to="/" className={classes.styleLink}>
                        <p className="custom-p-2">
                          Ốp lưng iphone B@R trong cạnh vuông
                          6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/13/pro/max/plus/promax
                        </p>
                      </Link>
                      <img
                        src={shipExtra}
                        alt=""
                        className={classes.styleShipExtra}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4}>
                  <Box
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="center"
                    flexDirection="column"
                    height="100%"
                    padding="0 10px"
                  >
                    <Box display="flex" alignItems="center">
                      <Typography variant="h4">Phân Loại Hàng:</Typography>
                      <ArrowDropDown />
                    </Box>
                    <Typography variant="h4">[B-C7] Đen,12 Promax</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Grid container className={classes.styleRight}>
              <Grid item lg={3}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  className={classes.stylePrice}
                >
                  <p className={classes.stylePriceOld}>₫40.000</p>
                  <p className={classes.stylePriceNew}>₫22.000</p>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                >
                  <button className={classes.styleButtonQty}>
                    <Remove />
                  </button>
                  <input
                    type="text"
                    className={classes.styleInputQty}
                    value={1}
                  />
                  <button className={classes.styleButtonQty}>
                    <Add />
                  </button>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                >
                  <Typography variant="h5">₫22.000</Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  height="100%"
                >
                  <Box className={classes.styleDelete}>
                    <Typography variant="h4">Xóa</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    textAlign="center"
                    className={classes.styleSearchAs}
                  >
                    <Typography variant="h4">Tìm sản phẩm tương tự</Typography>
                    <ArrowDropDown />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductCart;
