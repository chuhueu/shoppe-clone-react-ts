import { Box, Container, Hidden } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
//import "../../assets/css/swiper.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginTop: theme.spacing(2),
    },
    styleWrapper: {
      background: "#fff",
    },
    styleTitle: {
      padding: "0 1.25rem",
      height: "3.75rem",
      "& img": {
        width: "114px",
      },
    },
    styleSlide: {
      position: "relative",
      "& img": {
        width: "200px",
        margin: "0 auto",
        display: "flex",
      },
      "& span": {
        color: "#ee4d2d",
        fontSize: "155%",
        fontWeight: 500,
      },
    },
    styleImgSale: {
      position: "absolute",
      zIndex: 3,
      top: 0,
      left: "7%",
    },
    styleBar: {
      marginTop: theme.spacing(1),
      backgroundImage: `url("/images/flashSale/bar.png")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "80%",
      height: "20px",
      margin: "0 auto",
      "& > *": {
        textTransform: "uppercase",
        color: "#fff",
      },
      "& img": {
        width: "22px",
        position: "absolute",
        bottom: 0,
        zIndex: 3,
      },
    },
    styleItemCard: {
      top: 0,
      right: "5%",
      zIndex: 3,
      "& > div": {
        background: "rgba(255,212,36,.9)",
        width: "60px",
        height: "50px",
        "& div": {
          position: "relative",
          fontSize: "13px",
          color: "#ee4d2d",
        },
        "&::after": {
          content: "close-quote",
          height: 0,
          left: 0,
          bottom: "-4px",
          position: "absolute",
          borderColor: "transparent rgba(255,212,36,.9)",
          borderStyle: "solid",
          borderWidth: "0 18px 4px",
          width: "24px",
        },
      },
    },
  })
);
SwiperCore.use([Navigation, Pagination, Autoplay]);
const FlashSale = () => {
  const classes = useStyles();
  const slides = [];
  for (let i = 0; i < 10; i++) {
    slides.push(
      <SwiperSlide key={`flashSale-${i}`} tag="li">
        <Box position="absolute" className={classes.styleItemCard}>
          <Box boxSizing="border-box">
            <Box display="flex" flexDirection="column" textAlign="center">
              <Box component="span">24%</Box>
              <Box component="span" style={{ color: "#fff" }}>
                OFF
              </Box>
            </Box>
          </Box>
        </Box>
        <img src={`/images/flashSale/flashSale-${i + 1}.png`} alt="" />
        <img
          src="/images/flashSale/sale50.png"
          alt=""
          className={classes.styleImgSale}
        />
        <Box textAlign="center" mt={1} overflow="hidden">
          <Box component="span" style={{ fontSize: "15px" }}>
            đ
          </Box>
          <Box component="span">19.600.000</Box>
        </Box>
        <Box textAlign="center" className={classes.styleBar}>
          <Box>4 sold</Box>
          <img src="/images/flashSale/fire.png" alt="" />
        </Box>
      </SwiperSlide>
    );
  }
  return (
    <Container className={classes.styleContainer}>
      <Box mb={2} className={classes.styleWrapper}>
        <Box display="flex" alignItems="center" className={classes.styleTitle}>
          <img src="/images/flashSale/title.png" alt="" />
        </Box>
        <Box className={classes.styleSlide}>
          <Swiper
            tag="section"
            wrapperTag="ul"
            navigation
            slidesPerColumn={1}
            slidesPerView={5}
            slidesPerGroup={5}
            breakpoints={{
              1000: { slidesPerView: 5, slidesPerColumn: 1 },
              700: { slidesPerView: 3, slidesPerColumn: 1 },
              400: { slidesPerView: 2, slidesPerColumn: 1 },
              200: { slidesPerView: 1, slidesPerColumn: 1 },
            }}
          >
            {slides}
          </Swiper>
        </Box>
      </Box>
      <Hidden xsDown>
        <img
          src="/images/flashSale/voucher.png"
          alt=""
          style={{ width: "100%" }}
        />
      </Hidden>
    </Container>
  );
};

export default FlashSale;
