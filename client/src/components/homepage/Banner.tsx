import { Link } from "react-router-dom";
import { Box, Grid, Container, Typography } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "swiper/swiper-bundle.min.css";
import "../../assets/css/swiper.css";
import bannerRight1 from "../../assets/images/banner/bannerRight1.png";
import bannerRight2 from "../../assets/images/banner/bannerRight2.png";
import bannerDown from "../../assets/images/banner/bannerDown.png";
import computer from "../../assets/images/icons/computer.png";
import cheap from "../../assets/images/icons/cheap.png";
import xtra from "../../assets/images/icons/xtra.png";
import phone from "../../assets/images/icons/phone.png";
import freeShip from "../../assets/images/icons/freeShip.png";
import sale50 from "../../assets/images/icons/sale50.png";
import international from "../../assets/images/icons/international.png";
import ruby from "../../assets/images/icons/ruby.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      maxWidth: "1200px",
      "& img": {
        width: "100%",
      },
    },
    styleBannerRight: {
      marginLeft: "-10px",
    },
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
//use Navigation and Pagination
SwiperCore.use([Navigation, Pagination, Autoplay]);
const Banner = () => {
  const classes = useStyles();
  const slides = [];
  for (let i = 0; i < 10; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`/images/banner/slide-${i + 1}.png`}
          alt=""
          className="styleImg"
        />
      </SwiperSlide>
    );
  }
  return (
    <Container className={classes.styleContainer}>
      <Box>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={8} md={8}>
            <Box mr={1}>
              <Swiper
                tag="section"
                wrapperTag="ul"
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                autoplay
              >
                {slides}
              </Swiper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} className={classes.styleBannerRight}>
            <Box pl={1}>
              <img src={bannerRight1} alt="" />
              <img src={bannerRight2} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Box>
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
    </Container>
  );
};

export default Banner;
