import React from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../../assets/css/navigation.css";
import "../../../assets/css/swiper.css";
import item1 from "../../../assets/images/searchtop/item1.jpg";
import item2 from "../../../assets/images/searchtop/item2.jpg";
import item3 from "../../../assets/images/searchtop/item3.jpg";
import topIcon from "../../../assets/images/searchtop/top.png";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleWrapper: {
            height: "100%",
        },
        styleItem: {
            cursor: "pointer",
        },
        styleInfo: {
            position: "relative",
        },
        styleImg: {
            width: "100%",
        },
        styleIconTop: {
            position: "absolute",
            left: "0",
            top: "0",
            width: "32px",
        },
        stylePrice: {
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "100%",
            backgroundColor: "rgba(0,0,0,.26)",
            textAlign: "center",
            padding: "5px 0",
        },
        styleName: {
            margin: "20px 0 5px 0",
            textAlign: "left",
        },
    })
);

//using Swiper
SwiperCore.use([Navigation]);

const SearchTopList = () => {
    const classes = useStyles();
    return (
        <Swiper
            navigation
            slidesPerView={5}
            slidesPerGroup={5}
            spaceBetween={20}
            breakpoints={{
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                300: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            }}
            className={`${classes.styleWrapper} custom-navi`}
        >
            <SwiperSlide>
                <Box className={classes.styleItem}>
                    <Box className={classes.styleInfo}>
                        <img src={item1} alt="" className={classes.styleImg} />
                        <img
                            src={topIcon}
                            alt=""
                            className={classes.styleIconTop}
                        />
                        <Box className={classes.stylePrice}>
                            <Typography variant="h2">
                                Bán 216k+ / tháng
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.styleName}>
                        <Typography variant="h1">Ốp Lưng Iphone</Typography>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={classes.styleItem}>
                    <Box className={classes.styleInfo}>
                        <img src={item2} alt="" className={classes.styleImg} />
                        <img
                            src={topIcon}
                            alt=""
                            className={classes.styleIconTop}
                        />
                        <Box className={classes.stylePrice}>
                            <Typography variant="h2">
                                Bán 216k+ / tháng
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.styleName}>
                        <Typography variant="h1">
                            Bông Tẩy Trang 3 Lớp
                        </Typography>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={classes.styleItem}>
                    <Box className={classes.styleInfo}>
                        <img src={item3} alt="" className={classes.styleImg} />
                        <img
                            src={topIcon}
                            alt=""
                            className={classes.styleIconTop}
                        />
                        <Box className={classes.stylePrice}>
                            <Typography variant="h2">
                                Bán 216k+ / tháng
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.styleName}>
                        <Typography variant="h1">Quần Ống Rộng Nữ</Typography>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={classes.styleItem}>
                    <Box className={classes.styleInfo}>
                        <img src={item1} alt="" className={classes.styleImg} />
                        <img
                            src={topIcon}
                            alt=""
                            className={classes.styleIconTop}
                        />
                        <Box className={classes.stylePrice}>
                            <Typography variant="h2">
                                Bán 216k+ / tháng
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.styleName}>
                        <Typography variant="h1">Ốp Lưng Iphone</Typography>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={classes.styleItem}>
                    <Box className={classes.styleInfo}>
                        <img src={item2} alt="" className={classes.styleImg} />
                        <img
                            src={topIcon}
                            alt=""
                            className={classes.styleIconTop}
                        />
                        <Box className={classes.stylePrice}>
                            <Typography variant="h2">
                                Bán 216k+ / tháng
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.styleName}>
                        <Typography variant="h1">
                            Bông Tẩy Trang 3 Lớp
                        </Typography>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={classes.styleItem}>
                    <Box className={classes.styleInfo}>
                        <img src={item3} alt="" className={classes.styleImg} />
                        <img
                            src={topIcon}
                            alt=""
                            className={classes.styleIconTop}
                        />
                        <Box className={classes.stylePrice}>
                            <Typography variant="h2">
                                Bán 216k+ / tháng
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.styleName}>
                        <Typography variant="h1">Quần Ống Rộng Nữ</Typography>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={classes.styleItem}>
                    <Box className={classes.styleInfo}>
                        <img src={item1} alt="" className={classes.styleImg} />
                        <img
                            src={topIcon}
                            alt=""
                            className={classes.styleIconTop}
                        />
                        <Box className={classes.stylePrice}>
                            <Typography variant="h2">
                                Bán 216k+ / tháng
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.styleName}>
                        <Typography variant="h1">Ốp Lưng Iphone</Typography>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={classes.styleItem}>
                    <Box className={classes.styleInfo}>
                        <img src={item2} alt="" className={classes.styleImg} />
                        <img
                            src={topIcon}
                            alt=""
                            className={classes.styleIconTop}
                        />
                        <Box className={classes.stylePrice}>
                            <Typography variant="h2">
                                Bán 216k+ / tháng
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.styleName}>
                        <Typography variant="h1">
                            Bông Tẩy Trang 3 Lớp
                        </Typography>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={classes.styleItem}>
                    <Box className={classes.styleInfo}>
                        <img src={item3} alt="" className={classes.styleImg} />
                        <img
                            src={topIcon}
                            alt=""
                            className={classes.styleIconTop}
                        />
                        <Box className={classes.stylePrice}>
                            <Typography variant="h2">
                                Bán 216k+ / tháng
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.styleName}>
                        <Typography variant="h1">Quần Ống Rộng Nữ</Typography>
                    </Box>
                </Box>
            </SwiperSlide>
        </Swiper>
    );
};

export default SearchTopList;
