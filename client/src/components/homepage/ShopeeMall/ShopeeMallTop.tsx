import React from "react";
import { Box, Hidden, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
import replaceIcon from "../../../assets/images/icons/replace.png";
import shipIcon from "../../../assets/images/icons/ship.png";
import okIcon from "../../../assets/images/icons/ok.png";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleWrapper: {
            padding: "20px",
            borderBottom: "1px solid rgba(0,0,0,.1)",
        },
        styleLeft: {},
        styleRight: {
            cursor: "pointer",
        },
        styleLink: {
            color: "inherit",
            textDecoration: "none",
            margin: "0 10px",
        },
        styleList: {
            padding: "0 10px",
            borderLeft: "1px solid rgba(0,0,0,.4)",
        },
        styleItem: {
            margin: "0 5px",
        },
        styleIcon: {
            width: "15px",
            height: "15px",
            marginRight: "5px",
        },
        styleIconNext: {
            backgroundColor: "#d0011b",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            color: "#fff",
            marginLeft: "7px",
        },
        styleIconNexti: {
            fontSize: "12px",
        },
    })
);

const ShopeeMallTop = () => {
    const classes = useStyles();
    return (
        <Box
            className={classes.styleWrapper}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Box
                className={classes.styleLeft}
                display="flex"
                alignItems="center"
            >
                <Typography variant="subtitle1">
                    <Link to="/" className={classes.styleLink}>
                        SHOPEE MALL
                    </Link>
                </Typography>
                <Hidden smDown>
                    <Box
                        display="flex"
                        alignItems="center"
                        className={classes.styleList}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            className={classes.styleItem}
                        >
                            <img
                                src={replaceIcon}
                                alt=""
                                className={classes.styleIcon}
                            />
                            <Typography variant="h6">
                                7 Ngày Miễn Phí Trả Hàng
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={classes.styleItem}
                        >
                            <img
                                src={shipIcon}
                                alt=""
                                className={classes.styleIcon}
                            />
                            <Typography variant="h6">
                                Hàng Chính Hãng 100%
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={classes.styleItem}
                        >
                            <img
                                src={okIcon}
                                alt=""
                                className={classes.styleIcon}
                            />
                            <Typography variant="h6">
                                Miễn Phí Vận Chuyển
                            </Typography>
                        </Box>
                    </Box>
                </Hidden>
            </Box>
            <Box
                className={classes.styleRight}
                display="flex"
                alignItems="center"
            >
                <Typography variant="h5">Xem Tất Cả</Typography>
                <Box
                    className={classes.styleIconNext}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <ArrowForwardIos className={classes.styleIconNexti} />
                </Box>
            </Box>
        </Box>
    );
};

export default ShopeeMallTop;
