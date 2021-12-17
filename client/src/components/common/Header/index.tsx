import React from "react";
import { Box, Container, Hidden } from "@material-ui/core";
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
        styleContainer: {},
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
                    <Hidden smDown>
                        <Navbar />
                    </Hidden>
                    <HeaderBottom />
                </Container>
            </Box>
            <Box className={classes.styleTop}></Box>
        </React.Fragment>
    );
};

export default Header;
