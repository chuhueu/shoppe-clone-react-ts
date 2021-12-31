import React from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../../assets/css/navigation.css";
import "../../../assets/css/swiper.css";
import mall1 from "../../../assets/images/shopeemall/mall-1.png";
import mall2 from "../../../assets/images/shopeemall/mall-2.png";
import mall3 from "../../../assets/images/shopeemall/mall-3.png";
import mall4 from "../../../assets/images/shopeemall/mall-4.png";
import mall5 from "../../../assets/images/shopeemall/mall-5.png";
import mall6 from "../../../assets/images/shopeemall/mall-6.png";
import mall7 from "../../../assets/images/shopeemall/mall-7.png";
import mall8 from "../../../assets/images/shopeemall/mall-8.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      height: "100%",
    },
    styleItem: {
      position: "relative",
      cursor: "pointer",
      "& > h6": {
        position: "absolute",
        left: "0",
        bottom: "10px",
        textAlign: "center",
        width: "100%",
      },
    },
    styleImg: {
      width: "100%",
    },
  })
);

//using Swiper
SwiperCore.use([Navigation]);

const ShopeeMallList = () => {
  const classes = useStyles();

  return (
    <Swiper
      navigation
      slidesPerView={4}
      slidesPerColumn={2}
      slidesPerGroup={4}
      breakpoints={{
        150: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 2,
          slidesPerColumn: 2,
        },
        800: {
          slidesPerView: 3,
          slidesPerColumn: 2,
        },
        1024: {
          slidesPerView: 4,
          slidesPerColumn: 2,
        },
      }}
      className={`${classes.styleWrapper} custom-navi`}
    >
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall1} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall2} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall3} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall4} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall1} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall2} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall3} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall4} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall5} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall6} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall7} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall8} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall5} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall6} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall7} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className={classes.styleItem}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={mall8} alt="" className={classes.styleImg} />
          <Typography variant="subtitle1">Mua 1 tặng 1</Typography>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default ShopeeMallList;
