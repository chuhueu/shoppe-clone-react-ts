import { Box, CircularProgress, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListProduct } from "../../../redux/actions/productAction";
import { productState } from "../../../redux/reducers/productReducer";
import { RootState } from "../../../redux/store";

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
    styleLink: {
      textDecoration: "none",
      color: "#fff",
      "&:hover div:nth-child(2)": {
        visibility: "visible",
      },
    },
    styleText: {
      fontFamily: "Roboto",
      background: "#fff",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-3px)",
        transition: "transform 0.3s ease",
      },
      "& p": {
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
  })
);

const ListProduct = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const listProduct = useSelector<RootState, productState>(
    (state) => state.listProduct
  );
  const { productInfo, isFetching, error } = listProduct;

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

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
          productInfo?.map((product) => {
            return (
              <Grid item xs={6} sm={4} md={3} key={product._id}>
                <Link
                  to={{
                    pathname: "/info/" + product?.name + "/" + product?._id,
                  }}
                  className={classes.styleLink}
                >
                  <Box className={classes.styleText}>
                    <img src={product?.image[0]} alt="" />
                    <Box padding={1}>
                      <Typography>{product?.name}</Typography>
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
