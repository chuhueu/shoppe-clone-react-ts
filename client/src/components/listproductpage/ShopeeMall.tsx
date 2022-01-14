import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../assets/css/navigation.css";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      margin: "15px auto",
      backgroundColor: "#fff",
    },
    styleTop: { padding: "15px 0" },
    styleBottom: { overflow: "hidden" },
    styleLink: { color: "inherit", textDecoration: "none", margin: "0 10px" },
    styleIconNext: {
      color: "#d0011b",
      fontSize: "20px",
      marginLeft: "7px",
    },
    styleImg: { width: "100%" },
  })
);

SwiperCore.use([Navigation]);

const ShopeeMall = () => {
  const classes = useStyles();

  const slides = [];
  for (let i = 0; i < 12; i++) {
    slides.push(
      <SwiperSlide key={`directory-${i}`} tag="li">
        <Link to="/product-list" className={classes.styleLink}>
          <img
            src={`/images/shopeemall/mall-${i + 1}.jpg`}
            alt=""
            className={classes.styleImg}
          />
        </Link>
      </SwiperSlide>
    );
  }

  return (
    <Container>
      <Box className={classes.styleWrapper}>
        <Box
          className={classes.styleTop}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1">
            <Link to="/" className={classes.styleLink}>
              SHOPEE MALL
            </Link>
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="h5">Xem Tất Cả</Typography>
            <ArrowForwardIos className={classes.styleIconNext} />
          </Box>
        </Box>
        <Box className={classes.styleBottom}>
          <Swiper
            tag="section"
            wrapperTag="ul"
            navigation
            slidesPerColumn={2}
            slidesPerView={6}
            slidesPerGroup={3}
            breakpoints={{
              1000: { slidesPerView: 6, slidesPerColumn: 2 },
              600: { slidesPerView: 4, slidesPerColumn: 2 },
              300: { slidesPerView: 3, slidesPerColumn: 2 },
              100: { slidesPerView: 2, slidesPerColumn: 2 },
            }}
            className="custom-navi"
          >
            {slides}
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
};

export default ShopeeMall;
