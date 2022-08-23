import React from "react";
import { Box } from "@material-ui/core";
import { HeaderSellerPage, Sidebar } from "../../components/index";
import { renderRoutes } from "react-router-config";

const SellerPage = ({ route }: any) => {
  return (
    <>
      <HeaderSellerPage />
      <Sidebar />
      <Box display="flex">
        <Box width="250px"></Box>
        <Box marginTop="60px" flex="1">
          {renderRoutes(route.routes)}
        </Box>
      </Box>
    </>
  );
};

export default SellerPage;
