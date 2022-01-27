import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      maxWidth: "1000px",
      margin: "20px auto",
      backgroundColor: "#fff",
      boxShadow: "0 6px 6px rgb(0 0 0 / 6%)",
      padding: "20px",
      borderRadius: "3px",
    },
    styleHeading: {},
    styleTitle: {
      fontSize: "22px",
      fontWeight: 500,
      letterSpacing: "0.05rem",
      marginBottom: "5px",
    },
    styleDesc: {
      fontSize: "14px",
      color: "rgba(0,0,0,.54)",
    },
    styleList: { padding: "10px" },
    styleNumber: {
      fontSize: "32px",
      fontWeight: 500,
      color: "#1a24a887",
      marginBottom: "5px",
    },
  })
);

const TodoList = () => {
  const classes = useStyles();

  return (
    <Box className={classes.styleWrapper}>
      <Box className={classes.styleHeading}>
        <p className={classes.styleTitle}>Danh sách cần làm</p>
        <p className={classes.styleDesc}>Những việc bạn sẽ phải làm</p>
      </Box>
      <Grid container className={classes.styleList}>
        <Grid item lg={3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="15px 0"
          >
            <p className={classes.styleNumber}>0</p>
            <Typography variant="h4">Chờ Xác Nhận</Typography>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="15px 0"
          >
            <p className={classes.styleNumber}>0</p>
            <Typography variant="h4">Chờ Xác Nhận</Typography>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="15px 0"
          >
            <p className={classes.styleNumber}>0</p>
            <Typography variant="h4">Chờ Xác Nhận</Typography>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="15px 0"
          >
            <p className={classes.styleNumber}>0</p>
            <Typography variant="h4">Chờ Xác Nhận</Typography>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="15px 0"
          >
            <p className={classes.styleNumber}>0</p>
            <Typography variant="h4">Chờ Xác Nhận</Typography>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="15px 0"
          >
            <p className={classes.styleNumber}>0</p>
            <Typography variant="h4">Chờ Xác Nhận</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoList;
