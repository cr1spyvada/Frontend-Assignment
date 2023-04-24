import {
  GroupField,
  IgnoreField,
  RadioField,
  TextBoxField,
  UIType,
} from "@/types/UIType";
import { TextField } from "@mui/material";
import React from "react";
import { TextBox } from "./inputFields/TextBox";
import { Group } from "./inputFields/Group";
import { RadioGroupField } from "./inputFields/Radio";
import { Ignore } from "./inputFields/Ignore";

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
    case "Radio":
      return <RadioGroupField fieldData={otherProps as RadioField} />;
    case "Ignore":
      return <Ignore fieldData={otherProps as IgnoreField} />;
    default:
      return <></>;
  }
};
