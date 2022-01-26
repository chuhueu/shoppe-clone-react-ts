import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Container } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import bg1 from "../../assets/images/shop/bg-1.jpg";
import bg2 from "../../assets/images/shop/bg-2.jpg";
import bg3 from "../../assets/images/shop/bg-3.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: { paddingTop: "1.25rem" },
    styleWrapper: {
      backgroundColor: "#fff",
      borderRadius: "0.125rem",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 5%)",
      margin: "0.625rem 0",
      padding: "1.25rem 1.875rem 2.1875rem",
    },
    styleHeading: {
      fontSize: "18px",
      fontWeight: 300,
      letterSpacing: "0.04rem",
      textTransform: "uppercase",
      marginBottom: "0.625rem",
    },
    styleItem: {
      width: "100%",
      padding: "0 8px",
      paddingTop: "0.3125rem",
      height: "6.75rem",
      boxShadow: "0.125rem 0.125rem 0.3125rem rgb(0 0 0 / 7%)",
      position: "relative",
      background:
        "linear-gradient(90deg,transparent 0 0.25rem,#fff4f4 0.25rem)",
      border: "1px solid #fbc9c0",
      borderLeft: "none",
      cursor: "pointer",
    },
    styleLeft: { padding: "0 5px" },
    styleRight: {},
    styleTicket: {
      position: "absolute",
      top: 0,
      left: 0,
      background:
        "linear-gradient(90deg,transparent 0 0.25rem,#fff4f4 0.25rem)",
      borderTop: "1px solid #fbc9c0",
      borderBottom: "1px solid #fbc9c0",
      width: "0.3125rem",
      height: "100%",
    },
    styleTicketChild: {
      background:
        "radial-gradient(circle at 0 0.375rem,transparent 0,rgba(0,0,0,.03) 0.1875rem,#fbc9c0 0,#fbc9c0 0.25rem,#fff4f4 0)",
      backgroundSize: "0.25rem 0.625rem",
      backgroundRepeat: "repeat-y",
      height: "100%",
    },
    styleTitle1: {
      color: "#ee4d2d",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      fontWeight: 400,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    styleTitle2: {
      color: "#ee4d2d",
      fontSize: "0.875rem",
      lineHeight: "1rem",
      fontWeight: 400,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    styleDate: {
      color: "rgba(0,0,0,.54)",
      fontSize: "0.625rem",
      lineHeight: "0.75rem",
      fontWeight: 400,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      margin: "0.3125rem 0.3125rem 0 0",
    },
    styleButton: {
      backgroundColor: "#ee4d2d",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#eb6348",
      },
    },
    styleBanner: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      margin: "5px 0",
    },
  })
);

const ShopVoucher = () => {
  const classes = useStyles();

  return (
    <Container className={classes.styleContainer}>
      <Box className={classes.styleWrapper}>
        <p className={classes.styleHeading}>MÃ GIẢM GIÁ CỦA SHOP</p>
        <Swiper slidesPerView={3} spaceBetween={20}>
          <SwiperSlide>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box className={classes.styleTicket}>
                <Box className={classes.styleTicketChild}></Box>
              </Box>
              <Box className={classes.styleLeft}>
                <p className={classes.styleTitle1}>Giảm ₫10k</p>
                <p className={classes.styleTitle2}>Đơn Tối Thiểu ₫68k</p>
                <p className={classes.styleDate}>HSD: 28.02.2022</p>
              </Box>
              <Box className={classes.styleRight}>
                <Button className={classes.styleButton}>Lưu</Button>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box className={classes.styleTicket}>
                <Box className={classes.styleTicketChild}></Box>
              </Box>
              <Box className={classes.styleLeft}>
                <p className={classes.styleTitle1}>Giảm ₫20k</p>
                <p className={classes.styleTitle2}>Đơn Tối Thiểu ₫381k</p>
                <p className={classes.styleDate}>HSD: 28.02.2022</p>
              </Box>
              <Box className={classes.styleRight}>
                <Button className={classes.styleButton}>Lưu</Button>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Box className={classes.styleTicket}>
                <Box className={classes.styleTicketChild}></Box>
              </Box>
              <Box className={classes.styleLeft}>
                <p className={classes.styleTitle1}>Giảm ₫30k</p>
                <p className={classes.styleTitle2}>Đơn Tối Thiểu ₫568k</p>
                <p className={classes.styleDate}>HSD: 28.02.2022</p>
              </Box>
              <Box className={classes.styleRight}>
                <Button className={classes.styleButton}>Lưu</Button>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <img src={bg1} alt="" className={classes.styleBanner} />
      <img src={bg2} alt="" className={classes.styleBanner} />
      <img src={bg3} alt="" className={classes.styleBanner} />
    </Container>
  );
};

export default ShopVoucher;
