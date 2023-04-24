import { TextBoxField } from "@/types/UIType";
import { TextField } from "@mui/material";
import React from "react";
import { TitleBar } from "../TitleBar";

interface TextBoxProps {
  fieldData: TextBoxField;
}

export const TextBox = ({ fieldData }: TextBoxProps) => {
  const { placeholder } = fieldData;
  return (
    <div className="bg-[#f0f7ff] border rounded-lg p-4 gap-2 flex">
      <TitleBar field={fieldData} />
      <TextField className="" type="text" placeholder={placeholder} />;
    </div>
  );
};
