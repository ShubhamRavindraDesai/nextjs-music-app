import { TextField } from "@mui/material";
import React from "react";

const InputField = (props: InputFieldPRops): JSX.Element => {
  const { id, dataTestId, value, type, onChange, placeholder, style } = props;
  return (
    <TextField
      data-testid={dataTestId}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={style}
    />
  );
};

export default InputField;
