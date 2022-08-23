import React from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Autorenew } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../../assets/css/app.css";
import item1 from "../../assets/images/searchtrend/item1.jpg";
import item2 from "../../assets/images/searchtrend/item2.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      margin: "15px auto",
      backgroundColor: "#fff",
    },
    styleTop: {
      padding: "20px",
      borderBottom: "1px solid rgba(0,0,0,.1)",
    },
    styleIcon: {
      fontSize: "16px",
      color: "#d0011b",
      marginRight: "5px",
    },
    styleItem: {
      borderRight: "1px solid rgba(0,0,0,.1)",
    },
    styleImg: {
      width: "50%",
    },
  })
);

const SearchTrend = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.styleWrapper}>
        <Box
          className={classes.styleTop}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">XU HƯỚNG TÌM KIẾM</Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box display="flex" alignItems="center">
              <Autorenew className={classes.styleIcon} />
              <Typography variant="h5">Xem thêm</Typography>
            </Box>
          </Link>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6} md>
            <Box
              display="flex"
              alignItems="center"
              className={classes.styleItem}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                padding="0 8px"
              >
                <p className="custom-p-1">Kem Chống Nắng</p>
                <Typography variant="h4">207k+ sản phẩm</Typography>
              </Box>
              <img src={item1} alt="" className={classes.styleImg} />
            </Box>
          </Grid>
          <Grid item xs={6} md>
            <Box
              display="flex"
              alignItems="center"
              className={classes.styleItem}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                padding="0 8px"
              >
                <p className="custom-p-1">Áo Giữ Nhiệt</p>
                <Typography variant="h4">207k+ sản phẩm</Typography>
              </Box>
              <img src={item2} alt="" className={classes.styleImg} />
            </Box>
          </Grid>
          <Grid item xs={6} md>
            <Box
              display="flex"
              alignItems="center"
              className={classes.styleItem}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                padding="0 8px"
              >
                <p className="custom-p-1">Kem Chống Nắng</p>
                <Typography variant="h4">207k+ sản phẩm</Typography>
              </Box>
              <img src={item1} alt="" className={classes.styleImg} />
            </Box>
          </Grid>
          <Grid item xs={6} md>
            <Box
              display="flex"
              alignItems="center"
              className={classes.styleItem}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                padding="0 8px"
              >
                <p className="custom-p-1">Áo Giữ Nhiệt</p>
                <Typography variant="h4">207k+ sản phẩm</Typography>
              </Box>
              <img src={item2} alt="" className={classes.styleImg} />
            </Box>
          </Grid>
          <Grid item xs={6} md>
            <Box
              display="flex"
              alignItems="center"
              className={classes.styleItem}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                padding="0 8px"
              >
                <p className="custom-p-1">Kem Chống Nắng</p>
                <Typography variant="h4">207k+ sản phẩm</Typography>
              </Box>
              <img src={item1} alt="" className={classes.styleImg} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchTrend;
