import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../assets/css/swiper.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      background: "#fff",
      overflow: "hidden",
      "& img": {
        width: "100px",
      },
      "& li": {
        textDecoration: "none",
        borderRight: "1px solid rgba(0,0,0,.05)",
        borderBottom: "1px solid rgba(0,0,0,.05)",
        marginRight: "-1px",
      },
      "& li p": {
        color: "rgba(0,0,0,.8)",
        fontSize: ".875rem",
        textDecoration: "none",
        lineHeight: "1.25rem",
        height: "2.5rem",
        marginBottom: ".625rem",
      },
    },
  })
);
SwiperCore.use([Navigation, Pagination, Autoplay]);
const Test = () => {
  const classes = useStyles();
  const slides = [];
  for (let i = 0; i < 26; i++) {
    slides.push(
      <SwiperSlide key={`directory-${i}`} tag="li" style={{ width: "114px" }}>
        <img
          src={`/images/directory/directory-${i + 1}.png`}
          alt=""
          className="styleImg"
        />
        <Typography>Fashion</Typography>
      </SwiperSlide>
    );
  }
  return (
    <Container>
      <Box textAlign="center" className={classes.styleBox}>
        <Swiper
          tag="section"
          wrapperTag="ul"
          navigation
          slidesPerColumn={2}
          slidesPerView={10}
          slidesPerGroup={3}
          breakpoints={{
            1000: { slidesPerView: 10, slidesPerColumn: 2 },
            600: { slidesPerView: 5, slidesPerColumn: 2 },
            300: { slidesPerView: 3, slidesPerColumn: 2 },
          }}
        >
          {slides}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Test;
