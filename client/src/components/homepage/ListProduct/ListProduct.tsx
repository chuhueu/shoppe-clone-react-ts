import { Box, Hidden, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import productModel from "../../../models/productModel";
import axios from "../../../axios";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      position: "relative",
      margin: "-24px",
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
      background: "#fff",
      "&:hover": {
        border: "1px solid #ee4d2d",
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
    styleFind: {
      visibility: "hidden",
      height: "1.875rem",
      backgroundColor: "#ee4d2d",
      position: "absolute",
      width: "192px",
      borderRadius: "0px 0px 3px 3px",
    },
  })
);
const ListProduct = () => {
  //styles
  const classes = useStyles();
  //state
  const [listProduct, setListProduct] = useState<Array<productModel>>([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("/product");
        setListProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  return (
    <Box pt={1} className={classes.styleBox}>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        className={classes.styleGrid}
      >
        {listProduct.map((product) => {
          return (
            <Grid item xs={6} sm={4} md={2}>
              <Link to={{ pathname: "/info/1" }} className={classes.styleLink}>
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
                          {product?.price}
                        </Box>
                      </Box>
                      <Box>{product.sold} sold</Box>
                    </Box>
                  </Box>
                </Box>
                <Hidden mdDown>
                  <Box textAlign="center" className={classes.styleFind}>
                    Find Similar
                  </Box>
                </Hidden>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ListProduct;
