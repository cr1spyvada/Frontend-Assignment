import { GroupField, TextBoxField, UIType } from "@/types/UIType";
import { TextField } from "@mui/material";
import React from "react";
import { TextBox } from "./inputFields/TextBox";
import { Group } from "./inputFields/Group";

interface InputFormProps {
  fieldData: UIType;
}

export const InputForm = ({ fieldData }: InputFormProps) => {
  const { uiType, ...otherProps } = fieldData;
  console.log({ uiType });
  switch (uiType) {
    case "Input":
      return <TextBox fieldData={otherProps as TextBoxField} />;
    case "Group":
      return <Group fieldData={otherProps as GroupField} />;
    default:
      return <></>;
  }
};
