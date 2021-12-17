import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleWrapper: {
            maxWidth: "1240px",
            padding: "70px 24px",
            margin: "0 auto",
        },
        styleSpace1: {
            height: "5px",
        },
        styleSpace2: {
            height: "15px",
        },
        styleLink: {
            textDecoration: "none",
            color: "inherit",
            position: "relative",
            "&:hover": {
                color: "#ee4d2d",
            },
        },
    })
);

const FooterCenter = () => {
    const classes = useStyles();
    return (
        <Box className={classes.styleWrapper}>
            <Typography variant="h4">Danh Mục</Typography>
            <Box className={classes.styleSpace2}></Box>
            <Grid container spacing={5}>
                <Grid item lg={3} md={4} xs={6}>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6}>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6}>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6}>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            <Link to="/" className={classes.styleLink}>
                                THỜI TRANG NAM
                            </Link>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                        <Typography variant="body2">
                            <Box display="flex" flexWrap="wrap">
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Vest và Blazer
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Quần Jeans
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Lót
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Đồ Ngủ
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Trang phục truyền thống
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                                <Link to="/" className={classes.styleLink}>
                                    Áo Khoác
                                </Link>
                                <span>&nbsp;|&nbsp;</span>
                            </Box>
                        </Typography>
                        <Box className={classes.styleSpace1}></Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FooterCenter;
