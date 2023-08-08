import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

/**
 * @swagger
 * /api/songs:
 *   get:
 *     summary: Get songs data
 *     description: Retrieves a list of songs from the database. You can search for songs by providing a search query parameter (e.g., "Securing"). This is an optional parameter; when it's empty, it will return the first 25 songs. The skip parameter is used to skip a specified number of songs from the beginning. For example, if there are 100 songs available and you provide a skip parameter of 50, it will skip the first 50 songs. The skip parameter is optional, and its default value is 0 (e.g., "25", "50").
 *     parameters:
 *       - in: query
 *         name: search
 *         description: The search query to filter songs by name or artist name.
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: skip
 *         description: The number of records to skip.
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success. Returns a list of songs matching the search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 songs:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Song'
 *                 success:
 *                   type: boolean
 *       500:
 *         description: Internal Server Error. Returns an error message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
export const GET = async (
  req: Request
): Promise<
  | NextResponse<{
      message: string;
      songs: Song[];
      success: boolean;
    }>
  | NextResponse<{
      error: string;
    }>
> => {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search") as string;
    const skip = Number(url.searchParams.get("skip"));
    const prisma = new PrismaClient();

    if (!search) {
      const songs = await prisma.song.findMany({ take: 25, skip: skip ?? 0 });
      return NextResponse.json({
        message: "Success",
        songs,
        success: true,
      });
    }

    const songs = await prisma.song.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            name: {
              contains: search.toLowerCase(),
              mode: "insensitive",
            },
          },
          {
            artistName: {
              contains: search.toLowerCase(),
              mode: "insensitive",
            },
          },
        ],
      },
      take: 25,
      skip: skip ?? 0,
    });

    if (!songs.length) {
      return NextResponse.json({
        message: "No records found",
        songs: [],
        success: true,
      });
    }

    return NextResponse.json({
      message: "Success",
      songs,
      success: true,
    });
  } catch (err) {
    const error = err as { message: string; status: number };
    return NextResponse.json(
      { error: error.message ?? "Something went wrong" },
      { status: 500 }
    );
  }
};
