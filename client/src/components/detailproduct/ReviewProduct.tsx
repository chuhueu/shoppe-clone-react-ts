import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Grid, Container, Hidden } from "@material-ui/core";
import { Star } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContentLeft: {
      background: "#fff",
      padding: "1.5625rem",
    },
    styleContentRight: {
      background: "#fff",
      marginLeft: "16px",
    },
    styleHeaderLeft: {
      marginBottom: theme.spacing(2),
      fontSize: "1.125rem",
    },
    styleOverview: {
      backgroundColor: "#fffbf8",
      minHeight: "5rem",
      border: "1px solid #f9ede5",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      borderRadius: "2px",
      boxSizing: "border-box",
      padding: "1.875rem",
    },
    styleOverviewFilter: {
      "& div": {
        cursor: "pointer",
        userSelect: "none",
        height: "2rem",
        lineHeight: "2rem",
        minWidth: " 6.25rem",
        textAlign: "center",
        padding: "0 .625rem",
        backgroundColor: " #fff",
        border: "1px solid rgba(0,0,0,.09)",
        boxSizing: "border-box",
        display: "inline-block",
        marginRight: ".5rem",
        textDecoration: "none",
        textTransform: "capitalize",
        borderRadius: "2px",
        marginBottom: ".3125rem",
        marginTop: ".3125rem",
      },
    },
    styleReviewList: {
      borderBottom: "1px solid rgba(0,0,0,.09)",
      padding: "1rem 0 1rem 1.25rem",
    },
    styleAvatar: {
      width: "50px",
      borderRadius: "50%",
    },
    styleStar: {
      "& svg": {
        fontSize: "15px",
      },
    },
  })
);
const ReviewProduct = () => {
  //styles
  const classes = useStyles();
  //state
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
  return (
    <Container>
      <Box mt={2} mb={2} fontFamily="Roboto">
        <Grid container>
          <Grid item sm={12} md={9}>
            <Box className={classes.styleContentLeft}>
              <Box className={classes.styleHeaderLeft}>ĐÁNH GIÁ SẢN PHẨM</Box>
              <Box className={classes.styleOverview}>
                <Box textAlign="center" mr={2}>
                  <Box color="#ee4d2d" fontSize="1.125rem">
                    <Box component="span" fontSize="1.875rem" mr={1}>
                      5.0
                    </Box>
                    <Box component="span">trên 5</Box>
                    <Box mt={1} color="#ee4d2d">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Box>
                  </Box>
                </Box>
                <Box flex="1" ml={1} className={classes.styleOverviewFilter}>
                  <Box>Tất cả</Box>
                  <Box>5 Sao (2,2k)</Box>
                  <Box>4 Sao (18)</Box>
                  <Box>3 Sao (8)</Box>
                  <Box>2 Sao (0)</Box>
                  <Box>1 Sao (6)</Box>
                  <Box>Có Bình luận (500)</Box>
                  <Box>Có hình ảnh / video (483)</Box>
                </Box>
              </Box>
              <Box mt={1}>
                <Box display="flex" className={classes.styleReviewList}>
                  <Box mr={1}>
                    <img
                      src={userInfo?.avatar}
                      alt=""
                      className={classes.styleAvatar}
                    />
                  </Box>
                  <Box flex="1">
                    <Box ml={1}>{userInfo?.username}</Box>
                    <Box color="#ee4d2d" className={classes.styleStar}>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Hidden mdDown>
            <Grid item md={3}>
              <Box className={classes.styleContentRight}>
                <h1>content right</h1>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReviewProduct;
