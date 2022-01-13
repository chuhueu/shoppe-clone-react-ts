import { Container, Box, Button, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  FavoriteBorderOutlined,
  Star,
  StarHalf,
  LocalShippingOutlined,
  KeyboardArrowDown,
  Remove,
  Add,
  AddShoppingCart,
} from "@material-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../assets/css/navigation.css";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import productModel from "../../models/productModel";
import axios from "../../axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { userState } from "../../redux/reducers/userReducer";
import { addToCart } from "../../redux/actions/cartAction";
import ModalAddCart from "../cartpage/ModalAddCart";

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
    styleLabel: {
      color: "#757575",
      fontSize: "18px",
    },
    styleChooseColor: {
      "& button": {
        marginRight: theme.spacing(2),
        transition: "0s",
        textTransform: "capitalize",
      },
      "& button:hover": {
        color: "#ee4d2d",
        border: "1px solid #ee4d2d",
        background: " rgba(255,87,34,0.1)",
        transition: "0s",
      },
    },
    styleCount: {
      background: "#fff",
      "& input": {
        width: "50px",
        height: "32px",
        borderLeft: 0,
        borderRight: 0,
        fontSize: "16px",
        fontWeight: 400,
        "-moz-box-sizing": "border-box",
        boxSizing: "border-box",
        textAlign: "center",
        cursor: "text",
        borderRadius: 0,
      },
      "& button:nth-child(1)": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    styleQuantity: {
      color: "#757575",
      outline: "none",
      cursor: "pointer",
      lineHeight: "1",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color .1s cubic-bezier(.4,0,.6,1)",
      border: "1px solid rgba(0,0,0,.09)",
      borderRadius: "2px",
      background: "transparent",
      width: "32px",
      height: "32px",
    },
    styleButtonCart: {
      "& button": {
        minWidth: "11.25rem",
        padding: "12px",
        textTransform: "capitalize",
      },
      "& button:nth-child(1)": {
        marginRight: theme.spacing(2),
        color: "#ee4d2d",
        background: "rgba(255,87,34,0.1)",
        border: "1px solid #ee4d2d",
      },
      "& button:nth-child(1):hover": {
        background: "#fff",
      },
      "& button:nth-child(2)": {
        color: "#fff",
        background: "#ee4d2d",
      },
    },
  })
);
SwiperCore.use([Navigation, Thumbs]);

export interface Params {
  name?: string;
  infoID?: string;
}

interface Props {
  reload?: boolean;
  setReload?: any;
}

const MainProduct = ({ reload, setReload }: Props) => {
  //styles
  const classes = useStyles();
  //state
  const [count, setCount] = useState<number>(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [product, setProduct] = useState<productModel>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const params: Params = useParams();
  const history = useHistory();
  //console.log(params?.name);
  const userLogin = useSelector<RootState, userState>(
    (state) => state.userLogin
  );
  const { userInfo } = userLogin;
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("/product/" + params?.infoID);
        //console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [params?.infoID]);

  const toVND = (price: any) => {
    let vnd =
      typeof price === "undefined"
        ? 0
        : price.toLocaleString("vi-VN", {
            currency: "VND",
          });
    return vnd;
  };

  const priceDiscount = (price: any, discount: any) => {
    return toVND(price - price * (discount / 100));
  };

  const minusQuantity = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const dispatch = useDispatch();

  const addCart = async () => {
    await dispatch(
      addToCart(
        product?._id,
        product?.brand,
        product?.name,
        product?.image[0],
        product?.price,
        product?.discount,
        count
      )
    );
    setReload(!reload);
    setOpenModal(!openModal);
    setTimeout(() => {
      setOpenModal(false);
    }, 3000);
  };
  return (
    <Container>
      <ModalAddCart openModal={openModal} />
      <Box mt={2} className={classes.styleBox}>
        <Grid container spacing={2} className={classes.styleGrid}>
          <Grid item xs={12} sm={6} md={5}>
            <Box>
              <Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                slidesPerColumn={1}
                thumbs={{ swiper: thumbsSwiper }}
              >
                {product?.image.map((img) => {
                  return (
                    <SwiperSlide tag="li">
                      <img src={img} alt="" />
                    </SwiperSlide>
                  );
                })}
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
                {product?.image.map((img) => {
                  return (
                    <SwiperSlide tag="li">
                      <img src={img} alt="" />
                    </SwiperSlide>
                  );
                })}
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
                <Box>đ{toVND(product?.price)}</Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.stylePriceDis}
                >
                  <Box>đ{priceDiscount(product?.price, product?.discount)}</Box>
                  <Box>{product?.discount}% Giảm</Box>
                </Box>
              </Box>
            </Box>
            <Box mt={2} padding="0 1.25rem">
              <Box display="flex" flexDirection="column">
                <Box pb={2.5} display="flex" alignItems="flex-start">
                  <Box component="label" pr={5} className={classes.styleLabel}>
                    Ship
                  </Box>
                  <Box display="flex">
                    <Box mr={1}>
                      <LocalShippingOutlined />
                    </Box>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" alignItems="center" mb={2}>
                        <Box width={110} className={classes.styleLabel}>
                          Incoming Shipping
                        </Box>
                        <Box fontWeight="600">
                          Quang Ha Town, Hai Ha District
                        </Box>
                        <KeyboardArrowDown />
                      </Box>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Box width={110} className={classes.styleLabel}>
                          Shipping Charges
                        </Box>
                        <Box>Not Supported</Box>
                        <KeyboardArrowDown />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column">
                  <Box display="flex" alignItems="center" mb={4}>
                    <Box
                      component="label"
                      pr={5}
                      className={classes.styleLabel}
                    >
                      Colour
                    </Box>
                    <Box className={classes.styleChooseColor}>
                      <Button variant="outlined" disabled>
                        White
                      </Button>
                      <Button variant="outlined">Black</Button>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Box
                      component="label"
                      pr={5}
                      className={classes.styleLabel}
                    >
                      Amount
                    </Box>
                    <Box display="flex" className={classes.styleCount}>
                      <button
                        className={classes.styleQuantity}
                        onClick={minusQuantity}
                      >
                        <Remove />
                      </button>
                      <input value={count} className={classes.styleQuantity} />
                      <button
                        className={classes.styleQuantity}
                        onClick={() => setCount(count + 1)}
                      >
                        <Add />
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" className={classes.styleButtonCart}>
                {userInfo ? (
                  <Button variant="outlined" onClick={addCart}>
                    <AddShoppingCart /> Add To Cart
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => history.push("/login")}
                  >
                    <AddShoppingCart /> Add To Cart
                  </Button>
                )}

                <Button variant="outlined">Buy Now</Button>
              </Box>
              <Box mt={4} borderTop="1px solid rgba(0, 0, 0, 0.05)">
                <Box
                  mt={3}
                  display="flex"
                  textAlign="center"
                  alignItems="center"
                >
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/67454c89080444c5997b53109072c9e0.png"
                    alt=""
                    style={{ width: "20px" }}
                  />
                  <Box mr={3} component="span" color="#222">
                    Shopee Guarantee
                  </Box>
                  <Box component="span" color="rgba(0,0,0,.54)">
                    3 Days of Return / Refund
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainProduct;
