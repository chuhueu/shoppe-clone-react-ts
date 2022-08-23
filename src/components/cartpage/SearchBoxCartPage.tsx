import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Hidden, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      width: "38.8125rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    styleForm: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      borderRadius: "5px",
      boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
      border: "2px solid #ee4d2d",
      position: "relative",
    },
    styleInput: {
      width: "100%",
      fontSize: "14px",
      lineHeight: "125%",
      margin: "0 10px",
      border: "none",
      "&:focus": {
        outline: "none",
      },
    },
    styleButton: {
      backgroundColor: "#ee4d2d",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#fb6445",
      },
    },
    styleHistoryBox: {
      display: "none",
      position: "absolute",
      top: "calc(100% + 1px)",
      left: "0",
      width: "90%",
      backgroundColor: "#fff",
      borderRadius: "3px",
      boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
      zIndex: 99,
      "&.active": {
        display: "block",
      },
    },
    styleHistoryItem: {
      padding: "12px 10px",
      cursor: "pointer",
      transition: "all 0.2s linear",
      "&:hover": {
        backgroundColor: "#fafafa",
      },
    },
  })
);

const SearchBoxCartPage = () => {
  const classes = useStyles();

  const [showBox, setShowBox] = useState(false);
  const handleShowBox = () => {
    setShowBox(!showBox);
  };

  return (
    <Hidden xsDown>
      <Box className={classes.styleWrapper}>
        <form className={classes.styleForm}>
          <input
            type="text"
            placeholder="+5 mã Freeship trong ví"
            className={classes.styleInput}
            onClick={handleShowBox}
          />
          <Button className={classes.styleButton}>
            <Search />
          </Button>
          <Box
            className={`${classes.styleHistoryBox} ${showBox ? "active" : ""}`}
          >
            <Box className={classes.styleHistoryItem}>
              <Typography variant="h4">abc</Typography>
            </Box>
            <Box className={classes.styleHistoryItem}>
              <Typography variant="h4">abc</Typography>
            </Box>
            <Box className={classes.styleHistoryItem}>
              <Typography variant="h4">abc</Typography>
            </Box>
            <Box className={classes.styleHistoryItem}>
              <Typography variant="h4">abc</Typography>
            </Box>
            <Box className={classes.styleHistoryItem}>
              <Typography variant="h4">abc</Typography>
            </Box>
          </Box>
        </form>
      </Box>
    </Hidden>
  );
};

export default SearchBoxCartPage;
