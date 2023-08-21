interface CustomSliderProps {
  style?: React.CSSProperties;
  size?: "small" | "medium" | undefined;
  value: number;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb?: number
  ) => void;
  dataTestId: string;
  min: number;
  max: number;
  ariaLabel?: string;
  color?: string;
}
