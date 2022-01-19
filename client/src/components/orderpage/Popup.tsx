import React, { useState, useEffect } from "react";
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
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import useLocationForm from "../../constants/useLocationForm";
import ChooseAddress from "./ChooseAddress";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addAddress, getOneAddress } from "../../redux/actions/userAction";
import { addressInfo } from "../../redux/reducers/userReducer";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleFormInput: {
      flex: 1,
      padding: "0.75rem",
      outline: "none",
      border: "1px solid rgba(0,0,0,.14)",
      borderRadius: "2px",
      boxShadow: "inset 0 2px 0 rgb(0 0 0 / 2%)",
      "&:focus": {
        borderColor: "rgba(0,0,0,.54)",
        boxShadow: "inset 0 2px 0 rgb(0 0 0 / 14%)",
      },
      "&:invalid[focused='true']": {
        borderColor: "#ff424f",
      },
      "&:invalid[focused='true'] ~ span": {
        display: "block",
      },
    },
    styleBoxInput: {
      position: "relative",
      width: "100%",
      boxShadow: "inset 0 2px 0 0 rgb(0 0 0 / 2%)",
      borderRadius: "2px",
      minHeight: "40px",
      boxSizing: "border-box",
      border: "1px solid rgba(0,0,0,.14)",
      transition:
        "border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out",
    },
    styleFormTab: {
      width: "100%",
      flex: 1,
      padding: "0.75rem",
      outline: "none",
      border: "0",
      "&:invalid[focused='true'] ~ span": {
        display: "block",
      },
    },
    styleArrow: {
      color: "rgba(0,0,0,.4)",
    },
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
    styleTextarea: {
      boxSizing: "border-box",
      width: "100%",
      padding: "10px",
      backgroundColor: "transparent",
      flex: "1",
      outline: "none",
      fontSize: "14px",
      minWidth: "0",
      color: "#222",
      border: "0",
      resize: "none",
    },
  })
);
interface Props {
  openPopup: boolean;
  setOpenPopup: any;
}
interface Item {
  value: number;
  label: any;
}

const Popup = ({ openPopup, setOpenPopup }: Props) => {
  //style
  const classes = useStyles();
  //state
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
  const [showTab, setShowTab] = useState(false);
  const [input, setInput] = useState<any>();
  const [value, setValue] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleBack = () => {
    setOpenPopup(false);
    setShowTab(false);
  };
  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    // selectedCity,
    // selectedDistrict,
    // selectedWard,
  } = state;
  const handleCity = (item: Item) => {
    onCitySelect(item);
    setValue(1);
    setInput(item?.label + ", ");
    setCity(item.label);
  };
  const handleDistrict = (item: Item) => {
    setValue(2);
    onDistrictSelect(item);
    setInput(input + item?.label + ", ");
    setDistrict(item.label);
  };
  const handleWard = (item: Item) => {
    onWardSelect(item);
    setShowTab(false);
    setInput(input + item?.label);
    setWard(item.label);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      addAddress(
        userInfo._id,
        fullName,
        phoneNumber,
        street,
        ward,
        district,
        city
      )
    );
    setOpenPopup(false);
  };
  return (
    <Dialog open={openPopup} maxWidth="md">
      <Box padding="20px">
        <DialogTitle>
          <Typography variant="h6" style={{ fontSize: "20px" }}>
            Địa chỉ mới
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center">
            <input
              type="text"
              placeholder="Họ và tên"
              onChange={(e: any) => setFullName(e.target.value)}
              className={classes.styleFormInput}
              style={{ marginRight: "16px" }}
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              onChange={(e: any) => setPhoneNumber(e.target.value)}
              className={classes.styleFormInput}
            />
          </Box>
          <Box
            mt={2}
            mb={1}
            display="flex"
            alignItems="center"
            className={classes.styleBoxInput}
          >
            <input
              type="text"
              placeholder="Tỉnh/ Thành phố, Quận/Huyện, Phường/Xã"
              value={input}
              className={classes.styleFormTab}
              onClick={() => setShowTab(!showTab)}
            />
            <ArrowDropDownIcon className={classes.styleArrow} />
          </Box>
          {showTab && (
            <ChooseAddress
              value={value}
              handleChange={handleChange}
              handleCity={handleCity}
              handleDistrict={handleDistrict}
              handleWard={handleWard}
              cityOptions={cityOptions}
              districtOptions={districtOptions}
              wardOptions={wardOptions}
            />
          )}
          <Box mt={2} mb={1} className={classes.styleBoxInput}>
            <textarea
              rows={2}
              placeholder="Địa chỉ cụ thể"
              className={classes.styleTextarea}
              onChange={(e: any) => setStreet(e.target.value)}
            ></textarea>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box padding="20px 40px" display="flex">
            <Button
              className={classes.styleButtonOutlined}
              variant="outlined"
              onClick={handleBack}
            >
              Trở lại
            </Button>
            <Button
              onClick={handleSubmit}
              variant="outlined"
              className={classes.styleButton}
            >
              Hoàn Thành
            </Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default Popup;
