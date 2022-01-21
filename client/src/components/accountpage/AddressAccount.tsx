import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addressState } from "../../redux/reducers/userReducer";
import { getAddress, removeAddress } from "../../redux/actions/userAction";
import Popup from "../orderpage/Popup";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      padding: "0 30px 20px",
      fontFamily: "Roboto",
    },
    styleHeader: {
      borderBottom: "1px solid #efefef",
      padding: "22px 0",
      boxSizing: "border-box",
    },
    styleHeaderLeft: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: "1.5rem",
      color: "#333",
      textTransform: "capitalize",
    },
    styleButtonAddress: {
      border: "1px solid rgba(0,0,0,.09)",
      background: "#ee4d2d",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
      textTransform: "capitalize",
      color: "#fff",
      height: "40px",
      "&:hover": {
        background: "#ee4d2d",
        opacity: "0.8",
      },
    },
    styleDetailAddress: {
      borderBottom: "1px solid #efefef",
      padding: "30px 3px 30px 20px",
    },
    styleAddressModel: {
      marginRight: "25px",
      textTransform: "capitalize",
      width: "160px",
      textAlign: "right",
      color: "rgba(85,85,85,.8)",
    },
    styleDefault: {
      background: "#00bfa5",
      color: "#fff",
      borderRadius: "3px",
      padding: "3px 7px 2px",
      textTransform: "capitalize",
      fontSize: "13px",
      fontWeight: 500,
    },
    styleButtonUD: {
      textTransform: "capitalize",
      width: "50px",
      padding: " 7px 0",
      color: "#555",
      marginRight: "10px",
      textDecoration: "underline",
      background: "none",
      border: "0",
      outline: "none",
      "&:hover": {
        background: "none",
        textDecoration: "underline",
      },
    },
    styleButtonOutlined: {
      border: "1px solid rgba(0,0,0,.09)",
      background: "#fff",
      boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
      textTransform: "capitalize",
      color: "#555",
    },
  })
);
const AddressAccount = () => {
  //styles
  const classes = useStyles();
  //state
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
  const dispatch = useDispatch();
  const address = useSelector<RootState, addressState>(
    (state) => state.userAddress
  );
  const [reload, setReload] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const handleRemoveAddress = (id: string) => {
    dispatch(removeAddress(id));
    setReload(!reload);
  };
  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch, reload]);

  return (
    <Box display="flex" flexDirection="column" className={classes.styleBox}>
      <Box display="flex" alignItems="center" className={classes.styleHeader}>
        <Box flex="1" className={classes.styleHeaderLeft}>
          Địa chỉ của tôi
        </Box>
        <Box ml={1}>
          <Button
            className={classes.styleButtonAddress}
            variant="outlined"
            startIcon={<Add />}
            onClick={() => setOpenPopup(true)}
          >
            Thêm địa chỉ mới
          </Button>
        </Box>
      </Box>
      <Box>
        {address.address?.map((item) => {
          return (
            <Box
              display="flex"
              justifyContent="space-between"
              className={classes.styleDetailAddress}
            >
              <Box flex="1">
                <Box mb={2} display="flex" alignItems="center">
                  <Box className={classes.styleAddressModel}>Họ và tên</Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="row"
                  >
                    <Box component="span" fontWeight="500" mr={2}>
                      {item.fullName}
                    </Box>
                    {item?._id === userInfo.addressDefault ? (
                      <Box className={classes.styleDefault}>Mặc định</Box>
                    ) : (
                      <Box></Box>
                    )}
                    {/* <Box className={classes.styleDefault}>Mặc định</Box> */}
                  </Box>
                </Box>
                <Box mb={2} display="flex" alignItems="center">
                  <Box className={classes.styleAddressModel}>Số điện thoại</Box>
                  <Box display="flex" justifyContent="center">
                    <Box component="span">{item.phoneNumber}</Box>
                  </Box>
                </Box>
                <Box mb={2} display="flex" alignItems="flex-start">
                  <Box className={classes.styleAddressModel}>Địa chỉ</Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Box component="span">{item.street}</Box>
                    <Box component="span">{item.district}</Box>
                    <Box component="span">{item.town}</Box>
                    <Box component="span">{item.province}</Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="flex-end" mb={2}>
                  <Button className={classes.styleButtonUD}>Sửa</Button>
                  <Button
                    className={classes.styleButtonUD}
                    onClick={() => handleRemoveAddress(item._id)}
                  >
                    Xóa
                  </Button>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    className={classes.styleButtonOutlined}
                    variant="outlined"
                  >
                    Thiết lập mặc định
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </Box>
  );
};

export default AddressAccount;
