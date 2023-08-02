import dayjs from "dayjs";

export const getYear = (dateString: string): number => {
  return dayjs(dateString).year();
};
