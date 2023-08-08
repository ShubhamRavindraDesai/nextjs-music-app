import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import dayjs from "dayjs";

/**
 * @swagger
 * /api/db:
 *   get:
 *     summary: Store data in the database
 *     description: Fetches song data from iTunes API based on the search term, refines and processes the data, and stores it in the database. Search string can be(e.g., "Taylor Swift", "Imagine Dragons") and for the number of songs you want to skip we can pass the offset query parameter. if there are 50 songs are being fetched you can skip first 25 and only store remaining 25 songs will get stored in the database and offset is optional parameter(e.g., "25", "50").The limit is the third query parameter to limit the songs to get stored in database limit is optional query parameter (e.g., "25", "100").
 *     parameters:
 *       - in: query
 *         name: term
 *         description: The search term to fetch song data from iTunes API.
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: offset
 *         description: The offset for pagination in the iTunes API response.
 *         required: false
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The maximum number of results per page in the iTunes API response.
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success. Stores the refined song data in the database and returns a success message in the response.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: A success message indicating that the data was stored in the database successfully.
 *                 err:
 *                   type: string
 *                   description: An error message (if any) indicating the reason for any issues during data storage.
 *       500:
 *         description: Internal Server Error. Returns an error message if something went wrong during the data storage process.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: A null value indicating that the data storage process encountered an error.
 *                 err:
 *                   type: string
 *                   description: An error message indicating the reason for the server error.
 */

const getYear = (dateString: string): number => {
  return dayjs(dateString).year();
};

const refineSongsData = (data: Song[]): Song[] => {
  if (!data?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const songsList = data.reduce<any[]>((accumulator, song) => {
    if (song?.previewUrl) {
      const changeImageUrl = (url: string, pixel: number): string => {
        return url ? url.replace("100x100", `${pixel}x${pixel}`) : "";
      };
      const releseYear = getYear(song?.releaseDate);

      const refinedSong = {
        name:
          song?.collectionName?.split(":")[1] ??
          song?.collectionName?.split(":")[0] ??
          "",
        artistViewUrl: song?.artistViewUrl ?? "",
        collectionCensoredName: song?.collectionCensoredName ?? "",
        collectionName: song?.collectionName ?? "",
        collectionViewUrl: song?.collectionViewUrl ?? "",
        description:
          song?.description?.split("<br />")[0] ||
          `This song is released in ${releseYear} and the artist name is ${song?.artistName}`,
        imageUrl: changeImageUrl(song?.artworkUrl100, 500) || "",
        lowUrl: changeImageUrl(song?.artworkUrl100, 10),
        trackName: song?.trackName || "",
        previewUrl: song?.previewUrl || "",
        releaseDate: song?.releaseDate || "",
        trackTimeMillis: song?.trackTimeMillis || 0,
        country: song?.country || "",
        primaryGenreName: song?.primaryGenreName ?? "",
        artistName: song?.artistName ?? "",
        artworkUrl100: song?.artworkUrl100 ?? "",
        artworkUrl10: song?.artworkUrl10 ?? "",
        trackViewUrl: song?.trackViewUrl ?? "",
        artworkUrl60: song?.artworkUrl60 ?? "",
      };

      accumulator.push(refinedSong);
    }
    return accumulator;
  }, []);
  return songsList;
};

export const GET = async (
  req: Request
): Promise<NextResponse<{ data: string | null; err: string | null }>> => {
  try {
    const prisma = new PrismaClient();
    const url = `https://itunes.apple.com/search/?term=${"term"}&offset=${"offset"}&limit=${200}`;

    const response = await axios(url);
    const songs = response?.data?.results;
    const refinedSongs = refineSongsData(songs);

    await prisma.song.createMany({ data: refinedSongs });

    return NextResponse.json({ data: "success", err: null });
  } catch (err) {
    return NextResponse.json({
      data: null,
      err: "something went wrong while sending the data",
    });
  }
};
