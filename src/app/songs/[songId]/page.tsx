import React from "react";
import { Box } from "@mui/material";
import { PrismaClient } from "@prisma/client";
import SongModal from "@/src/components/SongModal";
import { INITIAL_SONG } from "@/src/constants";
import NoDataFound from "@/src/components/NoDataFound";
import store from "@/src/ducks/store";
import { setCurrentSong } from "@/src/reducers/SongReducer";
const prisma = new PrismaClient();

export const revalidate = 60;

export async function generateStaticParams(): Promise<
  Array<{
    songId: string;
  }>
> {
  const songIds = await prisma.song.findMany();
  return songIds.map((song) => {
    const id = song.songId;
    return { songId: String(id) };
  });
}

const SongPage = async ({
  params,
}: {
  params: { songId: string };
}): Promise<JSX.Element> => {
  try {
    const songRes = await prisma.song.findFirst({
      where: {
        songId: { equals: Number(params.songId) },
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
