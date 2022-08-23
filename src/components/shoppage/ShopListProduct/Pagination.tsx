import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { Pagination as PaginationPro } from "@material-ui/lab";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      margin: "15px 0",
      "& .MuiPaginationItem-root": {
        fontSize: "20px",
        margin: "0 10px",
        borderRadius: "3px",
        minWidth: "40px",
        "&:hover": {
          color: "#f53d2d",
        },
      },
      "& .MuiPaginationItem-root.Mui-selected": {
        backgroundColor: "#f53d2d",
        color: "#fff",
        "&:hover": {
          color: "#fff",
        },
      },
    },
  })
);

const Pagination = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={classes.styleWrapper}
    >
      {/* {isFetching ? (
        <CircularProgress />
      ) : (
        <PaginationPro
          count={filterProductInfo?.pages}
          page={pageNumber}
          onChange={handleChange}
        />
      )} */}
      <PaginationPro page={1} />
    </Box>
  );
};

export default Pagination;
