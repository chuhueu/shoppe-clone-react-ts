import React from "react";
import { Box, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../../assets/css/swiper.css";
import slide1 from "../../../assets/images/shopeemall/slide1.png";
import slide2 from "../../../assets/images/shopeemall/slide2.png";
import slide3 from "../../../assets/images/shopeemall/slide3.png";
import ShopeeMallList from "./ShopeeMallList";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleWrapper: {
            padding: "10px 0 0 10px",
        },
        styleLeft: {},
        styleRight: {
            height: "100%",
        },
        styleBoxImg: {},
        styleImg: {
            width: "100%",
        },
    })
);

//using Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ShopeeMallContent = () => {
    const classes = useStyles();
    return (
        <Box className={classes.styleWrapper}>
            <Grid container>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className={classes.styleLeft}>
                        <Swiper
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            breakpoints={{
                                150: {
                                    slidesPerView: 1,
                                },
                                300: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 1,
                                },
                            }}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            <SwiperSlide>
                                <Box className={classes.styleBoxImg}>
                                    <img
                                        src={slide1}
                                        alt=""
                                        className={classes.styleImg}
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={classes.styleBoxImg}>
                                    <img
                                        src={slide2}
                                        alt=""
                                        className={classes.styleImg}
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={classes.styleBoxImg}>
                                    <img
                                        src={slide3}
                                        alt=""
                                        className={classes.styleImg}
                                    />
                                </Box>
                            </SwiperSlide>
                        </Swiper>
                    </Box>
                </Grid>
                <Grid item md={8} sm={6} xs={12}>
                    <Box className={classes.styleRight}>
                        <ShopeeMallList />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ShopeeMallContent;
