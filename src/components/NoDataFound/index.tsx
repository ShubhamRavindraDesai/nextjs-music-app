import { BOXSHADOW_1 } from "@/src/constants";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import NoDataSvg from "@/src/assets/Icons/NoDataSvg.svg";

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
      <Typography data-testid="info-text">No songs Found</Typography>
      <Box data-testid="no-data-svg">
        <Image priority src={NoDataSvg} alt="Picture of files" />
      </Box>
    </Box>
  );
};

export default NoDataFound;
