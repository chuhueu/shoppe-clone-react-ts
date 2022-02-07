import React, { useState, useEffect } from "react";
import {
  rating5star,
  rating4star,
  rating3star,
} from "../../constants/recommned";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  TextField,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { reviewState } from "../../redux/reducers/reviewReducer";
import { postReview } from "../../redux/actions/reviewAction";
import { detailProductState } from "../../redux/reducers/productReducer";
import { Link } from "react-router-dom";
//import axios from "../../axios";
import Rating from "./Rating";
import Upload from "./Upload";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleDialog: {
      fontFamily: "Roboto",
    },
    styleBox: {
      maxHeight: "calc(100vh - 120px)",
      width: "45.625rem !important",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    styleLink: {
      textDecoration: "none",
      "& img": {
        width: "80px",
      },
    },
    styleSelect: {
      cursor: "pointer",
      userSelect: "none",
      display: "inline-block",
      padding: "0.5rem 0.75rem",
      border: "1px solid rgba(0, 0, 0, 0.09)",
      borderRadius: "1rem",
      margin: "0px 0.25rem 1.125rem",
      color: "rgb(34, 34, 34)",
      fontWeight: 500,
      transition:
        "color 0.1s cubic-bezier(0.4, 0, 0.6, 1) 0s, border-color 0.1s cubic-bezier(0.4, 0, 0.6, 1) 0s",
      wordBreak: "break-word",
    },
    styleSelected: {
      // borderColor: (selected) => (selected ? "#ee4d2d" : "rgba(0, 0, 0, 0.09)"),
      // color: (selected) => (selected ? "#ee4d2d" : "rgb(34, 34, 34)"),
      borderColor: "#ee4d2d",
      color: "#ee4d2d",
    },
    styleSelectReview: {},
    styleButtonOutlined: {
      border: "1px solid rgba(0,0,0,.09)",
      background: "#fff",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
      textTransform: "capitalize",
      color: "#555",
      marginRight: theme.spacing(2),
    },
    styleButton: {
      background: "#ee4d2d",
      color: "#fff",
      border: "1px solid rgba(0,0,0,.09)",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
      borderRadius: "2px!important",
      height: "40px",
      textTransform: "capitalize",
      "&:hover": {
        background: "#ee4d2d",
        opacity: "0.9",
        transition: "0.1s",
      },
    },
  })
);

const ReviewDialog = ({
  showReview,
  setShowReview,
  params,
  reload,
  setReload,
}: any) => {
  const [selected, setSelected] = useState(false);
  const [progress, setProgress] = useState(0);
  //styles
  //const selected = { borderColor: "#ee4d2d", color: "#ee4d2d" };
  const classes = useStyles();

  //state
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const handleBack = () => {
    setShowReview(false);
  };
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
  const detailProduct = useSelector<RootState, detailProductState>(
    (state) => state.detailProduct
  );
  const { productInfo } = detailProduct;
  const dispatch = useDispatch();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(
      postReview(
        params.infoID,
        userInfo._id,
        userInfo.username,
        userInfo.avatar,
        rating,
        comment,
        image,
        video
      )
    );
    setReload(!reload);
    setShowReview(false);
  };

  const [activeIndex, setActiveIndex] = useState<any>();
  const recommend = clsx(classes.styleSelect, {
    [classes.styleSelected]: activeIndex,
  });
  return (
    <Dialog open={showReview} maxWidth="lg" className={classes.styleDialog}>
      <Box padding={2} className={classes.styleBox}>
        <DialogTitle>
          <Typography variant="h6" style={{ fontSize: "20px" }}>
            Đánh Giá Sản Phẩm
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box mt={3} mb={2}>
            <Link
              to={{ pathname: "/info/" + params.infoID }}
              className={classes.styleLink}
            >
              <Box display="flex">
                <img src={productInfo?.image[0]} alt={productInfo?.name} />
                <Box ml={1} display="flex" flexDirection="column">
                  <Box fontWeight="600" color="rgba(0, 0, 0, 0.8)">
                    {productInfo?.name}
                  </Box>
                  <Box mt={1} fontWeight="300" color="rgba(0, 0, 0, 0.26)">
                    Phân loại hàng: NÂU, XL
                  </Box>
                </Box>
              </Box>
            </Link>
            <Box
              mt={2}
              mb={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Rating rating={rating} setRating={setRating} />
            </Box>
            <Box textAlign="center" className={classes.styleSelectReview}>
              {/* {rating === 5 && (
                <>
                  <Box className={recommend}>Chất lượng sản phẩm tuyệt vời</Box>
                  <Box className={recommend}>
                    Đóng gói sản phẩm rất đẹp và chắc chắn
                  </Box>
                  <Box className={recommend}>Shop phục vụ rất tốt</Box>
                </>
              )} */}
              {rating === 5 &&
                rating5star.map((item, index) => {
                  return (
                    <Box
                      key={index}
                      className={clsx(classes.styleSelect, {
                        [classes.styleSelected]: index === activeIndex,
                      })}
                      onClick={() => setActiveIndex(index)}
                    >
                      {item}
                    </Box>
                  );
                })}
              {rating === 4 &&
                rating4star.map((item, index) => {
                  return (
                    <Box
                      key={index}
                      className={clsx(classes.styleSelect, {
                        [classes.styleSelected]: index === activeIndex,
                      })}
                      onClick={() => setActiveIndex(index)}
                    >
                      {item}
                    </Box>
                  );
                })}
              {rating === 3 &&
                rating3star.map((item, index) => {
                  return (
                    <Box
                      key={index}
                      className={clsx(classes.styleSelect, {
                        [classes.styleSelected]: index === activeIndex,
                      })}
                      onClick={() => setActiveIndex(index)}
                    >
                      {item}
                    </Box>
                  );
                })}
            </Box>
            <Upload
              image={image}
              setImage={setImage}
              video={video}
              setVideo={setVideo}
              setComment={setComment}
              progress={progress}
              setProgress={setProgress}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box display="flex">
            <Button
              className={classes.styleButtonOutlined}
              variant="outlined"
              onClick={handleBack}
            >
              Trở lại
            </Button>
            {progress > 0 && progress < 100 ? (
              <Button
                variant="outlined"
                className={classes.styleButton}
                disabled
              >
                Hoàn Thành
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={classes.styleButton}
                onClick={handleSubmit}
              >
                Hoàn Thành
              </Button>
            )}
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ReviewDialog;
