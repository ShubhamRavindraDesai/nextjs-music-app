"use client";

import Nav from "@/components/Nav";
import SongPlayer from "@/components/SongPlayer";
import { BOXSHADOW_1 } from "@/src/constants";
import store from "@/src/ducks/store";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import React from "react";
import { Provider } from "react-redux";

const StyledRootBox = styled(Box)`
  flex-grow: 1;
  z-index: 9999;
  position: fixed;
  overflow: auto;
  width: 100%;
  top: 0px;
  box-shadow: ${BOXSHADOW_1};
`;

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  return (
    <div>
      <Provider store={store}>
        <StyledRootBox>
          <Nav navigate={router.push} />
        </StyledRootBox>
        {props.children}
        <Box
          sx={{
            zIndex: "9999",
            position: "fixed",
            bottom: "0px",
            width: "100%",
          }}
        >
          <SongPlayer />
        </Box>
      </Provider>
    </div>
  );
}
