import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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
