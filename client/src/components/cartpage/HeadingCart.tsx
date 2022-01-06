import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Checkbox, Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginTop: "10px",
      marginBottom: "10px",
      backgroundColor: "#fff",
    },
    styleWrapper: {
      width: "100%",
      padding: "8px 0",
    },
    styleLeft: {},
    styleText: {
      marginLeft: "10px",
    },
    styleRight: {
      height: "100%",
    },
    styleItem: {
      height: "100%",
    },
  })
);

interface Props {
  checkedAll: boolean;
  selectAll: any;
}

const HeadingCart = ({ checkedAll, selectAll }: Props) => {
  const classes = useStyles();

  return (
    <Container className={classes.styleContainer}>
      <Grid className={classes.styleWrapper} container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box display="flex" alignItems="center" className={classes.styleLeft}>
            <Checkbox
              checked={checkedAll}
              onChange={(e) => selectAll(e.target.checked)}
            />
            <Box className={classes.styleText}>
              <Typography variant="h4">Sản Phẩm</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container className={classes.styleRight}>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={classes.styleItem}
              >
                <Typography variant="h4">Đơn Giá</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={classes.styleItem}
              >
                <Typography variant="h4">Số Lượng</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={classes.styleItem}
              >
                <Typography variant="h4">Số Tiền</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={classes.styleItem}
              >
                <Typography variant="h4">Thao Tác</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeadingCart;
