import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleWrapper: {
            width: "840px",
            display: "flex",
            flexDirection: "column",
        },
        styleForm: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderRadius: "5px",
            padding: "3px",
            boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
            position: "relative",
        },
        styleInput: {
            width: "100%",
            fontSize: "14px",
            lineHeight: "125%",
            margin: "0 10px",
            border: "none",
            "&:focus": {
                outline: "none",
            },
        },
        styleButton: {
            backgroundColor: "#fb5533",
            color: "#fff",
            "&:hover": {
                backgroundColor: "#fb6445",
            },
        },
        styleLink: {
            textDecoration: "none",
            color: "inherit",
            marginRight: "10px",
            textTransform: "capitalize",
        },
        styleHistoryBox: {
            display: "none",
            position: "absolute",
            top: "calc(100% + 1px)",
            left: "0",
            width: "90%",
            backgroundColor: "#fff",
            borderRadius: "3px",
            boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
            zIndex: 1,
            "&.active": {
                display: "block",
            },
        },
        styleHistoryItem: {
            padding: "12px 10px",
            cursor: "pointer",
            transition: "all 0.2s linear",
            "&:hover": {
                backgroundColor: "#fafafa",
            },
        },
    })
);

const SearchBox = () => {
    const classes = useStyles();

    const [showBox, setShowBox] = useState(false);
    const handleShowBox = () => {
        setShowBox(!showBox);
    };

    return (
        <Box className={classes.styleWrapper}>
            <form className={classes.styleForm}>
                <input
                    type="text"
                    placeholder="+5 mã Freeship trong ví"
                    className={classes.styleInput}
                    onClick={handleShowBox}
                />
                <Button className={classes.styleButton}>
                    <Search />
                </Button>
                <Box
                    className={`${classes.styleHistoryBox} ${
                        showBox ? "active" : ""
                    }`}
                >
                    <Box className={classes.styleHistoryItem}>
                        <Typography variant="h4">abc</Typography>
                    </Box>
                    <Box className={classes.styleHistoryItem}>
                        <Typography variant="h4">abc</Typography>
                    </Box>
                    <Box className={classes.styleHistoryItem}>
                        <Typography variant="h4">abc</Typography>
                    </Box>
                    <Box className={classes.styleHistoryItem}>
                        <Typography variant="h4">abc</Typography>
                    </Box>
                    <Box className={classes.styleHistoryItem}>
                        <Typography variant="h4">abc</Typography>
                    </Box>
                </Box>
            </form>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                padding="5px 0"
            >
                <Typography variant="h3">
                    <Link to="#" className={classes.styleLink}>
                        Đầm
                    </Link>
                </Typography>
                <Typography variant="h3">
                    <Link to="#" className={classes.styleLink}>
                        Giấy Dán Tường
                    </Link>
                </Typography>
                <Typography variant="h3">
                    <Link to="#" className={classes.styleLink}>
                        Ga Giuờng
                    </Link>
                </Typography>
                <Typography variant="h3">
                    <Link to="#" className={classes.styleLink}>
                        Mũ Bảo Hiểm
                    </Link>
                </Typography>
                <Typography variant="h3">
                    <Link to="#" className={classes.styleLink}>
                        Set đồ nữ
                    </Link>
                </Typography>
                <Typography variant="h3">
                    <Link to="#" className={classes.styleLink}>
                        Áo gile
                    </Link>
                </Typography>
                <Typography variant="h3">
                    <Link to="#" className={classes.styleLink}>
                        Mặt nạ
                    </Link>
                </Typography>
                <Typography variant="h3">
                    <Link to="#" className={classes.styleLink}>
                        Áo giữ nhiệt
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default SearchBox;
