import React from "react";
import { Box, Typography } from "@mui/material";

interface NavigationProps {
  handleCloseDrawer: () => void;
}
// Work in Progress

const SideBar = ({ handleCloseDrawer }: NavigationProps): JSX.Element => {
  const handleRedirect = (pathname: string): void => {
    handleCloseDrawer();
  };

  return (
    <Box width={"100%"}>
      <Typography
        onClick={() => {
          handleRedirect("home");
        }}
      >
        Home
      </Typography>
    </Box>
  );
};

export default SideBar;
