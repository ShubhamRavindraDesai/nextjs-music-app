import React from "react";
import { Box } from "@mui/material";
import SongModal from "@/src/components/SongModal";
import { INITIAL_SONG } from "@/src/constants";
import NoDataFound from "@/src/components/NoDataFound";
import prisma from "../../lib/prisma";

export async function generateStaticParams(): Promise<
  Array<{
    songId: string;
  }>
> {
  const res = await prisma.song.findMany();
  const ids = res.map((song) => {
    return { songId: song.id };
  });
  return ids;
}

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
