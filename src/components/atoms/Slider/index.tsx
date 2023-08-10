import { Slider } from "@mui/material";
import React from "react";

const CustomSlider = (props: CustomSliderProps): JSX.Element => {
  const {
    dataTestId,
    style,
    size,
    value,
    onChange,
    min,
    max,
    ariaLabel,
    color,
  } = props;
  return (
    <Slider
      data-testid={dataTestId}
      sx={{ width: "100%", color: color ?? "#082f49", ...style }}
      size={size}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      aria-label={ariaLabel}
    />
  );
};

export default CustomSlider;
