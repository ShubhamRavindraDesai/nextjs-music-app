import axios from "axios";
import { NextResponse } from "next/server";

interface YouTubeResponseItem {
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  };
  snippet: {
    title: string;
  };
}
interface responseArr {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeResponseItem[];
}

const developerKey = process.env.GOOGLE_API_KEY;
// const query = "Google";
const maxResults = 25;

async function searchYouTube(
  query: string,
  maxResults: number
): Promise<responseArr> {
  const url = `https://www.googleapis.com/youtube/v3/search`;
  const params = {
    key: developerKey,
    part: "snippet",
    q: query,
    maxResults,
  };

  try {
    const response = await axios.get<responseArr>(url, {
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error searching YouTube}`);
  }
}

export const GET = async (
  req: Request
): Promise<NextResponse<{ data: responseArr | null; err: unknown }>> => {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") ?? "google";
    const response = await searchYouTube(name, maxResults);
    if (!response?.items) {
      throw new Error("No items found in the YouTube response.");
    }

    return NextResponse.json({ data: response, err: null });
  } catch (err) {
    return NextResponse.json({ data: null, err });
  }
};
