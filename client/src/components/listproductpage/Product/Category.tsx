import React from "react";
import { CustomLink } from "../../index";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  FilterList,
  FormatListBulleted,
  KeyboardArrowDown,
  Star,
  StarBorder,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {},
    styleCategory: {},
    styleLink: { textDecoration: "none", color: "inherit" },
    styleHeading: {
      padding: "15px 0",
      borderBottom: "1px solid rgba(0,0,0,.12)",
    },
    styleIconCat: { marginRight: "10px", fontSize: "18px" },
    styleMore: { padding: ".5rem .625rem .5rem 0", cursor: "pointer" },
    styleMoreIcon: { fontSize: "16px", marginLeft: "5px" },
    styleFilter: {},
    styleFilterList: {
      padding: "15px 0",
      borderBottom: "1px solid rgba(0,0,0,.12)",
    },
    styleFilterItem: {
      padding: "3px 0",
      "& .MuiFormControlLabel-label": {
        fontSize: "14px",
        fontWeight: 400,
        color: "rgba(0,0,0,.87)",
      },
    },
    styleFilterPrice: { margin: "15px 0" },
    styleFilterPriceInput: {
      width: "5rem",
      height: "1.875rem",
      fontSize: ".75rem",
      backgroundColor: "#fff",
      border: "1px solid rgba(0,0,0,.26)",
      paddingLeft: "0.3125rem",
      textTransform: "uppercase",
      borderRadius: "0.125rem",
      boxShadow: "inset 0 1px 0 0 rgb(0 0 0 / 5%)",
      "&:focus": {
        outline: "none",
      },
    },
    styleFilterPriceBox: {
      flex: 1,
      height: "1px",
      background: "#bdbdbd",
      margin: "0 0.625rem",
    },
    styleFilterButton: {
      width: "100%",
      height: "1.875rem",
      marginTop: "0.75rem",
      backgroundColor: "#ee4d2d",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#f1674c",
      },
    },
    styleRate: { padding: "10px 0" },
    styleRateIcon: {
      fontSize: "16px",
      color: "rgb(255,167,39)",
      marginRight: "3px",
    },
  })
);

const Category = () => {
  const classes = useStyles();

  return (
    <Box className={classes.styleWrapper}>
      <Box className={classes.styleCategory}>
        <Link to="/" className={classes.styleLink}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.styleHeading}
          >
            <FormatListBulleted className={classes.styleIconCat} />
            <Typography variant="caption">Tất Cả Danh Mục</Typography>
          </Box>
        </Link>
        <Box padding="10px 0">
          <CustomLink to="/product-list" label="Điện thoại & Phụ kiện" />
          <CustomLink to="/1" label="Điện thoại" />
          <CustomLink to="/2" label="Máy tính bảng" />
          <CustomLink to="/3" label="Pin Dự Phòng" />
          <CustomLink to="/4" label="Pin Gắn Trong, Cáp và Bộ Sạc" />
          <CustomLink to="/5" label="Ốp lưng, bao da, Miếng dán điện thoại" />
          <Box display="flex" alignItems="center" className={classes.styleMore}>
            <Typography variant="h4">Thêm</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </Box>
      </Box>
      <Box className={classes.styleFilter}>
        <Box
          display="flex"
          alignItems="center"
          className={classes.styleHeading}
        >
          <FilterList className={classes.styleIconCat} />
          <Typography variant="caption">BỘ LỌC TÌM KIẾM</Typography>
        </Box>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Theo Danh Mục</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Vỏ bao, Ốp lưng & Miếng dán điện thoại (21tr+)"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Cáp sạc & bộ chuyển đổi (456k+)"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Miếng dán màn hình (354k+)"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Sạc dự phòng & Pin (162k+)"
          />
          <Box display="flex" alignItems="center" className={classes.styleMore}>
            <Typography variant="h4">Thêm</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Nơi Bán</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="TP. Hồ Chí Minh"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Hà Nội"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Thái Nguyên"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Vĩnh Phúc"
          />
          <Box display="flex" alignItems="center" className={classes.styleMore}>
            <Typography variant="h4">Thêm</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Đơn Vị Vận Chuyển</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Hỏa Tốc"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Nhanh"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Tiết Kiệm"
          />
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Thương Hiệu</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Vietnammobile"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Oppo"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Xiaomi"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="LG"
          />
          <Box display="flex" alignItems="center" className={classes.styleMore}>
            <Typography variant="h4">Thêm</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </FormControl>
        <Box className={classes.styleFilterList}>
          <Typography variant="h4">Khoảng Giá</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.styleFilterPrice}
          >
            <input
              type="text"
              className={classes.styleFilterPriceInput}
              placeholder="₫TỪ"
            />
            <Box className={classes.styleFilterPriceBox}></Box>
            <input
              type="text"
              className={classes.styleFilterPriceInput}
              placeholder="₫ĐẾN"
            />
          </Box>
          <Button className={classes.styleFilterButton}>Áp dụng</Button>
        </Box>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Loại Shop</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Shopee Mall"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Shop Yêu Thích"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Shop Yêu Thích +"
          />
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Tình Trạng</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Đã sử dụng"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Mới"
          />
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Các Lựa Chọn Thanh Toán</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="0% TRẢ GÓP"
          />
        </FormControl>
        <Box className={classes.styleFilterList}>
          <Typography variant="h4">Đánh Giá</Typography>
          <Box display="flex" alignItems="center" className={classes.styleRate}>
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
          </Box>
          <Box display="flex" alignItems="center" className={classes.styleRate}>
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <Typography variant="h4">trở lên</Typography>
          </Box>
          <Box display="flex" alignItems="center" className={classes.styleRate}>
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <Typography variant="h4">trở lên</Typography>
          </Box>
          <Box display="flex" alignItems="center" className={classes.styleRate}>
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <Typography variant="h4">trở lên</Typography>
          </Box>
          <Box display="flex" alignItems="center" className={classes.styleRate}>
            <Star className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <Typography variant="h4">trở lên</Typography>
          </Box>
        </Box>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Dịch Vụ & Khuyến Mãi</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Freeship Xtra"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Hoàn Xu Xtra"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Đang giảm giá"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Miễn phí vận chuyển"
          />
          <Box display="flex" alignItems="center" className={classes.styleMore}>
            <Typography variant="h4">Thêm</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </FormControl>
        <Button className={classes.styleFilterButton}>Xóa tất cả</Button>
      </Box>
    </Box>
  );
};

export default Category;
