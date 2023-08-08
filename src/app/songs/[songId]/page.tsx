import React from "react";
import { Box } from "@mui/material";
import { PrismaClient } from "@prisma/client";
import SongModal from "@/src/components/SongModal";
import { INITIAL_SONG } from "@/src/constants";
import NoDataFound from "@/src/components/NoDataFound";
import store from "@/src/ducks/store";
import { setCurrentSong } from "@/src/reducers/SongReducer";
const prisma = new PrismaClient();

const SongPage = async ({
  params,
}: {
  params: { songId: string };
}): Promise<JSX.Element> => {
  try {
    const songRes = await prisma.song.findFirst({
      where: {
        id: { equals: params.songId },
      },
    });

    store.dispatch(setCurrentSong({ currentSong: songRes }));

    return (
      <Box>
        <SongModal song={songRes ?? INITIAL_SONG} songId={params.songId} />
      </Box>
    );
  } catch (error) {
    return <NoDataFound />;
  }
};

export default SongPage;
