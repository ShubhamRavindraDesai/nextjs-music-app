"use client";

import { Box, Grid, IconButton, Skeleton } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { BOXSHADOW_1 } from "@/constants/index";
import { StyledRootBox } from "@/src/components/SongsContainer/style";
const SongsContainer = (): JSX.Element => {
  const skeletonArray: number[] = new Array(15).fill("");

  const renderSkelton = (): JSX.Element[] => {
    return skeletonArray?.map((_: number, index: number) => {
      return (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2} width={"100%"}>
          <Box width={"100%"} borderRadius="10px" boxShadow={BOXSHADOW_1}>
            <Box width={"100%"} height={200}>
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                sx={{ borderRadius: "10px" }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "0 0 8px 8px",
              }}
            >
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <IconButton size={"large"}>
                <PlayArrowIcon />
              </IconButton>
              <IconButton size={"large"}>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <>
      <StyledRootBox container spacing={2}>
        {renderSkelton()}
      </StyledRootBox>
    </>
  );
};

export default SongsContainer;
