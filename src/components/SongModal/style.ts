import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledModelBox = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-end !important;
  margin: 67px auto 84px auto !important;
  overflow: scroll;
  height: calc(100vh - 151px);
  @media (min-width: 600px) {
  }
  background-color: #ffffff;
  border-radius: 8px;
  & .MuiStack-root {
    overflow: hidden !important;
    padding-top: 0px !important;
  }
`;
export const CardBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: ceter;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const DetailsBox = styled(Box)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 60%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const StyledImageBox = styled(Box)`
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 2px,
    rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px,
    rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 32px 64px;
  margin: 16px;
  width: 500px;
  border-radius: 8px;
  height: 500px;
  @media (max-width: 1000px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 500px) {
    width: 90%;
    height: 250px;
  }
`;
