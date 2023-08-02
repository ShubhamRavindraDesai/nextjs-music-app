// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (
  req: Request
): Promise<NextResponse<{ data: unknown | null; err: string | null }>> => {
  try {
    const url = new URL(req.url);
    // const search = url.searchParams.get("search");
    // const page = url.searchParams.get("page");
    const skip = Number(url.searchParams.get("skip"));

    const prisma = new PrismaClient();
    const songs = await prisma.song.findMany({ take: 25, skip: skip ?? 25 });

    return NextResponse.json({
      data: { songs, count: songs.length },
      err: null,
    });
  } catch (err) {
    return NextResponse.json({
      data: null,
      err: "Error connecting to MongoDB",
    });
  }
};
