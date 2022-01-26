import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CameraAlt, VideoCall } from "@material-ui/icons";
import axios from "../../axios";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../constants/firebase";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleInput: {
      position: "relative",
      backgroundColor: " rgb(250, 250, 250)",
      padding: "1.25rem 1.5625rem 0.9375rem",
    },
    styleTextarea: {
      resize: "none",
      overflow: "hidden",
      overflowWrap: "break-word",
      height: "100px",
      minHeight: " 6.25rem",
      display: "block",
      boxSizing: "border-box",
      backgroundColor: "#fff",
      borderRadius: ".125rem",
      border: "1px solid rgba(0,0,0,.14)",
      boxShadow: "inset 0 2px 0 0 rgb(0 0 0 / 2%)",
      color: "#222",
      transition: "border-color .1s ease",
      margin: "auto auto .75rem",
      width: "100%",
      padding: ".9375rem",
      fontSize: ".875rem",
      outline: 0,
    },
    styleUpload: {
      "& label": {
        background: "#fff",
        border: "1px solid #ee4d2d",
        boxSizing: "border-box",
        padding: "0 12px",
        height: "30px",
        color: "#ee4d2d",
        display: " inline-flex",
        alignItems: "center",
        marginRight: "8px",
        cursor: "pointer",
      },
      "& span": {
        marginLeft: "6px",
        fontSize: "12px",
        lineHeight: "14px",
        fontWeight: 400,
      },
      "& input": {
        display: "none",
        outline: "none",
      },
    },
  })
);
const Upload = ({ setComment, setVideo, video, setImage, image }: any) => {
  //styles
  const classes = useStyles();
  //state
  const [progress, setProgress] = useState(0);
  const handleUploadImage = (e: any) => {
    const files = e.target.files[0];
    const storageRef = ref(storage, `/images/${files.name}`);
    const uploadTask = uploadBytesResumable(storageRef, files);

    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error: any) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  const handleUploadVideo = (e: any) => {
    const files = e.target.files[0];
    const storageRef = ref(storage, `/video/${files.name}`);
    const uploadTask = uploadBytesResumable(storageRef, files);

    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error: any) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setVideo(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  return (
    <Box className={classes.styleInput}>
      <textarea
        placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm này nhé"
        className={classes.styleTextarea}
        onChange={(e: any) => setComment(e.target.value)}
      ></textarea>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.styleUpload}
      >
        <label htmlFor="image">
          <CameraAlt />
          <Box component="span">Thêm Hình ảnh</Box>
          <input
            id="image"
            type="file"
            accept="image"
            onChange={handleUploadImage}
          />
        </label>
        <label htmlFor="video">
          <VideoCall />
          <Box component="span">Thêm Video</Box>
          <input
            id="video"
            type="file"
            accept="video/mp4"
            onChange={handleUploadVideo}
          />
        </label>
        <h2>Uploading done {progress}%</h2>
      </Box>
      <Box display="flex">
        {image && <img src={image} alt="" style={{ width: "60px" }} />}
        {video && <video src={video} width="80" height="80" controls></video>}
      </Box>
    </Box>
  );
};

export default Upload;
