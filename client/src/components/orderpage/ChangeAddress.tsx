import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container, Button } from "@material-ui/core";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import { Link } from "react-router-dom";
import { LocationOn, Add } from "@material-ui/icons";
import axios from "../../axios";
import Popup from "./Popup";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      //fontFamily: "Roboto",
    },
    styleAddress: {
      fontSize: "1.125rem",
      color: "#ee4d2d",
      textTransform: "capitalize",

      "& button:nth-child(1)": {
        marginRight: theme.spacing(2),
      },
    },
    styleButtonOutlined: {
      border: "1px solid rgba(0,0,0,.09)",
      background: "#fff",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
      textTransform: "capitalize",
      color: "#555",
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
    },
    styleStreet: {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        marginLeft: "unset",
      },
    },
    styleDefault: {
      color: "#929292",
      marginLeft: theme.spacing(3),
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "Roboto",
      [theme.breakpoints.down("xs")]: {
        marginLeft: "unset",
      },
    },
    styleBack: {
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
    styleButton: {
      background: "#ee4d2d",
      color: "#fff",
      border: "1px solid rgba(0,0,0,.09)",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
      borderRadius: "2px!important",
      marginRight: theme.spacing(2),
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
const ChangeAddress = ({ setChangeAddress }: any) => {
  //styles
  const classes = useStyles();
  //state
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
  const [selectedValue, setSelectedValue] = useState(userInfo.addressDefault);
  const [address, setAddress] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    const getAddress = async () => {
      try {
        const res = await axios.get(`/address/${userInfo._id}`);
        //setSelectedValue(userInfo.addressDefault);
        setAddress(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAddress();
  }, [userInfo]);
  return (
    <Box className={classes.styleBox}>
      <Box
        mb={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={classes.styleAddress}
      >
        <Box fontFamily="Roboto" display="flex" alignItems="center">
          <LocationOn />
          <Box ml={1} fontFamily="Roboto">
            Địa Chỉ Nhận Hàng
          </Box>
        </Box>
        <Box display="flex">
          <Button
            className={classes.styleButtonOutlined}
            variant="outlined"
            startIcon={<Add />}
            onClick={() => setOpenPopup(true)}
          >
            Thêm địa chỉ mới
          </Button>
          <Link to="/account/address" style={{ textDecoration: "none" }}>
            <Button className={classes.styleButtonOutlined} variant="outlined">
              Thiết lập địa chỉ
            </Button>
          </Link>
        </Box>
      </Box>
      {address.map((item: any) => {
        return (
          <Box display="flex" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              fontSize="18px"
              className={classes.styleDetailAddress}
            >
              <Radio
                checked={selectedValue === item._id}
                onChange={handleRadioChange}
                value={item._id}
              />
              <Box fontWeight="700">
                {item?.fullName} (+84) {item?.phoneNumber}
              </Box>
              <Box className={classes.styleStreet}>
                {item?.street}, {item?.town}, {item?.district}, {item?.province}
              </Box>
              {/* <Box className={classes.styleDefault}>Mặc Định</Box> */}
            </Box>
          </Box>
        );
      })}
      <Box padding="20px 40px" display="flex">
        <Button variant="outlined" className={classes.styleButton}>
          Hoàn Thành
        </Button>
        <Button
          className={classes.styleButtonOutlined}
          variant="outlined"
          onClick={() => setChangeAddress(false)}
        >
          Trở lại
        </Button>
      </Box>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </Box>
  );
};

export default ChangeAddress;
