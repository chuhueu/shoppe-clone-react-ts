import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import shopLogo from "../../../assets/images/shop/shop-logo-1.jpg";
import shopBg from "../../../assets/images/shop/shop-bg-1.jpg";
import { Link } from "react-router-dom";
import {
  Add,
  GroupAddOutlined,
  Message,
  PeopleAltOutlined,
  PersonAddOutlined,
  StarBorderOutlined,
  Storefront,
  TextsmsOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: { padding: "1.25rem 0" },
    styleLeft: {
      position: "relative",
      borderRadius: "0.25rem",
      minHeight: "135px",
    },
    styleBlur: {
      position: "absolute",
      borderRadius: "0.25rem",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,.6)",
      zIndex: 2,
    },
    styleBg: {
      position: "absolute",
      borderRadius: "0.25rem",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 1,
      filter: "blur(2px)",
    },
    styleInfo: {
      position: "absolute",
      top: "0.625rem",
      bottom: "0.625rem",
      left: "1.25rem",
      right: "0.875rem",
      zIndex: 3,
    },
    styleAvatar: {
      height: "5rem",
      width: "5rem",
      borderWidth: "0.25rem",
      borderColor: "hsla(0,0%,100%,.4)",
      borderRadius: "50%",
      border: "0.0625rem solid rgba(0,0,0,.09)",
    },
    styleAvatarImg: {
      width: "100%",
      borderRadius: "50%",
    },
    styleInfoName: { marginLeft: "10px" },
    styleName: {
      color: "#fff",
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      maxHeight: "3rem",
      fontWeight: 400,
      overflow: "hidden",
      wordWrap: "break-word",
    },
    styleTime: {
      color: "hsla(0,0%,100%,.7)",
      fontSize: "0.75rem",
      lineHeight: "1.5rem",
      maxHeight: "3rem",
      fontWeight: 400,
      margin: "0.3125rem 0 0.375rem",
    },
    styleAction: {
      textDecoration: "none",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "1.5625rem",
      textTransform: "uppercase",
      fontSize: "0.75rem",
      padding: "0.3125rem 0",
      border: "1px solid #fff",
      borderRadius: "2px",
      background: "transparent",
      width: "100%",
      margin: "0 5px",
    },
    styleActionText: { marginLeft: "5px" },
    styleRight: { paddingTop: "10px", paddingLeft: "30px" },
    styleItem: { padding: "0.625rem 0" },
    styleIcon: {
      fontSize: "18px",
      fontWeight: 400,
      marginRight: "10px",
      opacity: "0.7",
    },
    styleTextPri: { color: "#ee4d2d", fontSize: "14px", marginLeft: "5px" },
  })
);

interface Props {
  brandInfo?: any;
}

const ShopInfoTop = ({ brandInfo }: Props) => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.styleWrapper}>
        <Grid container>
          <Grid item lg={4}>
            <Box className={classes.styleLeft}>
              <img src={shopBg} alt="" className={classes.styleBg} />
              <Box className={classes.styleBlur}></Box>
              <Box className={classes.styleInfo}>
                <Box display="flex" alignItems="center">
                  <Box className={classes.styleAvatar}>
                    <img
                      src={brandInfo?.image}
                      alt=""
                      className={classes.styleAvatarImg}
                    />
                  </Box>
                  <Box className={classes.styleInfoName}>
                    <p className={classes.styleName}>{brandInfo?.name}</p>
                    <p className={classes.styleTime}>Online 45 phút trước</p>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  marginTop="0.625rem"
                >
                  <Link to="/" className={classes.styleAction}>
                    <Add />
                    <p className={classes.styleActionText}>THEO DÕI</p>
                  </Link>
                  <Link to="/" className={classes.styleAction}>
                    <Message />
                    <p className={classes.styleActionText}>CHAT</p>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8}>
            <Grid container className={classes.styleRight}>
              <Grid item lg={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.styleItem}
                >
                  <Storefront className={classes.styleIcon} />
                  <Typography variant="h4">Sản phẩm:</Typography>
                  <p className={classes.styleTextPri}>702</p>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.styleItem}
                >
                  <PersonAddOutlined className={classes.styleIcon} />
                  <Typography variant="h4">Đang Theo:</Typography>
                  <p className={classes.styleTextPri}>10</p>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.styleItem}
                >
                  <TextsmsOutlined className={classes.styleIcon} />
                  <Typography variant="h4">Tỷ Lệ Phản Hồi Chat:</Typography>
                  <p className={classes.styleTextPri}>89% (Trong Vài Giờ)</p>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.styleItem}
                >
                  <PeopleAltOutlined className={classes.styleIcon} />
                  <Typography variant="h4">Người Theo Dõi:</Typography>
                  <p className={classes.styleTextPri}>3,2k</p>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.styleItem}
                >
                  <StarBorderOutlined className={classes.styleIcon} />
                  <Typography variant="h4">Đánh Giá:</Typography>
                  <p className={classes.styleTextPri}>5.0 (172 Đánh Giá)</p>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.styleItem}
                >
                  <GroupAddOutlined className={classes.styleIcon} />
                  <Typography variant="h4">Tham Gia:</Typography>
                  <p className={classes.styleTextPri}>6 Tháng Trước</p>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ShopInfoTop;
