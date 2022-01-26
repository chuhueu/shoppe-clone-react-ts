import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ListProduct from "./ListProduct";
import Category from "./Category";
import Sort from "./Sort";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { brandProductState } from "../../../redux/reducers/brandReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      margin: "30px auto",
    },
  })
);

interface ParamTypes {
  id?: string;
  type?: string;
  pageNumber?: any;
  sortOrder?: any;
}

const ShopListProduct = () => {
  const classes = useStyles();

  let {
    id,
    type = "all",
    pageNumber = 1,
    sortOrder = 0,
  } = useParams<ParamTypes>();

  const getFilterUrl = (filter: any) => {
    const filterType = filter.type || type;
    const filterPage = filter.page || pageNumber;
    const filterSort = filter.sortOrder || sortOrder;
    return `/shop/${id}/type/${filterType}/page/${filterPage}/sort/${filterSort}`;
  };

  const listBrandProduct = useSelector<RootState, brandProductState>(
    (state) => state.listBrandProduct
  );
  const { brandProductInfo, isFetching, error } = listBrandProduct;

  return (
    <Container>
      <Box className={classes.styleWrapper}>
        <Grid container spacing={2}>
          <Grid item lg={2}>
            <Category getFilterUrl={getFilterUrl} />
          </Grid>
          <Grid item lg={10}>
            <Sort
              brandProductInfo={brandProductInfo}
              isFetching={isFetching}
              error={error}
              getFilterUrl={getFilterUrl}
            />
            <ListProduct
              brandProductInfo={brandProductInfo}
              isFetching={isFetching}
              error={error}
              id={id}
              type={type}
              pageNumber={pageNumber}
              sortOrder={sortOrder}
            />
            <Pagination />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ShopListProduct;
