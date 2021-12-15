import React from "react";
import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import HeaderBottom from "./HeaderBottom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleHeader: {
            background: "linear-gradient(-180deg,#f53d2d,#f63)",
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            transform: "translateZ(0)",
            zIndex: 99,
        },
        styleContainer: {
            margin: "0 auto",
            padding: "0 15px",
        },
        styleTop: {
            width: "100%",
            height: "123px",
        },
    })
);

const Header = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box className={classes.styleHeader}>
                <Container className={classes.styleContainer}>
                    <Navbar />
                    <HeaderBottom />
                </Container>
            </Box>
            <Box className={classes.styleTop}></Box>
        </React.Fragment>
    );
};

export default Header;
