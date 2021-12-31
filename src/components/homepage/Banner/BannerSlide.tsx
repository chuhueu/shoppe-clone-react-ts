import { Box, Grid } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "swiper/swiper-bundle.min.css";
import "../../../assets/css/swiper.css";
import bannerRight1 from "../../../assets/images/banner/bannerRight1.png";
import bannerRight2 from "../../../assets/images/banner/bannerRight2.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      "& img": {
        width: "100%",
      },
    },
    styleBannerRight: {
      marginLeft: "-10px",
    },
  })
);
//use Navigation and Pagination
SwiperCore.use([Navigation, Pagination, Autoplay]);
const BannerSlide = () => {
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
    <Box className={classes.styleBox}>
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
  );
};

export default BannerSlide;
