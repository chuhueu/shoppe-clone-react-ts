import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleList: {},
    styleItem: {
      maxWidth: "16.67%",
      borderBottomWidth: "0.125rem",
      cursor: "pointer",
      flex: 1,
      borderBottom: "4px solid #fff",
      textOverflow: "ellipsis",
      overflow: "hidden",
      "&.active": {
        color: "#ee4d2d",
        borderColor: "#ee4d2d",
        transition: "border-color .2s cubic-bezier(.4,0,.6,1)",
      },
      "&:hover": {
        color: "#ee4d2d",
        transition: "color .2s cubic-bezier(.4,0,.6,1)",
      },
    },
    styleText: {
      fontSize: "16px",
      padding: "1rem 0.625rem",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      display: "inline-block",
    },
    styleItemMore: {
      flex: "0 0 auto",
      paddingRight: "1.25rem",
      borderLeft: "1px solid rgba(0,0,0,.09)",
      cursor: "pointer",
    },
  })
);

const ShopInfoBottom = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box display="flex" alignItems="center" className={classes.styleList}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={`${classes.styleItem} active`}
        >
          <p className={classes.styleText}>Dạo</p>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.styleItem}
        >
          <p className={classes.styleText}>TẤT CẢ SẢN PHẨM</p>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.styleItem}
        >
          <p className={classes.styleText}>Bộ Sưu Tập S - Việt Nam</p>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.styleItem}
        >
          <p className={classes.styleText}>Sản Phẩm Bán Chạy</p>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.styleItem}
        >
          <p className={classes.styleText}>DEAL HOT</p>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.styleItem}
        >
          <p className={classes.styleText}>Hàng Mới Về</p>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.styleItemMore}
        >
          <p className={classes.styleText}>Thêm</p>
          <ArrowDropDown />
        </Box>
      </Box>
    </Container>
  );
};

export default ShopInfoBottom;
