import { BOXSHADOW_1 } from "@/src/constants";
import { Box, Skeleton, styled } from "@mui/material";

export const StyledRootBox = styled(Box)`
  cursor: pointer;
  border-radius: 10px;
  box-shadow: ${BOXSHADOW_1};
  width: 100%;
`;

export const StyledDetailsBox = styled(Box)(() => ({
  backgroundColor: "#ffffff",
  borderRadius: "0 0 8px 8px",
  width: "100%",
}));

export const StyledSkeleton = styled(Skeleton)`
  border-radius: 10px 10px 0 0;
`;
