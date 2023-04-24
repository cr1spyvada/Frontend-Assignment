import { SwitchField } from "@/types/UIType";
import { Switch } from "@mui/material";
import React from "react";
import { TitleBar } from "../TitleBar";

export const SwitchToggle = ({ fieldData }: { fieldData: SwitchField }) => {
  const { validate, ...otherProps } = fieldData;
  return (
    <div className="bg-[#f0f7ff] w-full border rounded-lg p-4 gap-2 flex">
      <TitleBar field={fieldData} />
      <Switch defaultChecked={validate?.defaultValue} />
    </div>
  );
};
