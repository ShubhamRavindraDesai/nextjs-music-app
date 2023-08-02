import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledRootBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
  padding: "16px",
  zIndex: "9999",
  position: "fixed",
  bottom: "0px",
  height: "82px",
  width: "100%",
  border: "1px solid gray",
  boxShadow: "rgba(0, 0, 0, 0.56) 0px 5px 5px 4px",
}));

export const StyledBox = styled(Box)`
  display: flex;
  width: 60%;
  gap: 10px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const StyledVolumeButtonBox = styled(Box)`
  display: flex;
  width: 30%;
  align-items: center;
  gap: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;
