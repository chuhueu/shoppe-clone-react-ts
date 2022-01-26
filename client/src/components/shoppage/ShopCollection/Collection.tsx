import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "../../../assets/css/swiper.css";
import "../../../assets/css/swiper.css";
import bgCollect1 from "../../../assets/images/shop/collect-bg-1.jpg";
import bgCollect2 from "../../../assets/images/shop/collect-bg-2.jpg";
import bgCollect3 from "../../../assets/images/shop/collect-bg-3.jpg";
import bgCollect4 from "../../../assets/images/shop/collect-bg-4.jpg";
import bgProduct1 from "../../../assets/images/shop/product-bg-1.jpg";
import bgProduct2 from "../../../assets/images/shop/product-bg-2.jpg";
import top1 from "../../../assets/images/icons/top1.png";
import top2 from "../../../assets/images/icons/top2.png";
import top3 from "../../../assets/images/icons/top3.png";
import top4 from "../../../assets/images/icons/top4.png";
import top5 from "../../../assets/images/icons/top5.png";
import top6 from "../../../assets/images/icons/top6.png";
import { Link, useParams } from "react-router-dom";
import { Whatshot } from "@material-ui/icons";
import axios from "../../../axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBg: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      marginTop: "20px",
      marginBottom: "15px",
    },
    styleImg: { width: "100%" },
    styleBgProduct: { width: "49%" },
    styleCollect: {},
    styleHeading: {
      fontSize: "1rem",
      color: "rgba(0,0,0,.54)",
      textTransform: "uppercase",
    },
    styleHeadingPri: {
      fontSize: "1rem",
      color: "#ee4d2d",
      textTransform: "uppercase",
    },
    styleHeadingIcon: {
      fontSize: "1.25rem",
      color: "#ee4d2d",
      marginRight: "7px",
    },
    styleGrid: {
      margin: "10px 0",
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
    styleLink: {
      textDecoration: "none",
      color: "#fff",
      "&:hover div:nth-child(2)": {
        visibility: "visible",
      },
    },
    styleText: {
      position: "relative",
      fontFamily: "Roboto",
      background: "#fff",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-3px)",
        transition: "transform 0.3s ease",
      },
      "& p": {
        marginBottom: "5px",
        color: "rgba(0,0,0,.87)",
        lineHeight: "14px",
        fontSize: ".75rem",
        overflow: "hidden",
        display: "-webkit-box",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 2,
      },
      "& span": {
        color: "#ee4d2d",
      },
      "& div:nth-child(2)": {
        color: "rgba(0,0,0,.54)",
        fontSize: ".75rem",
      },
    },
    styleTopSearch: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "31px",
      zIndex: 2,
    },
    styleDiscount: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "36px",
      padding: "4px 2px 3px",
      backgroundColor: "rgba(255,212,36,.9)",
      textAlign: "center",
      zIndex: 2,
    },
    styleFooter: {
      position: "absolute",
      width: "100%",
      height: 0,
      left: "-2px",
      bottom: "-7px",
      borderColor: "transparent rgba(255,212,36,.9)",
      borderStyle: "solid",
      borderWidth: "0 18px 4px",
    },
    styleTrend: {
      color: "rgb(255,0,32) !important",
      border: "1px solid rgb(255,0,32)",
      padding: "1px 3px",
      borderRadius: "2px",
      width: "auto",
    },
  })
);

//use Navigation and Pagination
SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Params {
  id: string;
}

interface productModel {
  _id?: string;
  name: string;
  image: Array<string>;
  price: number;
  sold: number;
  inStock: number;
  discount: number;
  desc: string;
  numReviews: number;
  category?: string;
  brand?: string;
  slug?: string;
  size?: Array<string>;
  colour?: Array<string>;
  type?: Array<string>;
}

interface listProduct {
  listProduct?: Array<productModel>;
}

const Collection = () => {
  const classes = useStyles();

  const params: Params = useParams();

  const slides = [];
  for (let i = 0; i < 3; i++) {
    slides.push(
      <SwiperSlide key={i} tag="li">
        <img
          src={`/images/shop/banner-${i + 1}.jpg`}
          alt=""
          className={classes.styleImg}
        />
      </SwiperSlide>
    );
  }

  const [collectSold, setCollectSold] = useState<Array<productModel>>();
  const [collectTrend, setCollectTrend] = useState<Array<productModel>>();
  const [collectNew, setCollectNew] = useState<Array<productModel>>();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resCollectSold = await axios.get(
          `/product/brand/${params.id}?type=all&pageNumber=1&sortOrder=2`
        );
        const resCollectTrend = await axios.get(
          `/product/brand/${params.id}?type=all&pageNumber=1&sortOrder=2`
        );
        const resCollectnew = await axios.get(
          `/product/brand/${params.id}?type=all&pageNumber=1&sortOrder=1`
        );

        setCollectSold(resCollectSold.data.products);
        setCollectTrend(resCollectTrend.data.products);
        setCollectNew(resCollectnew.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [params?.id]);

  const toVND = (price: any) => {
    let vnd =
      typeof price === "undefined"
        ? 0
        : price.toLocaleString("vi-VN", {
            currency: "VND",
          });
    return vnd;
  };

  return (
    <Container>
      <img src={bgCollect1} alt="" className={classes.styleBg} />
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
      <Box display="flex" justifyContent="space-between" margin="15px 0">
        <img src={bgProduct1} alt="" className={classes.styleBgProduct} />
        <img src={bgProduct2} alt="" className={classes.styleBgProduct} />
      </Box>
      <Box className={classes.styleCollect}>
        <img src={bgCollect2} alt="" className={classes.styleBg} />
        <Box marginTop="10px">
          <p className={classes.styleHeading}>TÌM KIẾM HÀNG ĐẦU</p>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            className={classes.styleGrid}
          >
            {collectSold?.map((item, index) => (
              <Grid item xs={6} sm={3} md={2} key={item._id}>
                <Link to="/" className={classes.styleLink}>
                  <Box className={classes.styleText}>
                    <img
                      src={item?.image[0]}
                      alt=""
                      className={classes.styleImg}
                    />
                    <Box padding={1}>
                      <Typography>{item?.name}</Typography>
                      <Box
                        mt={2}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Box component="span" fontSize=".75rem">
                            đ{toVND(item?.price)}
                          </Box>
                          <Box component="span" fontSize="1rem"></Box>
                        </Box>
                        <Box>{item?.sold} sold</Box>
                      </Box>
                    </Box>
                    {index === 0 && (
                      <img
                        src={top1}
                        alt=""
                        className={classes.styleTopSearch}
                      />
                    )}
                    {index === 1 && (
                      <img
                        src={top2}
                        alt=""
                        className={classes.styleTopSearch}
                      />
                    )}
                    {index === 2 && (
                      <img
                        src={top3}
                        alt=""
                        className={classes.styleTopSearch}
                      />
                    )}
                    {index === 3 && (
                      <img
                        src={top4}
                        alt=""
                        className={classes.styleTopSearch}
                      />
                    )}
                    {index === 4 && (
                      <img
                        src={top5}
                        alt=""
                        className={classes.styleTopSearch}
                      />
                    )}
                    {index === 5 && (
                      <img
                        src={top6}
                        alt=""
                        className={classes.styleTopSearch}
                      />
                    )}
                    {item?.discount && (
                      <Box className={classes.styleDiscount}>
                        <Box
                          position="relative"
                          display="flex"
                          flexDirection="column"
                          width="100%"
                        >
                          <Typography variant="h5">
                            {item?.discount}%
                          </Typography>
                          <Typography variant="h3">GIẢM</Typography>
                          <Box className={classes.styleFooter}></Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box className={classes.styleCollect}>
        <img src={bgCollect3} alt="" className={classes.styleBg} />
        <Box marginTop="10px">
          <Box display="flex" alignItems="center">
            <Whatshot className={classes.styleHeadingIcon} />
            <p className={classes.styleHeadingPri}>DEAL HOT, MUA NGAY KẺO LỠ</p>
          </Box>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            className={classes.styleGrid}
          >
            {collectTrend?.map((item) => (
              <Grid item xs={6} sm={3} md={2} key={item._id}>
                <Link to="/" className={classes.styleLink}>
                  <Box className={classes.styleText}>
                    <img
                      src={item?.image[0]}
                      alt=""
                      className={classes.styleImg}
                    />
                    <Box padding={1}>
                      <Typography>{item?.name}</Typography>
                      <span className={classes.styleTrend}>#ShopXuHuong</span>
                      <Box
                        mt={2}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Box component="span" fontSize=".75rem">
                            đ{toVND(item?.price)}
                          </Box>
                          <Box component="span" fontSize="1rem"></Box>
                        </Box>
                        <Box>{item?.sold} sold</Box>
                      </Box>
                    </Box>
                    {item?.discount && (
                      <Box className={classes.styleDiscount}>
                        <Box
                          position="relative"
                          display="flex"
                          flexDirection="column"
                          width="100%"
                        >
                          <Typography variant="h5">
                            {item?.discount}%
                          </Typography>
                          <Typography variant="h3">GIẢM</Typography>
                          <Box className={classes.styleFooter}></Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box className={classes.styleCollect}>
        <img src={bgCollect4} alt="" className={classes.styleBg} />
        <Box marginTop="10px">
          <p className={classes.styleHeading}>HÀNG MỚI VỀ</p>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            className={classes.styleGrid}
          >
            {collectNew?.map((item) => (
              <Grid item xs={6} sm={3} md={2} key={item._id}>
                <Link to="/" className={classes.styleLink}>
                  <Box className={classes.styleText}>
                    <img
                      src={item?.image[0]}
                      alt=""
                      className={classes.styleImg}
                    />
                    <Box padding={1}>
                      <Typography>{item?.name}</Typography>
                      <Box
                        mt={2}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Box component="span" fontSize=".75rem">
                            đ{toVND(item?.price)}
                          </Box>
                          <Box component="span" fontSize="1rem"></Box>
                        </Box>
                        <Box>{item?.sold} sold</Box>
                      </Box>
                    </Box>
                    {item?.discount && (
                      <Box className={classes.styleDiscount}>
                        <Box
                          position="relative"
                          display="flex"
                          flexDirection="column"
                          width="100%"
                        >
                          <Typography variant="h5">
                            {item?.discount}%
                          </Typography>
                          <Typography variant="h3">GIẢM</Typography>
                          <Box className={classes.styleFooter}></Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Collection;
