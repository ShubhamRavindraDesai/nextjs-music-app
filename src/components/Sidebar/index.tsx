import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface NavigationProps {
  handleCloseDrawer: () => void;
}

const SideBar = ({ handleCloseDrawer }: NavigationProps): JSX.Element => {
  const handleRedirect = (pathname: string): void => {
    handleCloseDrawer();
  };

  return (
    <Box data-testid="sidebar-root" width={"100%"} sx={{ padding: "16px" }}>
      <Typography data-testid="header">Navigation</Typography>

      <Link data-testid="home-link" href={"/songs"}>
        <Typography
          sx={{ width: "100" }}
          onClick={() => {
            handleRedirect("home");
          }}
        >
          Home
        </Typography>
      </Link>
    </Box>
  );
};

export default SideBar;
