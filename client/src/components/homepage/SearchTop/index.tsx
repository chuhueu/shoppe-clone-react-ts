import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
import SearchTopList from "./SearchTopList";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleContainer: {
            maxWidth: "1200px",
            margin: "15px auto",
            padding: "0",
            backgroundColor: "#fff",
        },
        styleTop: {
            padding: "20px",
            borderBottom: "1px solid rgba(0,0,0,.1)",
        },
        styleIcon: {
            fontSize: "16px",
            color: "#d0011b",
            marginLeft: "5px",
        },
        styleItem: {
            flex: 1,
            borderRight: "1px solid rgba(0,0,0,.1)",
        },
        styleImg: {
            width: "50%",
        },
        styleBottom: {
            padding: "20px 10px",
        },
    })
);

const SearchTop = () => {
    const classes = useStyles();
    return (
        <Container className={classes.styleContainer}>
            <Box
                className={classes.styleTop}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="subtitle1">TÌM KIẾM HÀNG ĐẦU</Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h5">Xem tất cả</Typography>
                        <ArrowForwardIos className={classes.styleIcon} />
                    </Box>
                </Link>
            </Box>
            <Box className={classes.styleBottom}>
                <SearchTopList />
            </Box>
        </Container>
    );
};

export default SearchTop;
