import React, { useEffect } from "react";
import { Box, CircularProgress, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { getBrandProduct } from "../../../redux/actions/brandAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      "& img": {
        width: "100%",
      },
    },
    styleGrid: {
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
    styleImg: { width: "100%" },
    styleLink: {
      textDecoration: "none",
      color: "#fff",
      "&:hover div:nth-child(2)": {
        visibility: "visible",
      },
    },
    styleText: {
      position: "relative",
      fontFamily: "Roboto",
      background: "#fff",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-3px)",
        transition: "transform 0.3s ease",
      },
      "& p": {
        marginBottom: "5px",
        color: "rgba(0,0,0,.87)",
        lineHeight: "14px",
        fontSize: ".75rem",
        overflow: "hidden",
        display: "-webkit-box",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 2,
      },
      "& span": {
        color: "#ee4d2d",
      },
      "& div:nth-child(2)": {
        color: "rgba(0,0,0,.54)",
        fontSize: ".75rem",
      },
    },
    styleDiscount: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "36px",
      padding: "4px 2px 3px",
      backgroundColor: "rgba(255,212,36,.9)",
      textAlign: "center",
      zIndex: 2,
    },
    styleFooter: {
      position: "absolute",
      width: "100%",
      height: 0,
      left: "-2px",
      bottom: "-7px",
      borderColor: "transparent rgba(255,212,36,.9)",
      borderStyle: "solid",
      borderWidth: "0 18px 4px",
    },
    styleTrend: {
      color: "rgb(255,0,32) !important",
      border: "1px solid rgb(255,0,32)",
      padding: "1px 3px",
      borderRadius: "2px",
      width: "auto",
    },
  })
);

interface Props {
  brandProductInfo: any;
  isFetching: any;
  error: any;
  id?: string;
  type?: string;
  pageNumber?: number;
  sortOrder?: number;
}

const ListProduct = ({
  brandProductInfo,
  isFetching,
  error,
  id,
  type,
  pageNumber,
  sortOrder,
}: Props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getBrandProduct({
        id,
        type: type !== "all" ? type : "all",
        pageNumber,
        sortOrder,
      })
    );
  }, [id, dispatch, type, pageNumber, sortOrder]);

  const toVND = (price: any) => {
    let vnd =
      typeof price === "undefined"
        ? 0
        : price.toLocaleString("vi-VN", {
            currency: "VND",
          });
    return vnd;
  };

  return (
    <Box mb={10} pt={1} className={classes.styleBox}>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        className={classes.styleGrid}
      >
        {isFetching ? (
          <CircularProgress />
        ) : (
          brandProductInfo?.products?.map((product: any) => {
            return (
              <Grid item xs={6} sm={4} md={3} key={product._id}>
                <Link
                  to={{
                    pathname: "/info/" + product?._id,
                  }}
                  className={classes.styleLink}
                >
                  <Box className={classes.styleText}>
                    <img src={product?.image[0]} alt="" />
                    <Box padding={1}>
                      <Typography>{product?.name}</Typography>
                      <span className={classes.styleTrend}>#ShopXuHuong</span>
                      <Box
                        mt={2}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Box component="span" fontSize=".75rem">
                            đ
                          </Box>
                          <Box component="span" fontSize="1rem">
                            {toVND(product?.price)}
                          </Box>
                        </Box>
                        <Box>{product.sold} sold</Box>
                      </Box>
                    </Box>
                    {product.discount > 0 && (
                      <Box className={classes.styleDiscount}>
                        <Box
                          position="relative"
                          display="flex"
                          flexDirection="column"
                          width="100%"
                        >
                          <Typography variant="h5">
                            {product.discount}%
                          </Typography>
                          <Typography variant="h3">GIẢM</Typography>
                          <Box className={classes.styleFooter}></Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Link>
              </Grid>
            );
          })
        )}
      </Grid>
    </Box>
  );
};

export default ListProduct;
