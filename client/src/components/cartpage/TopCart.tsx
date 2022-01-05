import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";
import shipIcon from "../../assets/images/icons/ship.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginTop: "20px",
      backgroundColor: "#fff",
      border: "1px solid rgba(224,168,0,.4)",
    },
    styleWrapper: {
      width: "100%",
      padding: "8px 0",
    },
    styleIcon: {
      width: "30px",
      margin: "0 5px",
    },
  })
);

const TopCart = () => {
  const classes = useStyles();
  return (
    <Container className={classes.styleContainer}>
      <Box display="flex" alignItems="center" className={classes.styleWrapper}>
        <img src={shipIcon} alt="" className={classes.styleIcon} />
        <Typography variant="h4">
          Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn
          nhé!
        </Typography>
      </Box>
    </Container>
  );
};

export default TopCart;
