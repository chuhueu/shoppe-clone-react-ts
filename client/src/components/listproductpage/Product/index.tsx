import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Category from "./Category";
import Sort from "./Sort";
import ListProduct from "./ListProduct";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      margin: "30px auto",
    },
  })
);

const Product = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.styleWrapper}>
        <Grid container spacing={2}>
          <Grid item lg={2}>
            <Category />
          </Grid>
          <Grid item lg={10}>
            <Sort />
            <ListProduct />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;
