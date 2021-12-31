import React from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import subcribeIcon from "../../../assets/images/icons/subcribe.png";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleContainer: {
            backgroundColor: "#f5f5f5",
            width: "100%",
        },
        styleWrapper: {
            maxWidth: "1240px",
            padding: "40px 24px",
            margin: "0 auto",
        },
        styleBoxsm: {
            margin: "10px auto",
            width: "40%",
            [theme.breakpoints.down("md")]: {
                width: "100%",
            },
        },
        styleBoxmd: {
            margin: "10px auto",
            width: "60%",
            [theme.breakpoints.down("md")]: {
                width: "100%",
            },
        },
        styleBoxxl: {
            margin: "10px auto",
            width: "80%",
            [theme.breakpoints.down("md")]: {
                width: "100%",
            },
        },
        styleLink: {
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
        },
        styleImg: {
            maxWidth: "120px",
            maxHeight: "45px",
        },
    })
);

const FooterBottom = () => {
    const classes = useStyles();
    return (
        <Box className={classes.styleContainer}>
            <Box className={classes.styleWrapper}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.styleBoxmd}
                >
                    <Typography variant="h4">
                        <Link to="/" className={classes.styleLink}>
                            CHÍNH SÁCH BẢO MẬT
                        </Link>
                    </Typography>
                    <Typography variant="h4">
                        <Link to="/" className={classes.styleLink}>
                            QUY CHẾ HOẠT ĐỘNG
                        </Link>
                    </Typography>
                    <Typography variant="h4">
                        <Link to="/" className={classes.styleLink}>
                            CHÍNH SÁCH VẬN CHUYỂN
                        </Link>
                    </Typography>
                    <Typography variant="h4">
                        <Link to="/" className={classes.styleLink}>
                            CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
                        </Link>
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.styleBoxsm}
                >
                    <img
                        src={subcribeIcon}
                        alt=""
                        className={classes.styleImg}
                    />
                    <img
                        src={subcribeIcon}
                        alt=""
                        className={classes.styleImg}
                    />
                    <img
                        src={subcribeIcon}
                        alt=""
                        className={classes.styleImg}
                    />
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className={classes.styleBoxsm}
                >
                    <Typography variant="body1">Công ty TNHH Shopee</Typography>
                </Box>
                <Box textAlign="center" className={classes.styleBoxxl}>
                    <Typography variant="body1">
                        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường
                        Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà
                        Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email:
                        cskh@hotro.shopee.vn
                    </Typography>
                    <Typography variant="body1">
                        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện
                        thoại liên hệ: 024 73081221 (ext 4678)
                    </Typography>
                    <Typography variant="body1">
                        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư
                        TP Hà Nội cấp lần đầu ngày 10/02/2015
                    </Typography>
                    <Typography variant="body1">
                        © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default FooterBottom;
