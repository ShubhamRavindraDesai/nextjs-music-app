interface ResponseType {
  data: Song[];
  error: string | null;
  message: string;
}

export const getSongs = async (url: string): Promise<ResponseType> => {
  try {
    const res = await fetch(url, { method: "GET" });
    const response = await res.json();

    if (response?.success) {
      response?.songs.forEach((element: Song) => {
        delete element?.createdAt;
        delete element?.updatedAt;
      });
      return {
        data: response?.songs as Song[],
        error: null,
        message: response?.message,
      };
    } else {
      return {
        data: [],
        error: response?.error,
        message: response?.error,
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
