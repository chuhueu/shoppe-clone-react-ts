import React, { useState } from "react";
import { Box, Checkbox, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  DashboardOutlined,
  Add,
  FormatListBulleted,
  KeyboardArrowDown,
  UnfoldMore,
  VisibilityOutlined,
  FavoriteBorderOutlined,
  EditOutlined,
  MoreHoriz,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import product1 from "../../../assets/images/products/product-1.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: { padding: "20px 0" },
    styleTop: {},
    styleCount: {
      border: "2px solid #4290f7f6",
      borderRadius: "20px",
      padding: "5px 15px",
      marginLeft: "10px",
      fontSize: "14px",
      color: "#4290f7f6",
    },
    styleOption: {
      border: "1px solid rgba(0,0,0,.26)",
      borderRadius: "5px",
      padding: "7px",
      marginLeft: "3px",
      position: "relative",
      cursor: "pointer",
    },
    styleOptionText: {
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      minWidth: "150px",
    },
    styleOptionIcon: {
      fontSize: "18px",
      color: "rgba(0,0,0,.87)",
      cursor: "pointer",
    },
    styleOptionDrop: {
      display: "none",
      position: "absolute",
      top: "calc(100% + 2px)",
      left: 0,
      width: "90%",
      maxHeight: "85px",
      backgroundColor: "#fff",
      boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
      zIndex: 10,
      overflowY: "scroll",
      "&.active": {
        display: "flex",
      },
    },
    styleOptionItem: {
      textDecoration: "none",
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      padding: "7px 12px",
      "&:hover": {
        color: "#f36",
      },
    },
    styleButton: {
      backgroundColor: "#f63",
      borderRadius: "5px",
      padding: "7px 10px",
      cursor: "pointer",
    },
    styleButtonIcon: { fontSize: "20px", color: "#fff" },
    styleButtonText: {
      fontSize: "14px",
      color: "#fff",
      marginLeft: "3px",
      textDecoration: "none",
    },
    styleChange: {
      border: "1px solid rgba(0,0,0,.26)",
      borderRadius: "5px",
      padding: "7px",
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
      "&.active": {
        backgroundColor: "transparent",
      },
    },
    styleChangeIcon: {
      fontSize: "18px",
      color: "rgba(0,0,0,.16)",
      "&.active": {
        color: "#f63",
      },
    },
    styleSortItem: { marginLeft: "10px", cursor: "pointer" },
    styleSortText: {
      fontSize: "14px",
      color: "rgba(0,0,0,.34)",
    },
    styleSortIcon: { fontSize: "16px", color: "rgba(0,0,0,.34)" },
    styleList: { marginTop: "10px" },
    styleItem: {
      position: "relative",
      border: "1px solid rgba(0,0,0,.16)",
      borderRadius: "3px",
    },
    styleImg: {
      width: "100%",
      maxHeight: "152px",
      objectFit: "cover",
    },
    styleName: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "110%",
      color: "rgba(0,0,0.87)",
      letterSpacing: "0.01rem",
      padding: "5px",
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": 2,
      textOverflow: "ellipsis",
    },
    stylePrice: { fontSize: "13px", color: "#f63" },
    styleQty: {
      fontSize: "13px",
      color: "rgba(0,0,0,.56)",
      "& span": { fontWeight: 600 },
    },
    styleInfo: {
      fontSize: "12px",
      color: "rgba(0,0,0,.46)",
    },
    styleInfoIcon: { fontSize: "16px" },
    styleSold: { fontSize: "12px", color: "rgba(0,0,0,.46)" },
    styleAction: {
      cursor: "pointer",
      "&:hover": { backgroundColor: "#f5f5f5" },
    },
    styleActionIcon: { fontSize: "20px", color: "rgba(0,0,0,.8)" },
    styleCheckbox: {
      position: "absolute",
      top: 0,
      left: 0,
      "& .MuiIconButton-label": {
        backgroundColor: "#fff",
      },
    },
    styleDiscount: {
      position: "absolute",
      top: 0,
      right: "5%",
      width: "36px",
      padding: "4px 2px 3px",
      backgroundColor: "rgba(255,212,36,.9)",
      textAlign: "center",
    },
    styleDiscountFooter: {
      position: "absolute",
      width: "100%",
      height: 0,
      left: "-2px",
      bottom: "-7px",
      borderColor: "transparent rgba(255,212,36,.9)",
      borderStyle: "solid",
      borderWidth: "0 18px 4px",
    },
  })
);

const ProductList = () => {
  const classes = useStyles();

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <Box className={classes.styleWrapper}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={classes.styleTop}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2">100 Sản phẩm</Typography>
          <Box className={classes.styleCount}>121 / 3000</Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            className={classes.styleButton}
          >
            <Add className={classes.styleButtonIcon} />
            <Link to="/seller/product-add" className={classes.styleButtonText}>
              Thêm 1 sản phẩm mới
            </Link>
          </Box>
          <Box margin="0 5px" display="flex" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleOption}
              onMouseDown={() => setToggle(!toggle)}
            >
              <p className={classes.styleOptionText}>Công cụ Xử lý hàng loạt</p>
              <KeyboardArrowDown className={classes.styleOptionIcon} />
              <Box
                display="flex"
                flexDirection="column"
                className={`${classes.styleOptionDrop} ${
                  toggle ? "active" : ""
                }`}
              >
                <Link to="/" className={classes.styleOptionItem}>
                  Đăng hàng loạt
                </Link>
                <Link to="/" className={classes.styleOptionItem}>
                  Cập nhật hàng loạt
                </Link>
                <Link to="/" className={classes.styleOptionItem}>
                  Công cụ Phân loại
                </Link>
              </Box>
            </Box>
          </Box>
          <Box margin="0 5px" display="flex" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.styleChange}
            >
              <FormatListBulleted className={classes.styleChangeIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={`${classes.styleChange} active`}
            >
              <DashboardOutlined
                className={`${classes.styleChangeIcon} active`}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        padding="10px 0"
      >
        <Box
          display="flex"
          alignItems="center"
          className={classes.styleSortItem}
        >
          <p className={classes.styleSortText}>Giá</p>
          <UnfoldMore className={classes.styleSortIcon} />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          className={classes.styleSortItem}
        >
          <p className={classes.styleSortText}>Kho hàng</p>
          <UnfoldMore className={classes.styleSortIcon} />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          className={classes.styleSortItem}
        >
          <p className={classes.styleSortText}>Bán chạy</p>
          <UnfoldMore className={classes.styleSortIcon} />
        </Box>
      </Box>
      <Grid container spacing={1} className={classes.styleList}>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box className={classes.styleItem}>
            <Checkbox className={classes.styleCheckbox} size="small" />
            <Box className={classes.styleDiscount}>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <Typography variant="h5">17%</Typography>
                <Typography variant="h3">GIẢM</Typography>
                <Box className={classes.styleDiscountFooter}></Box>
              </Box>
            </Box>
            <img src={product1} alt="" className={classes.styleImg} />
            <p className={classes.styleName}>
              Ốp lưng Iphone đẳng cấp siêu cấp vjppro
            </p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 5px"
            >
              <p className={classes.stylePrice}>₫131.000</p>
              <p className={classes.styleQty}>
                Kho hàng <span>30</span>
              </p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <VisibilityOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleInfo}
              >
                <FavoriteBorderOutlined className={classes.styleInfoIcon} />
                10
              </Box>
              <p className={classes.styleSold}>Đã bán 0</p>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderTop="1px solid rgba(0,0,0,.16)"
              padding="5px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                borderRight="1px solid rgba(0,0,0,.16)"
                className={classes.styleAction}
              >
                <EditOutlined className={classes.styleActionIcon} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex={1}
                className={classes.styleAction}
              >
                <MoreHoriz className={classes.styleActionIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductList;
