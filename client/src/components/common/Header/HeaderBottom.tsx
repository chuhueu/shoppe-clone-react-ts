import React from "react";
import { Box } from "@material-ui/core";
import logo from "../../../assets/images/shopee-logo.png";
import SearchBox from "./SearchBox";
import HeaderCart from "./HeaderCart";

const HeaderBottom = () => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box width="162px">
                <img src={logo} alt="" style={{ maxWidth: "100%" }} />
            </Box>
            <SearchBox />
            <HeaderCart />
        </Box>
    );
};

export default HeaderBottom;
