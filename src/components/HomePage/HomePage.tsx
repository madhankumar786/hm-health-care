import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components";
import { Box } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomePage;
