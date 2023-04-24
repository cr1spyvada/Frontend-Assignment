import { TextBoxField } from "@/types/UIType";
import { TextField } from "@mui/material";
import React from "react";

interface TextBoxProps {
  fieldData: TextBoxField;
}

export const TextBox = ({ fieldData }: TextBoxProps) => {
  const { placeholder } = fieldData;
  return <TextField className="" type="text" placeholder={placeholder} />;
};
