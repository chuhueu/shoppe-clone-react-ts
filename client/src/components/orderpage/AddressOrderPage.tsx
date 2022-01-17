import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container, Button, Grid } from "@material-ui/core";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import { LocationOn, Add } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addressState } from "../../redux/reducers/userReducer";
import { RootState } from "../../redux/store";
import { getAddress, getOneAddress } from "../../redux/actions/userAction";
import ChangeAddress from "./ChangeAddress";
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
      "& button": {
        border: "1px solid rgba(0,0,0,.09)",
        background: "#fff",
        boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
        textTransform: "capitalize",
        color: "#555",
      },
      "& button:nth-child(1)": {
        marginRight: theme.spacing(2),
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
interface address {
  address?: any;
  user?: string;
  fullName?: string;
  phoneNumber?: number;
  street?: string;
  town?: string;
  district?: string;
  province?: string;
}
const AddressOrderPage = () => {
  //styles
  const classes = useStyles();
  //state
  // const [selectedValue, setSelectedValue] = useState("a");
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedValue(event.target.value);
  // };
  const [changeAddress, setChangeAddress] = useState<boolean>(false);
  const dispatch = useDispatch();
  const address = useSelector<RootState, address>((state) => state.userAddress);
  useEffect(() => {
    dispatch(getOneAddress());
  }, [dispatch]);

  return (
    <Container className={classes.styleContainer}>
      <Box mt={2} className={classes.styleBoxFirst}></Box>
      <Box padding="28px 30px 24px">
        {!changeAddress ? (
          <>
            <Box display="flex" alignItems="center">
              <Box
                mb={3}
                display="flex"
                alignItems="center"
                className={classes.styleAddress}
              >
                <LocationOn />
                <Box ml={1} fontFamily="Roboto">
                  Địa Chỉ Nhận Hàng
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box
                display="flex"
                alignItems="center"
                fontSize="18px"
                className={classes.styleDetailAddress}
              >
                <Box>
                  {address?.address?.fullName} (+84){" "}
                  {address?.address?.phoneNumber}
                </Box>
                <Box>
                  {address?.address?.street}, {address?.address?.town},{" "}
                  {address?.address?.district}, {address?.address?.province}
                </Box>
                <Box>Mặc Định</Box>
                <Box onClick={() => setChangeAddress(true)}>THAY ĐỔI</Box>
              </Box>
            </Box>
          </>
        ) : (
          <ChangeAddress setChangeAddress={setChangeAddress} />
        )}
      </Box>
    </Container>
  );
};

export default AddressOrderPage;
