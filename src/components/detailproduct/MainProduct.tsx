import { Container, Box, Hidden, Button, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  FavoriteBorderOutlined,
  Star,
  StarHalf,
  LocalShippingOutlined,
  KeyboardArrowDown,
} from "@material-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../assets/css/navigation.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productModel from "../../models/productModel";
import axios from "../../axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      background: "#fff",
    },
    styleGrid: {
      padding: "20px",
      "& img": {
        width: "100%",
      },
    },
    styleThumbs: {
      cursor: "pointer",
      "& li img:hover": {
        border: "1px solid #ee4d2d",
      },
    },
    styleShare: {
      color: "#222",
      fontSize: "18px",
      "& svg": {
        color: "rgb(255, 66, 79)",
        fontSize: "30px",
        marginRight: "7px",
      },
    },
    styleHead: {
      fontFamily: "Roboto",
      "& div": {
        backgroundColor: "#ee4d2d",
        color: "#fff",
        padding: "3px",
        fontSize: "13px",
        fontWeight: 500,
        borderRadius: "3px",
        marginRight: "10px",
      },
      "& span": {
        fontSize: "24px",
      },
    },
    styleStatistic: {
      padding: "0 15px",
      borderRight: "1px solid rgba(0,0,0,.14)",
      "& div:nth-child(1)": {
        borderBottom: "1px solid #555",
        marginRight: "4px",
        fontSize: "1.32rem",
        paddingBottom: "1px",
      },
      "& div:nth-child(2)": {
        padding: "4px 0",
        marginRight: "5px",
        fontFamily: "Roboto",
        color: "#767676",
        textTransform: "capitalize",
      },
      "& svg": {
        color: "#ee4d2d",
        fontSize: "1.3rem",
      },
    },
    styleStar: {
      fontFamily: "Roboto",
      color: "#ee4d2d",
      borderBottomColor: "#ee4d2d",
    },
    stylePrice: {
      padding: "15px 25px",
      background: "#fafafa",
      "& div": {
        marginRight: theme.spacing(1.5),
      },
      "& div:nth-child(1)": {
        fontFamily: "Roboto",
        fontSize: "1rem",
        textDecoration: "line-through",
        color: "#929292",
      },
    },
    stylePriceDis: {
      fontFamily: "Roboto",
      "& div:nth-child(1)": {
        fontSize: "1.875rem",
        fontWeight: "500",
        color: "#ee4d2d",
        textDecoration: "none",
      },
      "& div:nth-child(2)": {
        backgroundColor: "#ee4d2d",
        color: "#fff",
        padding: "3px",
        fontSize: "13px",
        fontWeight: 500,
        borderRadius: "3px",
        marginRight: "10px",
      },
    },
  })
);
SwiperCore.use([Navigation, Thumbs]);

export interface Params {
  infoID?: string;
}

const MainProduct = () => {
  //styles
  const classes = useStyles();
  //state
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [product, setProduct] = useState<productModel>();
  const params: Params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("product/" + params?.infoID);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [params?.infoID]);
  const slides = [];
  for (let i = 0; i < 6; i++) {
    slides.push(
      <SwiperSlide key={`thumbs-${i}`} tag="li">
        <img src={`/images/detailproduct/thumbs-${i + 1}.png`} alt="" />
      </SwiperSlide>
    );
  }
  return (
    <Container>
      <Box mt={2} className={classes.styleBox}>
        <Grid container spacing={2} className={classes.styleGrid}>
          <Grid item xs={12} sm={6} md={5}>
            <Box>
              {/* {product?.image.map((img) => {
                return (

                )
              })} */}
              <Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                slidesPerColumn={1}
                thumbs={{ swiper: thumbsSwiper }}
              >
                {slides}
              </Swiper>
            </Box>
            <Box mt={1}>
              <Swiper
                id="thumbs"
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                className={classes.styleThumbs}
              >
                {slides}
              </Swiper>
            </Box>
            <Box
              display="flex"
              mt={2}
              justifyContent="space-between"
              alignItems="center"
              className={classes.styleShare}
            >
              <Box display="flex" alignItems="center">
                <Box>Share:</Box>
                <img src="/images/detailproduct/social.png" alt="" />
              </Box>
              <Box display="flex" alignItems="center">
                <FavoriteBorderOutlined />
                <Box>Đã thích (795)</Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <Box padding={1}>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleHead}
              >
                <Box>Yêu Thích</Box>
                <Box component="span">{product?.name}</Box>
              </Box>
            </Box>
            <Box display="flex" mt={1}>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleStatistic}
              >
                <Box
                  className={classes.styleStar}
                  style={{ borderBottomColor: "#ee4d2d" }}
                >
                  4.7
                </Box>
                <Box>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StarHalf />
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleStatistic}
              >
                <Box>199</Box>
                <Box>Đánh giá</Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.styleStatistic}
                style={{ border: 0 }}
              >
                <Box style={{ border: 0 }}>{product?.sold}</Box>
                <Box>Đã Bán</Box>
              </Box>
            </Box>
            <Box mt={2}>
              <Box
                display="flex"
                alignItems="center"
                className={classes.stylePrice}
              >
                <Box>đ75.000</Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.stylePriceDis}
                >
                  <Box>đ60.000</Box>
                  <Box>{product?.discount}% Giảm</Box>
                </Box>
              </Box>
            </Box>
            <Box mt={2} padding="0 1.25rem">
              <Box display="flex" flexDirection="column">
                <Box pb={2.5} display="flex" alignItems="flex-start">
                  <Box component="label">Ship</Box>
                  <Box display="flex">
                    <Box>
                      <LocalShippingOutlined />
                    </Box>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" alignItems="center">
                        <Box>Incoming Shipping</Box>
                        <Box>Ba Vi District</Box>
                        <KeyboardArrowDown />
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Box>Shipping Charges</Box>
                        <Box>Not Supported</Box>
                        <KeyboardArrowDown />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainProduct;
