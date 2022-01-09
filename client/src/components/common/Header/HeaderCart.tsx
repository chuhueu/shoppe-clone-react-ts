import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import cartEmpty from "../../../assets/images/header/cart-empty.png";
import product1 from "../../../assets/images/products/product-1.jpg";
import product2 from "../../../assets/images/products/product-2.jpg";

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
      boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.54)",
      transformOrigin: "calc(100% - 32px) top",
      opacity: "0",
      transform: "scale(0)",
      willChange: "opacity, transform",
      transition: "all 0.3s ease",
    },
    styleImgCartEmpty: {
      maxWidth: "100%",
    },
    styleList: {
      overflowY: "scroll",
      maxHeight: "300px",
      "&::-webkit-scrollbar": {
        width: "5px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
      },
    },
    styleItem: {
      marginBottom: "10px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    },
    styleImg: {
      width: "50px",
      height: "50px",
    },
    styleComboSale: {
      marginRight: "3px",
      color: "#ee4d2d",
      padding: "1px 4px",
      lineHeight: "8px",
      fontSize: "8px",
      fontFamily: "Roboto",
      border: "1px solid #ee4d2d",
    },
    styleButton: {
      textDecoration: "none",
      fontFamily: "Roboto",
      fontSize: "16px",
      color: "#fff",
      padding: "10px 15px",
      backgroundColor: "#ee4d2d",
      borderRadius: "2px",
      "&:hover": {
        backgroundColor: "#e96b51",
      },
    },
    styleQty: {
      position: "absolute",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 500,
      right: "-3px",
      top: "0",
      padding: "1px 6px",
      borderRadius: "10px",
      color: "#ee4d2d",
      backgroundColor: "#fff",
      border: "3px solid #ee4d2d",
      cursor: "pointer",
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
        <Box className={classes.styleQty}>2</Box>
        <Box className={classes.styleCartBox}>
          {/* <img src={cartEmpty} alt="" className={classes.styleImgCartEmpty} /> */}
          <Box padding="10px 0">
            <Typography variant="h4">Sản Phẩm Mới Thêm</Typography>
          </Box>
          <Box className={classes.styleList}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box display="flex">
                <img src={product1} alt="" className={classes.styleImg} />
                <Box
                  display="flex"
                  alignItems="center"
                  marginLeft="5px"
                  maxWidth="250px"
                >
                  <p className="custom-p-3">
                    Bông tẩy trang 222 miếng Lameila BTT222
                  </p>
                </Box>
              </Box>
              <Typography variant="h5">₫22.000</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box display="flex">
                <img src={product2} alt="" className={classes.styleImg} />
                <Box
                  display="flex"
                  alignItems="center"
                  marginLeft="5px"
                  maxWidth="250px"
                >
                  <Box className={classes.styleComboSale}>Combo khuyến mãi</Box>
                  <p className="custom-p-3">
                    Ốp lưng iphone B@R trong cạnh vuông
                    6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/13/pro/max/plus/promax
                  </p>
                </Box>
              </Box>
              <Typography variant="h5">₫22.000</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box display="flex">
                <img src={product2} alt="" className={classes.styleImg} />
                <Box
                  display="flex"
                  alignItems="center"
                  marginLeft="5px"
                  maxWidth="250px"
                >
                  <Box className={classes.styleComboSale}>Combo khuyến mãi</Box>
                  <p className="custom-p-3">
                    Ốp lưng iphone B@R trong cạnh vuông
                    6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/13/pro/max/plus/promax
                  </p>
                </Box>
              </Box>
              <Typography variant="h5">₫22.000</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box display="flex">
                <img src={product2} alt="" className={classes.styleImg} />
                <Box
                  display="flex"
                  alignItems="center"
                  marginLeft="5px"
                  maxWidth="250px"
                >
                  <Box className={classes.styleComboSale}>Combo khuyến mãi</Box>
                  <p className="custom-p-3">
                    Ốp lưng iphone B@R trong cạnh vuông
                    6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/13/pro/max/plus/promax
                  </p>
                </Box>
              </Box>
              <Typography variant="h5">₫22.000</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box display="flex">
                <img src={product2} alt="" className={classes.styleImg} />
                <Box
                  display="flex"
                  alignItems="center"
                  marginLeft="5px"
                  maxWidth="250px"
                >
                  <Box className={classes.styleComboSale}>Combo khuyến mãi</Box>
                  <p className="custom-p-3">
                    Ốp lưng iphone B@R trong cạnh vuông
                    6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/13/pro/max/plus/promax
                  </p>
                </Box>
              </Box>
              <Typography variant="h5">₫22.000</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box display="flex">
                <img src={product2} alt="" className={classes.styleImg} />
                <Box
                  display="flex"
                  alignItems="center"
                  marginLeft="5px"
                  maxWidth="250px"
                >
                  <Box className={classes.styleComboSale}>Combo khuyến mãi</Box>
                  <p className="custom-p-3">
                    Ốp lưng iphone B@R trong cạnh vuông
                    6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/13/pro/max/plus/promax
                  </p>
                </Box>
              </Box>
              <Typography variant="h5">₫22.000</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box display="flex">
                <img src={product2} alt="" className={classes.styleImg} />
                <Box
                  display="flex"
                  alignItems="center"
                  marginLeft="5px"
                  maxWidth="250px"
                >
                  <Box className={classes.styleComboSale}>Combo khuyến mãi</Box>
                  <p className="custom-p-3">
                    Ốp lưng iphone B@R trong cạnh vuông
                    6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/13/pro/max/plus/promax
                  </p>
                </Box>
              </Box>
              <Typography variant="h5">₫22.000</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Link to="/cart" className={classes.styleButton}>
              Xem Giỏ Hàng
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderCart;
