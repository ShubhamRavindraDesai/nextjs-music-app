export const sliceText = (str: string, length?: number): string => {
  if (str?.length > (length ?? 10)) {
    return str?.slice(0, length ?? 10) + "...";
  } else {
    return str?.slice(0, length ?? 10);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
