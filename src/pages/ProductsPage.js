import { Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppStructure from "../layouts/AppStructure";

const ProductsPage = () => {
  return (
    <AppStructure>
      <Typography>Products Page</Typography>
      <Outlet />
    </AppStructure>
  );
};

export default ProductsPage;
