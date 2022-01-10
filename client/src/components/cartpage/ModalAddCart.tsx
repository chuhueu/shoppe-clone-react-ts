import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Popup from "reactjs-popup";
import addSuccess from "../../assets/images/cart/add-success.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stylePopup: {
      "&-content": {
        width: "auto",
        background: "transparent",
        border: "none",
        padding: "0",
      },
    },
    styleModal: {
      width: "350px",
      height: "250px",
      backgroundColor: "rgba(0,0,0,.5)",
      borderRadius: "5px",
    },
    styleImg: {
      maxWidth: "100px",
      marginBottom: "20px",
    },
  })
);

interface Props {
  openModal?: boolean;
}

const ModalAddCart = ({ openModal }: Props) => {
  const classes = useStyles();

  return (
    <Popup
      open={openModal}
      closeOnDocumentClick={false}
      className={classes.stylePopup}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={classes.styleModal}
      >
        <img src={addSuccess} alt="" className={classes.styleImg} />
        <Typography variant="h2">Sản phẩm đã được thêm vào Giỏ hàng</Typography>
      </Box>
    </Popup>
  );
};

export default ModalAddCart;
