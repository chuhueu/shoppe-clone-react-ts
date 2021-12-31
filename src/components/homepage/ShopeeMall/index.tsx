import React from "react";
import { Container, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ShopeeMallTop from "./ShopeeMallTop";
import ShopeeMallContent from "./ShopeeMallContent";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleWrapper: {
            margin: "15px auto",
            backgroundColor: "#fff",
        },
    })
);

const ShopeeMall = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box className={classes.styleWrapper}>
                <ShopeeMallTop />
                <ShopeeMallContent />
            </Box>
        </Container>
    );
};

export default ShopeeMall;
