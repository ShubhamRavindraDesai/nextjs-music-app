import React from "react";
import { Box } from "@mui/material";
import SongsContainer from "@/components/SongsContainer";
import { Toaster } from "react-hot-toast";

const Home = async (): Promise<JSX.Element> => {
  return (
    <Box>
      <SongsContainer />
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </Box>
  );
};

export default Home;
