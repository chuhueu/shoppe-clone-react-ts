import React from "react";
import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ReceiptOutlined, MonetizationOnOutlined } from "@material-ui/icons";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginTop: theme.spacing(2),
      //boxShadow: "0 1px 0px 0 rgb(0 0 0 / 5%)",
      background: "#fff",
      fontFamily: "Roboto",
    },
    styleVoucher: {
      padding: "28px 30px",
      borderBottom: "1px solid rgba(0,0,0,.05)",
      "& svg": {
        marginRight: "4px",
        width: "22px",
        height: "100%",
        color: "#ee4d2d",
      },
    },
  })
);
const VoucherOrderPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.styleContainer}>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          className={classes.styleVoucher}
        >
          <Box display="flex" alignItems="center">
            <ReceiptOutlined />
            <Box>Voucher của Shop</Box>
          </Box>
          <Box display="flex" justifyContent="flex-end" flex="4" color="#05a">
            Chọn Voucher
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          className={classes.styleVoucher}
        >
          <Box display="flex" alignItems="center">
            <MonetizationOnOutlined style={{ color: "#eda500" }} />
            <Box>Shopee Xu</Box>
            <Box color="#929292" ml={2}>
              Không thể sử dụng Xu
            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-end" flex="4" color="#05a">
            <Box color="#d0d0d0">[-₫0]</Box>
            <input type="checkbox" name="checkbox" value="value" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default VoucherOrderPage;
