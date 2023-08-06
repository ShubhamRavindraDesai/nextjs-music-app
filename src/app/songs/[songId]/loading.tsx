"use client";

import React from "react";
import { Button, Container, Skeleton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  CardBox,
  DetailsBox,
  StyledImageBox,
  StyledModelBox,
} from "@/src/components/SongModal/style";

const SongModalLoader = (): JSX.Element => {
  return (
    <Container>
      <StyledModelBox
        sx={{
          alignItems: "center !important",
        }}
      >
        <CardBox>
          <StyledImageBox>
            <Skeleton height="100%" width="100%" />
          </StyledImageBox>
          <DetailsBox>
            <Skeleton width="70%" />
            <Skeleton width="50%" />
            <Skeleton width="80%" />
            <Skeleton width="80%">
              <FiberManualRecordIcon fontSize="small" color="info" />
            </Skeleton>

            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />

            <Skeleton height={"60px"} width="150px" />

            <Button
              sx={{
                backgroundColor: "#E72C30 !important",
              }}
            >
              Play Song
            </Button>
          </DetailsBox>
        </CardBox>
      </StyledModelBox>
    </Container>
  );
};

export default SongModalLoader;
