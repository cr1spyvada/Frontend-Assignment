import {
  GroupField,
  IgnoreField,
  RadioField,
  SwitchField,
  TextBoxField,
  UIType,
} from "@/types/UIType";
import { TextField } from "@mui/material";
import React from "react";
import { TextBox } from "./inputFields/TextBox";
import { Group } from "./inputFields/Group";
import { RadioGroupField } from "./inputFields/Radio";
import { Ignore } from "./inputFields/Ignore";
import Dropdown from "./inputFields/Dropdown";
import { SwitchToggle } from "./inputFields/SwitchToggle";

interface InputFormProps {
  fieldData: UIType;
}

export const InputForm = ({ fieldData }: InputFormProps) => {
  const { uiType, ...otherProps } = fieldData;
  switch (uiType) {
    case "Input":
      return <TextBox fieldData={otherProps as TextBoxField} />;
    case "Group":
      return <Group fieldData={otherProps as GroupField} />;
    case "Radio":
      return <RadioGroupField fieldData={otherProps as RadioField} />;
    case "Ignore":
      return <Ignore fieldData={otherProps as IgnoreField} />;
    case "Select":
      return <Dropdown fieldData={otherProps as RadioField} />;
    case "Switch":
      return <SwitchToggle fieldData={otherProps as SwitchField} />;
    default:
      return <></>;
  }
};
