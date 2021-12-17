import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../assets/css/navigation.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginTop: theme.spacing(2),
    },
    styleTitle: {
      background: "#fff",
      height: "3.75rem",
      borderBottom: "1px solid rgba(0,0,0,.05)",
      padding: "0 1.25rem",
      "& p": {
        color: "rgba(0,0,0,.54)",
        fontWeight: 500,
        textTransform: "uppercase",
      },
    },
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
        cursor: "pointer",
      },
      "& li:hover": {
        transform: "translateY(-2px)",
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
SwiperCore.use([Navigation]);
const Directory = () => {
  const classes = useStyles();
  const slides = [];
  for (let i = 0; i < 26; i++) {
    slides.push(
      <SwiperSlide key={`directory-${i}`} tag="li">
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
    <Container className={classes.styleContainer}>
      <Box display="flex" alignItems="center" className={classes.styleTitle}>
        <Typography>Directory</Typography>
      </Box>
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
            100: { slidesPerView: 2, slidesPerColumn: 2 },
          }}
          className="custom-navi"
        >
          {slides}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Directory;
