import axios from "axios";

interface ResponseType {
  data: Song[];
  error: string | null;
  message: string;
}

export const getSongs = async (url: string): Promise<ResponseType> => {
  try {
    const response = await axios.get(url);

    if (response?.data?.success) {
      response?.data?.data?.songs.forEach((element: Song) => {
        delete element?.createdAt;
        delete element?.updatedAt;
      });
      return {
        data: response?.data?.songs as Song[],
        error: null,
        message: response?.data?.message,
      };
    } else {
      return {
        data: [],
        error: response?.data?.error,
        message: response?.data?.error,
      };
    }
  } catch (error) {
    return {
      data: [],
      error: "Failed to get songs",
      message: "Failed to get songs",
    };
  }
};
