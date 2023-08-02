import axios from "axios";

interface ResponseType {
  data: Song[];
  error: string | null;
}

export const getSongs = async (url: string): Promise<ResponseType> => {
  try {
    const response = await axios.get(url);

    if (response?.data !== null) {
      response?.data?.data?.songs.forEach((element: Song) => {
        delete element.createdAt;
        delete element.updatedAt;
      });
      return { data: response?.data?.data?.songs as Song[], error: null };
    } else {
      return { data: [], error: "Failed to fetch data" };
    }
  } catch (error) {
    return {
      data: [],
      error: "Failed to get songs",
    };
  }
};

export const refineSongsData = (data: Song[]): Song[] => {
  if (!data?.length) return [];

  const songsList: Song[] = data.reduce<Song[]>((accumulator, song) => {
    if (song?.previewUrl) {
      const changeImageUrl = (url: string, pixel: number): string => {
        return url ? url.replace("100x100", `${pixel}x${pixel}`) : "";
      };
      const refinedSong = {
        ...song,
        name:
          song?.collectionName?.split(":")[1] ||
          song?.collectionName?.split(":")[0] ||
          "",
        artworkUrl100: changeImageUrl(song?.artworkUrl100, 500) || "",
        artworkUrl60: changeImageUrl(song?.artworkUrl100, 10),
      };
      accumulator.push(refinedSong);
    }
    return accumulator;
  }, []);
  return songsList;
};
