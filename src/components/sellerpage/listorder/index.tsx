import React from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Menu, Search } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TableList from "./TableList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      maxWidth: "1000px",
      margin: "20px auto",
      backgroundColor: "#fff",
      boxShadow: "0 6px 6px rgb(0 0 0 / 6%)",
      borderRadius: "3px",
    },
    styleContent: { padding: "20px" },
    styleList: {
      padding: "10px 20px 0 20px",
      borderBottom: "1px solid rgba(0,0,0,.1)",
    },
    styleItem: {
      padding: "10px",
      margin: "0 5px",
      cursor: "pointer",
      "&.active": {
        borderBottom: "2px solid #ee4d2d",
        "& > h4,p": {
          color: "#ee4d2d",
        },
      },
      "&:hover": {
        "& > h4,p": {
          color: "#ee4d2d",
        },
      },
    },
    styleNum: { fontSize: "14px", color: "rgba(0,0,0,.54)", marginLeft: "3px" },
    styleTool: {},
    styleSearchBox: {
      maxWidth: "250px",
      border: "1px solid rgba(0,0,0,.26)",
      borderRadius: "10px",
      padding: "3px 5px",
    },
    styleSearchInput: {
      border: "none",
      padding: "3px 5px",
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      "&::placeholder": { color: "rgba(0,0,0,.26)" },
      "&:focus": {
        outline: "none",
      },
    },
    styleSearchIcon: { color: "rgba(0,0,0,.26)", fontSize: "20px" },
    styleTime: {
      margin: "0 5px",
      "& .MuiInputBase-input": {
        maxWidth: "80px",
      },
    },
    styleExport: {
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      border: "1px solid rgba(0,0,0,.26)",
      borderRadius: "10px",
      padding: "7px 10px",
      margin: "0 5px",
      cursor: "pointer",
    },
    styleMenu: {
      border: "1px solid rgba(0,0,0,.26)",
      borderRadius: "10px",
      padding: "3px 7px",
      marginLeft: "5px",
      cursor: "pointer",
    },
    styleMenuIcon: { fontSize: "20px", color: "rgba(0,0,0,.26)" },
    styleTaskbar: {
      marginTop: "15px",
      borderBottom: "1px solid rgba(0,0,0,.1)",
    },
    styleTaskbarItem: {
      fontSize: "14px",
      color: "rgba(0,0,0,.87)",
      padding: "10px",
      marginRight: "5px",
      backgroundColor: "#f5f5f5",
      border: "1px solid rgba(0,0,0,.1)",
      borderBottom: "none",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      cursor: "pointer",
      "&.active": {
        backgroundColor: "#fff",
        color: "#ee4d2d",
        fontWeight: 500,
      },
      "&:hover": {
        backgroundColor: "#fff",
        color: "#ee4d2d",
        fontWeight: 500,
      },
    },
  })
);

const ListOrder = () => {
  const classes = useStyles();

  const [selectedDateFrom, setSelectedDateFrom] = React.useState<Date | null>(
    new Date("2022-01-01")
  );
  const [selectedDateTo, setSelectedDateTo] = React.useState<Date | null>(
    new Date("2022-01-01")
  );

  const handleDateFromChange = (date: Date | null) => {
    setSelectedDateFrom(date);
  };
  const handleDateToChange = (date: Date | null) => {
    setSelectedDateTo(date);
  };

  return (
    <Box className={classes.styleWrapper}>
      <Box display="flex" alignItems="center" className={classes.styleList}>
        <Box className={`${classes.styleItem} active`}>
          <Typography variant="h4">Tất cả</Typography>
        </Box>
        <Box display="flex" alignItems="center" className={classes.styleItem}>
          <Typography variant="h4">Chờ Xác Nhận</Typography>
          <p className={classes.styleNum}>1</p>
        </Box>
        <Box display="flex" alignItems="center" className={classes.styleItem}>
          <Typography variant="h4">Chờ Lấy Hàng</Typography>
          <p className={classes.styleNum}></p>
        </Box>
        <Box display="flex" alignItems="center" className={classes.styleItem}>
          <Typography variant="h4">Đang giao</Typography>
          <p className={classes.styleNum}>2</p>
        </Box>
        <Box display="flex" alignItems="center" className={classes.styleItem}>
          <Typography variant="h4">Đã giao</Typography>
          <p className={classes.styleNum}></p>
        </Box>
        <Box display="flex" alignItems="center" className={classes.styleItem}>
          <Typography variant="h4">Đã hủy</Typography>
          <p className={classes.styleNum}></p>
        </Box>
        <Box display="flex" alignItems="center" className={classes.styleItem}>
          <Typography variant="h4">Trả hàng/Hoàn tiền </Typography>
          <p className={classes.styleNum}></p>
        </Box>
      </Box>
      <Box className={classes.styleContent}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={classes.styleTool}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.styleSearchBox}
          >
            <input
              type="text"
              placeholder="Tìm đơn hàng"
              className={classes.styleSearchInput}
            />
            <Search className={classes.styleSearchIcon} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h4">Ngày đặt hàng:</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDateFrom}
                onChange={handleDateFromChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                className={classes.styleTime}
              />
            </MuiPickersUtilsProvider>
            <Box fontSize="14px" margin="0 5px">
              -
            </Box>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDateTo}
                onChange={handleDateToChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                className={classes.styleTime}
              />
            </MuiPickersUtilsProvider>
            <Box className={classes.styleExport}>Xuất</Box>
            <Box className={classes.styleMenu}>
              <Menu className={classes.styleMenuIcon} />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          className={classes.styleTaskbar}
        >
          <Box className={classes.styleTaskbarItem}>Tất cả 0</Box>
          <Box className={classes.styleTaskbarItem}>Chưa xử lý 0</Box>
          <Box className={`${classes.styleTaskbarItem} active`}>Đã xử lý 0</Box>
        </Box>
        <TableList />
      </Box>
    </Box>
  );
};

export default ListOrder;
