import NoDataSvg from "@/src/assets/Icons/NoDataSvg";
import { BOXSHADOW_1 } from "@/src/constants";
import { Box, Typography } from "@mui/material";
import React from "react";

const NoDataFound = (): JSX.Element => {
  return (
    <Box
      data-testid="no-data-found"
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      flexDirection="column"
      sx={{
        position: "sticky",
        top: "15%",
        height: "60%",
        gap: "20px",
        boxShadow: BOXSHADOW_1,
      }}
    >
      <Typography data-testid="info-text">No records Found</Typography>
      <Box data-testid="no-data-svg">
        <NoDataSvg />
      </Box>
    </Box>
  );
};

export default NoDataFound;
