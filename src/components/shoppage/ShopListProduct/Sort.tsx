import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      backgroundColor: "rgba(0,0,0,.03)",
      padding: ".8125rem 1.25rem",
      borderRadius: "2px",
    },
    styleLeft: {},
    styleRight: {},
    styleButton: {
      height: "2.125rem",
      backgroundColor: "#fff",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 2%)",
      marginLeft: "0.625rem",
      padding: "0 0.9375rem",
      cursor: "pointer",
      "& > p": {
        fontWeight: 400,
        fontSize: "14px",
        color: "rgba(0,0,0,.87)",
        lineHeight: "2.125rem",
      },
      "&.active": {
        backgroundColor: "#ee4d2d",
      },
      "&.active > p": {
        color: "#fff",
      },
    },
    styleSortPrice: {
      minWidth: "12.5rem",
      marginLeft: "0.625rem",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 2%)",
      height: "2.125rem",
      borderRadius: "2px",
      backgroundColor: "#fff",
      padding: "0 0.625rem",
      cursor: "pointer",
      position: "relative",
    },
    styleIcon: {
      fontSize: "20px",
      color: "rgba(0,0,0,.8)",
    },
    styleDrop: {
      display: "none",
      position: "absolute",
      top: "calc(100% + 1px)",
      width: "100%",
      left: "0",
      backgroundColor: "#fff",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 2%)",
      zIndex: 99,
      "&.active": {
        display: "block",
      },
    },
    styleDropItem: {
      fontFamily: "Roboto",
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      padding: "0.625rem",
      "&:hover": {
        color: "#ee4d2d",
      },
    },
    stylePagiButton: {
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "1px solid rgba(0,0,0,.09)",
      padding: "7px",
      transition: "background-color .1s cubic-bezier(.4,0,.6,1)",
      "&:hover": {
        backgroundColor: "#fff",
      },
      "&.disable": {
        cursor: "default",
        backgroundColor: "#f9f9f9",
        opacity: "0.6",
      },
    },
  })
);

interface Props {
  getFilterUrl: any;
  brandProductInfo: any;
  isFetching: any;
  error: any;
  id?: string;
  type?: string;
  pageNumber?: number;
  sortOrder?: number;
}

const Sort = ({
  getFilterUrl,
  brandProductInfo,
  isFetching,
  error,
  id,
  type,
  pageNumber,
  sortOrder,
}: Props) => {
  const classes = useStyles();

  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState<number>(0);

  const history = useHistory();

  const pagePrev = () => {
    history.push(
      getFilterUrl({ page: Number(brandProductInfo?.pageNumber) - 1 })
    );
  };

  const pageNext = () => {
    history.push(
      getFilterUrl({ page: Number(brandProductInfo?.pageNumber) + 1 })
    );
  };

  const sortPriceUp = () => {
    history.push(getFilterUrl({ sortOrder: 3 }));
  };
  const sortPriceDown = () => {
    history.push(getFilterUrl({ sortOrder: 4 }));
  };

  const handleToggleSort = (index: number) => {
    setToggle(index);
    history.push(getFilterUrl({ sortOrder: index }));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className={classes.styleWrapper}
    >
      <Box display="flex" alignItems="center" className={classes.styleLeft}>
        <Typography variant="h4">Sắp xếp theo</Typography>
        <Box
          className={`${classes.styleButton} ${toggle === 0 ? "active" : ""}`}
          onClick={() => handleToggleSort(0)}
        >
          <Typography>Phổ biến</Typography>
        </Box>
        <Box
          className={`${classes.styleButton} ${toggle === 1 ? "active" : ""}`}
          onClick={() => handleToggleSort(1)}
        >
          <Typography>Mới nhất</Typography>
        </Box>
        <Box
          className={`${classes.styleButton} ${toggle === 2 ? "active" : ""}`}
          onClick={() => handleToggleSort(2)}
        >
          <Typography>Bán chạy</Typography>
        </Box>
        <Box
          className={classes.styleSortPrice}
          onClick={() => setHover(!hover)}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="100%"
          >
            <Typography variant="h4">Giá</Typography>
            <KeyboardArrowDown />
          </Box>
          <Box className={`${classes.styleDrop} ${hover ? "active" : ""}`}>
            <Box className={classes.styleDropItem} onClick={sortPriceUp}>
              Giá: Từ Thấp đến Cao
            </Box>
            <Box className={classes.styleDropItem} onClick={sortPriceDown}>
              Giá: Từ Cao đến Thấp
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" className={classes.styleRight}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5">{brandProductInfo?.pageNumber}</Typography>
          <Typography variant="h4">/{brandProductInfo?.pages}</Typography>
        </Box>
        <Box display="flex" alignItems="center" marginLeft="10px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={`${classes.stylePagiButton} ${
              brandProductInfo?.pageNumber === 1 ? "disable" : ""
            }`}
            onClick={pagePrev}
          >
            <KeyboardArrowLeft className={classes.styleIcon} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={`${classes.stylePagiButton} ${
              brandProductInfo?.pageNumber === brandProductInfo?.pages
                ? "disable"
                : ""
            }`}
            onClick={pageNext}
          >
            <KeyboardArrowRight className={classes.styleIcon} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sort;
