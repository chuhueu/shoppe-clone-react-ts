import React from "react";
import { Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ShopeeMallTop from "./ShopeeMallTop";
import ShopeeMallContent from "./ShopeeMallContent";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleContainer: {
            maxWidth: "1200px",
            margin: "15px auto",
            padding: "0",
            backgroundColor: "#fff",
        },
    })
);

const ShopeeMall = () => {
    const classes = useStyles();
    return (
        <Container className={classes.styleContainer}>
            <ShopeeMallTop />
            <ShopeeMallContent />
        </Container>
    );
};

export default ShopeeMall;
