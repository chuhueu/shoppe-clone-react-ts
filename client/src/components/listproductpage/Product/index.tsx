import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Category from "./Category";
import Sort from "./Sort";
import ListProduct from "./ListProduct";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { filterProductState } from "../../../redux/reducers/productReducer";
import Pagination from "./Pagination";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      margin: "30px auto",
    },
  })
);

interface ParamTypes {
  category?: string;
  type?: string;
  min?: any;
  max?: any;
  rating?: any;
  pageNumber?: any;
  sortOrder?: any;
}

const Product = () => {
  const classes = useStyles();

  let {
    category = "all",
    type = "all",
    min = 1,
    max = 1000000000,
    rating = 0,
    pageNumber = 1,
    sortOrder = 0,
  } = useParams<ParamTypes>();

  const getFilterUrl = (filter: any) => {
    const filterCategory = filter.category || category;
    const filterType = filter.type || type;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    const filterRating = filter.rating
      ? filter.rating
      : filter.rating === 0
      ? 0
      : rating;
    const filterPage = filter.page || pageNumber;
    const filterSort = filter.sortOrder || sortOrder;
    return `/product/category/${filterCategory}/type/${filterType}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/page/${filterPage}/sort/${filterSort}`;
  };

  const listFilterProduct = useSelector<RootState, filterProductState>(
    (state) => state.listFilterProduct
  );
  const { filterProductInfo, isFetching, error } = listFilterProduct;

  return (
    <Container>
      <Box className={classes.styleWrapper}>
        <Grid container spacing={2}>
          <Grid item lg={2}>
            <Category
              getFilterUrl={getFilterUrl}
              category={category}
              type={type}
              min={min}
              max={max}
              rating={rating}
              pageNumber={pageNumber}
            />
          </Grid>
          <Grid item lg={10}>
            <Sort
              filterProductInfo={filterProductInfo}
              isFetching={isFetching}
              error={error}
              getFilterUrl={getFilterUrl}
              category={category}
              type={type}
              min={min}
              max={max}
              rating={rating}
              pageNumber={pageNumber}
              sortOrder={sortOrder}
            />
            <ListProduct
              filterProductInfo={filterProductInfo}
              isFetching={isFetching}
              error={error}
              category={category}
              type={type}
              min={min}
              max={max}
              rating={rating}
              pageNumber={pageNumber}
              sortOrder={sortOrder}
            />
            <Pagination
              filterProductInfo={filterProductInfo}
              getFilterUrl={getFilterUrl}
              isFetching={isFetching}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;
