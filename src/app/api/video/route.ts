import axios from "axios";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/video:
 *   get:
 *     summary: Search YouTube videos
 *     description: Returns video data from YouTube based on the provided search query.
 *     parameters:
 *       - in: query
 *         name: name
 *         description: The search query to find videos on YouTube.
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success. Returns the video data from YouTube in the response.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The response data from YouTube.
 *                   properties:
 *                     kind:
 *                       type: string
 *                       description: The type of the response data.
 *                     etag:
 *                       type: string
 *                       description: An etag associated with the response data.
 *                     nextPageToken:
 *                       type: string
 *                       description: The token for the next page of results.
 *                     regionCode:
 *                       type: string
 *                       description: The region code associated with the response data.
 *                     pageInfo:
 *                       type: object
 *                       description: Information about the page of results.
 *                       properties:
 *                         totalResults:
 *                           type: integer
 *                           description: The total number of results available.
 *                         resultsPerPage:
 *                           type: integer
 *                           description: The number of results per page.
 *                     items:
 *                       type: array
 *                       description: An array of YouTube video items matching the search query.
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: object
 *                             description: The ID information of the video.
 *                             properties:
 *                               kind:
 *                                 type: string
 *                                 description: The type of ID (videoId, channelId, or playlistId).
 *                               videoId:
 *                                 type: string
 *                                 description: The ID of the video (available if kind is videoId).
 *                               channelId:
 *                                 type: string
 *                                 description: The ID of the channel (available if kind is channelId).
 *                               playlistId:
 *                                 type: string
 *                                 description: The ID of the playlist (available if kind is playlistId).
 *                           snippet:
 *                             type: object
 *                             description: The snippet information of the video.
 *                             properties:
 *                               title:
 *                                 type: string
 *                                 description: The title of the video.
 *       500:
 *         description: Internal Server Error. Returns an error message if something went wrong during the search process.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   description: An error message indicating the reason for the server error.
 */

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
