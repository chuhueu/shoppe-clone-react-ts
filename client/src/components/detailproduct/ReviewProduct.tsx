import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Grid, Container, Hidden } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import { Link } from "react-router-dom";

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
  })
);
const ReviewProduct = () => {
  //styles
  const classes = useStyles();
  return (
    <Container>
      <Box mt={2} mb={2}>
        <Grid container>
          <Grid item sm={12} md={9}>
            <Box className={classes.styleContentLeft}>
              <h1>content left</h1>
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
