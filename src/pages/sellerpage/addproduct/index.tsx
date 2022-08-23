import React from "react";
import { renderRoutes } from "react-router-config";

const AddProductPage = ({ route }: any) => {
  return <>{renderRoutes(route.routes)}</>;
};

export default AddProductPage;
