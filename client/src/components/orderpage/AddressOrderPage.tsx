import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 5%)",
      background: "#fff",
    },
    styleBoxFirst: {
      height: "3px",
      width: "100%",
      backgroundPositionX: "-30px",
      backgroundSize: "116px 3px",
      backgroundImage:
        "repeating-linear-gradient(45deg, #6fa6d6,#6fa6d6 33px,transparent 0,transparent 41px, #f18d9b 0,#f18d9b 74px,transparent 0,transparent 100px)",
    },
    styleAddress: {
      fontSize: "1.125rem",
      color: "#ee4d2d",
      textTransform: "capitalize",
      "& svg": {
        marginRight: theme.spacing(1),
      },
    },
    styleDetailAddress: {
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
      "& div": {
        [theme.breakpoints.down("xs")]: {
          paddingBottom: theme.spacing(1),
        },
      },
      "& div:nth-child(1)": {
        fontWeight: 700,
      },
      "& div:nth-child(2)": {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
          marginLeft: "unset",
        },
      },
      "& div:nth-child(3)": {
        color: "#929292",
        marginLeft: theme.spacing(3),
        fontSize: "1rem",
        fontWeight: "500",
        fontFamily: "Roboto",
        [theme.breakpoints.down("xs")]: {
          marginLeft: "unset",
        },
      },
      "& div:nth-child(4)": {
        color: "#05a",
        textTransform: "uppercase",
        marginLeft: "60px",
        fontWeight: 500,
        cursor: "pointer",
        fontFamily: "Roboto",
        [theme.breakpoints.down("xs")]: {
          marginLeft: "unset",
        },
      },
    },
  })
);
const AddressOrderPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.styleContainer}>
      <Box mt={2} className={classes.styleBoxFirst}></Box>
      <Box padding="28px 30px 24px">
        <Box display="flex" alignItems="center">
          <Box
            mb={3}
            display="flex"
            alignItems="center"
            className={classes.styleAddress}
          >
            <LocationOn />
            <Box fontFamily="Roboto">Địa Chỉ Nhận Hàng</Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            fontSize="18px"
            className={classes.styleDetailAddress}
          >
            <Box>Chu Văn Hiếu (+84) 339818714</Box>
            <Box>
              160 Tran Binh Trong, Quang Ha Town, Hai Ha District, Quang Ninh
            </Box>
            <Box>Mặc Định</Box>
            <Box>Change</Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AddressOrderPage;
