import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import axios from "axios";
// import dayjs from "dayjs";

// const getYear = (dateString: string): number => {
//   return dayjs(dateString).year();
// };

// const refineSongsData = (data: Song[]): Song[] => {
//   if (!data?.length) return [];

//   const songsList = data.reduce<Song[]>((accumulator, song) => {
//     if (song?.previewUrl) {
//       const changeImageUrl = (url: string, pixel: number): string => {
//         return url ? url.replace("100x100", `${pixel}x${pixel}`) : "";
//       };
//       const releseYear = getYear(song?.releaseDate);

//       const refinedSong = {
//         name:
//           song?.collectionName?.split(":")[1] ??
//           song?.collectionName?.split(":")[0] ??
//           "",
//         artistViewUrl: song?.artistViewUrl ?? "",
//         collectionCensoredName: song?.collectionCensoredName ?? "",
//         collectionName: song?.collectionName ?? "",
//         collectionViewUrl: song?.collectionViewUrl ?? "",
//         description:
//           song?.description?.split("<br />")[0] ||
//           `This song is released in ${releseYear} and the artist name is ${song?.artistName}`,
//         imageUrl: changeImageUrl(song?.artworkUrl100, 500) || "",
//         lowUrl: changeImageUrl(song?.artworkUrl100, 10),
//         trackName: song?.trackName || "",
//         previewUrl: song?.previewUrl || "",
//         releaseDate: song?.releaseDate || "",
//         trackTimeMillis: song?.trackTimeMillis || 0,
//         country: song?.country || "",
//         primaryGenreName: song?.primaryGenreName ?? "",
//         artistName: song?.artistName ?? "",
//         artworkUrl100: song?.artworkUrl100 ?? "",
//         artworkUrl10: song?.artworkUrl10 ?? "",
//         trackViewUrl: song?.trackViewUrl ?? "",
//         artworkUrl60: song?.artworkUrl60 ?? "",
//       };
//       accumulator.push(refinedSong);
//     }
//     return accumulator;
//   }, []);
//   return songsList;
// };

export const GET = async (
  req: Request
): Promise<NextResponse<{ data: string | null; err: string | null }>> => {
  try {
    // const prisma = new PrismaClient();
    // const url = `https://itunes.apple.com/search/?term=${"term"}&offset=${"offset"}&limit=${1000}`;

    // const response = await axios(url);
    // const songs = response?.data?.results;
    // const refinedSongs = refineSongsData(songs);

    // for (const song of refinedSongs) {
    //   await prisma.song.create({ data: song });
    // }

    // // console.log(songs);

    return NextResponse.json({ data: "success", err: null });
  } catch (err) {
    return NextResponse.json({
      data: null,
      err: "something went wrong while sending the data",
    });
  }
};
