import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import bannerDown from "../../../assets/images/banner/bannerDown.png";
import computer from "../../../assets/images/icons/computer.png";
import cheap from "../../../assets/images/icons/cheap.png";
import xtra from "../../../assets/images/icons/xtra.png";
import phone from "../../../assets/images/icons/phone.png";
import freeShip from "../../../assets/images/icons/freeShip.png";
import sale50 from "../../../assets/images/icons/sale50.png";
import international from "../../../assets/images/icons/international.png";
import ruby from "../../../assets/images/icons/ruby.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleAdv: {
      backgroundColor: "#fff",
      minHeight: "100px",
      padding: "10px 0px",
      "& a": {
        textDecoration: "none",
      },
      "& a div:hover": {
        transform: "translateY(-2px)",
        transition: "0.1s",
      },
      "& img": {
        width: "45px",
      },
      "& p": {
        fontSize: ".8125rem",
        color: "#222",
      },
    },
  })
);
const BannerList = () => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" textAlign="center" className={classes.styleAdv}>
        <Grid container justifyContent="center">
          <Grid item xs={6} sm={4} md={3}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Link to="/">
                  <Box>
                    <img src={computer} alt="" />
                    <Typography>Tech Zone - Electronic Supermarket</Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Link to="/">
                  <Box>
                    <img src={cheap} alt="" />
                    <Typography>Everything Cheap - From 1K</Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Link to="/">
                  <Box>
                    <img src={xtra} alt="" />
                    <Typography>10% Cashback - Single From 0D</Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Link to="/">
                  <Box>
                    <img src={phone} alt="" />
                    <Typography>Card, Invoice & E-voucher Load</Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Link to="/">
                  <Box>
                    <img src={freeShip} alt="" />
                    <Typography>Freeship Xtra</Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Link to="/">
                  <Box>
                    <img src={sale50} alt="" />
                    <Typography>Brand 50% - Voucher 50%</Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} sm={4} md={3}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Link to="/">
                  <Box>
                    <img src={international} alt="" />
                    <Typography>International Row</Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Link to="/">
                  <Box>
                    <img src={ruby} alt="" />
                    <Typography>Shopee Premium</Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mt={1}>
        <img src={bannerDown} alt="" style={{ width: "100%" }} />
      </Box>
    </>
  );
};

export default BannerList;
