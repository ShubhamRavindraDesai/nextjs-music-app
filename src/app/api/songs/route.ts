import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

/**
 * @swagger
 * /api/songs:
 *   get:
 *     summary: Get songs data
 *     description: Returns a list of songs from the database. You can search for songs by providing a search query parameter.
 *     parameters:
 *       - in: query
 *         name: search
 *         description: The search query to filter songs by name.
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
 *         description: Success. Returns a list of songs.
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
        message: "success",
        songs,
        success: true,
      });
    }

    const songs = await prisma.song.findMany({
      where: {
        OR: [
          {
            name: { contains: search },
          },
        ],
      },
      take: 25,
      skip: skip ?? 0,
    });

    if (!songs.length) {
      return NextResponse.json({
        message: "No record founds",
        songs: [],
        success: true,
      });
    }

    return NextResponse.json({
      message: "success",
      songs,
      success: true,
    });
  } catch (err) {
    const error = err as { message: string; status: number };
    return NextResponse.json(
      { error: error.message ?? "something went wrong" },
      { status: 500 }
    );
  }
};
