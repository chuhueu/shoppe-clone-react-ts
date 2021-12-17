import React from "react";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FooterTop from "./FooterTop";
import FooterCenter from "./FooterCenter";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleFooter: {
            borderTop: "4px solid #ee4d2d",
            backgroundColor: "#fff",
            marginTop: "50px",
        },
    })
);

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.styleFooter}>
            <FooterTop />
            <FooterCenter />
            <FooterContact />
            <FooterBottom />
        </Box>
    );
};

export default Footer;
