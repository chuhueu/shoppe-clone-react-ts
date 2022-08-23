import React, { useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { Pagination as PaginationPro } from "@material-ui/lab";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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

interface Props {
  filterProductInfo: any;
  getFilterUrl: any;
  isFetching?: boolean;
}

const Pagination = ({ filterProductInfo, getFilterUrl, isFetching }: Props) => {
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState<number>(
    filterProductInfo?.pageNumber
  );

  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    history.push(getFilterUrl({ page: value }));
    setPageNumber(value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={classes.styleWrapper}
    >
      {isFetching ? (
        <CircularProgress />
      ) : (
        <PaginationPro
          count={filterProductInfo?.pages}
          page={pageNumber}
          onChange={handleChange}
        />
      )}
    </Box>
  );
};

export default Pagination;
