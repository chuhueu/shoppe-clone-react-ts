import React, { useEffect, useState } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import {
  Box,
  Button,
  Grid,
  Container,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Star, ThumbUpAlt, MoreVert } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import ReviewDialog from "./ReviewDialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { reviewState, Review } from "../../redux/reducers/reviewReducer";
import {
  filterByStar,
  filterByImageOrVideo,
  getReview,
  getStatic,
} from "../../redux/actions/reviewAction";
//import axios from "../../axios";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContentLeft: {
      background: "#fff",
      padding: "1.5625rem",
    },
    styleContentRight: {
      background: "#fff",
      marginLeft: "16px",
    },
    styleHeaderLeft: {
      marginBottom: theme.spacing(2),
      fontSize: "1.125rem",
    },
    styleOverview: {
      backgroundColor: "#fffbf8",
      minHeight: "5rem",
      border: "1px solid #f9ede5",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      borderRadius: "2px",
      boxSizing: "border-box",
      padding: "1.875rem",
    },
    styleOverviewFilter: {
      cursor: "pointer",
      userSelect: "none",
      height: "2rem",
      lineHeight: "2rem",
      minWidth: " 6.25rem",
      textAlign: "center",
      padding: "0 .625rem",
      backgroundColor: " #fff",
      border: "1px solid rgba(0,0,0,.09)",
      boxSizing: "border-box",
      display: "inline-block",
      marginRight: ".5rem",
      textDecoration: "none",
      textTransform: "capitalize",
      borderRadius: "2px",
      marginBottom: ".3125rem",
      marginTop: ".3125rem",
    },
    styleSelected: {
      borderColor: "#ee4d2d",
      color: "#ee4d2d",
    },
    styleReviewList: {
      borderBottom: "1px solid rgba(0,0,0,.09)",
      padding: "1rem 0 1rem 1.25rem",
    },
    styleAvatar: {
      width: "50px",
      borderRadius: "50%",
    },
    styleStar: {
      "& svg": {
        fontSize: "15px",
        //color: "#ee4d2d",
      },
      // "& span": {
      //   color: "#ee4d2d",
      // },
    },
    styleComment: {
      position: "relative",
      boxSizing: "border-box",
      margin: ".9375rem 0",
      fontSize: ".875rem",
      lineHeight: "1.25rem",
      color: "rgba(0,0,0,.87)",
      wordBreak: "break-word",
      whiteSpace: "pre-wrap",
    },
    styleImg: {
      maxWidth: "100px",
      objectFit: "cover",
      marginRight: "5px",
    },
    styleVideo: {
      marginRight: "5px",
    },
  })
);
const StyledRating = withStyles({
  iconFilled: {
    color: "#ee4d2d",
  },
})(Rating);
interface Params {
  infoID: string;
}
const ReviewProduct = () => {
  //styles
  const classes = useStyles();
  const [filter, setFilter] = useState(false);
  //state
  const params: Params = useParams();
  const [showReview, setShowReview] = useState(false);
  const [reload, setReload] = useState(false);
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
  const { review, statistic } = useSelector<RootState, reviewState>(
    (state) => state.reviewReducer
  );
  const dispatch = useDispatch();
  const handleFilter = (rating: number) => {
    dispatch(filterByStar(rating, params.infoID));
  };
  useEffect(() => {
    dispatch(getReview(params.infoID));
    dispatch(getStatic(params.infoID));
  }, [dispatch, params.infoID, reload]);
  return (
    <Container>
      <Box mt={2} mb={2} fontFamily="Roboto">
        <Grid container>
          <Grid item sm={12} md={9}>
            <Box className={classes.styleContentLeft}>
              <Box className={classes.styleHeaderLeft}>ĐÁNH GIÁ SẢN PHẨM</Box>
              <Box className={classes.styleOverview}>
                <Box textAlign="center" mr={2}>
                  <Box color="#ee4d2d" fontSize="1.125rem">
                    <Box component="span" fontSize="1.875rem" mr={1}>
                      {statistic.rateAvg.toFixed(1)}
                    </Box>
                    <Box component="span">trên 5</Box>
                    <Box mt={1} color="#ee4d2d">
                      <StyledRating
                        value={statistic.rateAvg}
                        precision={0.5}
                        readOnly
                      />
                    </Box>
                  </Box>
                </Box>
                <Box flex="1" ml={1}>
                  <Box
                    className={clsx(
                      classes.styleOverviewFilter,
                      classes.styleSelected
                    )}
                  >
                    Tất cả
                  </Box>
                  <Box
                    className={classes.styleOverviewFilter}
                    onClick={() => handleFilter(5)}
                  >
                    5 Sao ({statistic?.star5})
                  </Box>
                  <Box
                    className={classes.styleOverviewFilter}
                    onClick={() => handleFilter(4)}
                  >
                    4 Sao ({statistic?.star4})
                  </Box>
                  <Box
                    className={classes.styleOverviewFilter}
                    onClick={() => handleFilter(3)}
                  >
                    3 Sao ({statistic?.star3})
                  </Box>
                  <Box
                    className={classes.styleOverviewFilter}
                    onClick={() => handleFilter(2)}
                  >
                    2 Sao ({statistic?.star2})
                  </Box>
                  <Box
                    className={classes.styleOverviewFilter}
                    onClick={() => handleFilter(1)}
                  >
                    1 Sao ({statistic?.star1})
                  </Box>
                  <Box className={classes.styleOverviewFilter}>
                    Có Bình luận ({statistic?.review})
                  </Box>
                  <Box
                    className={classes.styleOverviewFilter}
                    onClick={() =>
                      dispatch(filterByImageOrVideo(params.infoID))
                    }
                  >
                    Có hình ảnh / video ({statistic?.reviewHasImageOrVideo})
                  </Box>
                </Box>
              </Box>
              <Box mt={1}>
                {review &&
                  review?.map((item) => {
                    // dispatch(getUserForComment(item.id));
                    return (
                      <Box
                        display="flex"
                        className={classes.styleReviewList}
                        key={item._id}
                      >
                        <Box mr={1}>
                          <img
                            src={item?.avatar}
                            alt=""
                            className={classes.styleAvatar}
                          />
                        </Box>
                        <Box flex="1">
                          <Box>{item?.username}</Box>
                          <Box className={classes.styleStar}>
                            <StyledRating value={item?.rating} readOnly />
                          </Box>
                          <Box
                            mt={1}
                            mb={1}
                            component="span"
                            color="rgba(0,0,0,.4)"
                            fontWeight="300"
                          >
                            Phân loại hàng: NÂU, XL
                          </Box>
                          <Box mt={2} mb={2} className={classes.styleComment}>
                            {item?.comment}
                          </Box>
                          <Box display="flex">
                            {item?.image && (
                              <img
                                src={item?.image}
                                alt=""
                                className={classes.styleImg}
                              />
                            )}
                            {item?.video && (
                              <video
                                src={item?.video}
                                width="100"
                                height="100"
                                className={classes.styleVideo}
                                controls
                              ></video>
                            )}
                          </Box>
                          <Box
                            mt={1}
                            mb={2}
                            fontSize=".75rem"
                            color="rgba(0,0,0,.54)"
                          >
                            {new Date(`${item?.createdAt}`).toLocaleString(
                              "en-Us"
                            )}
                          </Box>
                          <Box
                            mt={2}
                            display="flex"
                            alignItems="center"
                            color="rgba(0,0,0,.4)"
                          >
                            <Box mr={1}>
                              <ThumbUpAlt />
                            </Box>
                            <Box>Hữu Ích?</Box>
                            <Box marginLeft="auto">
                              <MoreVert />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })
                ) : (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    height="25rem"
                  >
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/eac95a8ac896158642c2761a9e9cd52e.png"
                      alt=""
                    />
                    <Box mt={3} fontSize="1rem">
                      Chưa có đánh giá
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Hidden mdDown>
            <Grid item md={3}>
              <Box className={classes.styleContentRight}>
                <Button
                  variant="outlined"
                  style={{ marginLeft: "10px" }}
                  onClick={() => setShowReview(true)}
                >
                  Review
                </Button>
              </Box>
              <ReviewDialog
                showReview={showReview}
                setShowReview={setShowReview}
                params={params}
                reload={reload}
                setReload={setReload}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReviewProduct;
