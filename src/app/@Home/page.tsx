import React from "react";
import { Box } from "@mui/material";
import SongsContainer from "@/components/SongsContainer";
// import { PrismaClient } from "@prisma/client";
// import store from "@/src/ducks/store";
// import { setCurrentSong, setSongs } from "@/reducers/SongReducer";

const Home = async (): Promise<JSX.Element> => {
  // const prisma = new PrismaClient();
  // const newSongs = await prisma.song.findMany({ take: 25 });

  // newSongs.forEach((element: any) => {
  //   delete element.createdAt;
  //   delete element.updatedAt;
  // });
  // console.log({ newSongs });
  // store.dispatch(setCurrentSong({ currentSong: newSongs[0] }));
  // store.dispatch(setSongs({ songs: newSongs }));

  return (
    <Box>
      <SongsContainer />
    </Box>
  );
};

export default Home;
