import React from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../assets/css/swiper.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      margin: "30px auto",
      "& img": {
        width: "100%",
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
    <Container>
      <Box className={classes.styleBox}>
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
    </Container>
  );
};

export default Banner;
