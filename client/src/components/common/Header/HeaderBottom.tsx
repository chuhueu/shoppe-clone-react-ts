import React from "react";
import { Box, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/shopee-logo.png";
import SearchBox from "./SearchBox";
import HeaderCart from "./HeaderCart";

interface Props {
  reload?: boolean;
}

const HeaderBottom = ({ reload }: Props) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box width="162px">
        <Link to="/">
          <img src={logo} alt="" style={{ maxWidth: "100%" }} />
        </Link>
      </Box>
      <Hidden smDown>
        <SearchBox />
      </Hidden>
      <HeaderCart reload={reload} />
    </Box>
  );
};

export default HeaderBottom;
