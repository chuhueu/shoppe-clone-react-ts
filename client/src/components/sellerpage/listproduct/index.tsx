import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CreateOutlined, KeyboardArrowDown } from "@material-ui/icons";
import ProductList from "./ProductList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      maxWidth: "1000px",
      margin: "20px auto",
      backgroundColor: "#fff",
      boxShadow: "0 6px 6px rgb(0 0 0 / 6%)",
      borderRadius: "3px",
    },
    styleList: {
      padding: "10px 20px 0 20px",
      borderBottom: "1px solid rgba(0,0,0,.1)",
    },
    styleItem: {
      padding: "10px",
      margin: "0 5px",
      cursor: "pointer",
      "&.active": {
        borderBottom: "2px solid #ee4d2d",
        "& > h4,p": {
          color: "#ee4d2d",
        },
      },
      "&:hover": {
        "& > h4,p": {
          color: "#ee4d2d",
        },
      },
    },
    styleContent: { padding: "20px" },
    styleFilter: {},
    styleFilterBox: {
      border: "1px solid rgba(0,0,0,.16)",
      borderRadius: "5px",
      padding: "5px 10px",
      overflow: "hidden",
    },
    styleFilterOption: {
      padding: "2px 5px",
      cursor: "pointer",
      minWidth: "140px",
      borderRight: "1px solid rgba(0,0,0,.1)",
    },
    styleFilterInput1: {
      flex: 1,
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      border: "none",
      padding: "0 7px",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": { color: "rgba(0,0,0,.34)" },
    },
    styleFilterInput2: {
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      border: "none",
      padding: "3px 5px",
      width: "auto",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": { color: "rgba(0,0,0,.34)" },
    },
    styleIcon: { fontSize: "18px", color: "rgba(0,0,0,.46)" },
    styleButton1: {
      backgroundColor: "#f63",
      color: "#fff",
      fontSize: "14px",
      padding: "7px 15px",
      marginRight: "10px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    styleButton2: {
      backgroundColor: "transperant",
      border: "1px solid rgba(0,0,0,.1)",
      color: "rgba(0,0,0,.87)",
      fontSize: "14px",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
    },
  })
);

const ListProduct = () => {
  const classes = useStyles();

  return (
    <Box className={classes.styleWrapper}>
      <Box display="flex" alignItems="center" className={classes.styleList}>
        <Box className={`${classes.styleItem} active`}>
          <Typography variant="h4">Tất cả</Typography>
        </Box>
        <Box className={classes.styleItem}>
          <Typography variant="h4">Còn hàng</Typography>
        </Box>
        <Box className={classes.styleItem}>
          <Typography variant="h4">Hết hàng</Typography>
        </Box>
        <Box className={classes.styleItem}>
          <Typography variant="h4">Đã bị khóa</Typography>
        </Box>
        <Box className={classes.styleItem}>
          <Typography variant="h4">Đã ẩn</Typography>
        </Box>
      </Box>
      <Box className={classes.styleContent}>
        <Grid container spacing={3} className={classes.styleFilter}>
          <Grid item lg={6}>
            <Box
              display="flex"
              alignItems="center"
              className={classes.styleFilterBox}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className={classes.styleFilterOption}
              >
                <Typography variant="h4">Tên sản phẩm</Typography>
                <KeyboardArrowDown className={classes.styleIcon} />
              </Box>
              <input
                type="text"
                placeholder="Nhập vào"
                className={classes.styleFilterInput1}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box display="flex" alignItems="center">
              <Typography variant="h4">Danh mục:</Typography>
              <Box
                display="flex"
                flex={1}
                alignItems="center"
                justifyContent="space-between"
                marginLeft="5px"
                className={classes.styleFilterBox}
              >
                <input
                  type="text"
                  placeholder="Chọn ngành hàng"
                  className={classes.styleFilterInput2}
                />
                <CreateOutlined className={classes.styleIcon} />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box display="flex" alignItems="center">
              <Typography variant="h4">Kho hàng:</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                margin="0 5px"
                maxWidth="140px"
                className={classes.styleFilterBox}
              >
                <input
                  type="text"
                  placeholder="Nhập vào"
                  className={classes.styleFilterInput2}
                />
              </Box>
              <Box padding="0 10px">-</Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                margin="0 5px"
                maxWidth="140px"
                className={classes.styleFilterBox}
              >
                <input
                  type="text"
                  placeholder="Nhập vào"
                  className={classes.styleFilterInput2}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box display="flex" alignItems="center">
              <Typography variant="h4">Đã bán:</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                margin="0 5px"
                maxWidth="140px"
                className={classes.styleFilterBox}
              >
                <input
                  type="text"
                  placeholder="Nhập vào"
                  className={classes.styleFilterInput2}
                />
              </Box>
              <Box padding="0 10px">-</Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                margin="0 5px"
                maxWidth="140px"
                className={classes.styleFilterBox}
              >
                <input
                  type="text"
                  placeholder="Nhập vào"
                  className={classes.styleFilterInput2}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box display="flex">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={classes.styleButton1}
              >
                Tìm
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={classes.styleButton2}
              >
                Nhập Lại
              </Box>
            </Box>
          </Grid>
        </Grid>
        <ProductList />
      </Box>
    </Box>
  );
};

export default ListProduct;
