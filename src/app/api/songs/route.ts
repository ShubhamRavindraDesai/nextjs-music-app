// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (
  req: Request
): Promise<
  NextResponse<{ data: unknown | null; err: string | null; message: string }>
> => {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search") as string;
    const skip = Number(url.searchParams.get("skip"));

    const prisma = new PrismaClient();
    const songs = await prisma.song.findMany({
      where: {
        OR: [
          {
            artistName: { contains: search },
          },
          {
            name: { contains: search },
          },
          {
            trackName: { contains: search },
          },
          {
            primaryGenreName: { contains: search },
          },
        ],
      },
      take: 25,
      skip: skip ?? 0,
    });

    if (!songs.length) {
      const songs = await prisma.song.findMany({ take: 25, skip: skip ?? 0 });
      return NextResponse.json({
        message: "No record founds",
        data: { songs, count: songs.length },
        err: null,
      });
    }

    return NextResponse.json({
      data: { songs, count: songs.length },
      err: null,
      message: "success",
    });
  } catch (err) {
    return NextResponse.json({
      data: null,
      err: "Error connecting to MongoDB",
      message: "error",
    });
  }
};
