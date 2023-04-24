import { ActiveTab } from "@/pages";
import { RadioField } from "@/types/UIType";
import { Info } from "@mui/icons-material";
import {
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { TitleBar } from "../TitleBar";

interface RadioFieldProps {
  fieldData: RadioField;
}

export const RadioGroupField = ({ fieldData }: RadioFieldProps) => {
  const {
    jsonKey,
    validate: { options, defaultValue },
  } = fieldData;
  const tabContext = useContext(ActiveTab);
  
  const handleChange = (_, newValue: string) => {
    tabContext?.setActiveTab({
      ...tabContext?.activeTab,
      [jsonKey]: newValue,
    });
  };

  useEffect(() => {
    tabContext?.setActiveTab({
      ...tabContext?.activeTab,
      [jsonKey]: defaultValue,
    });
  }, []);

  return (
    <div className="bg-[#f0f7ff] border rounded-lg p-4 gap-2 flex flex-col">
      <TitleBar field={fieldData} />
      <ToggleButtonGroup
        className="w-full basis-full flex flex-wrap"
        value={tabContext?.activeTab[jsonKey]}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
      >
        {options?.map((field, idx) => (
          <ToggleButton
            className="flex-[1]"
            key={idx}
            value={field.value}
            aria-label="left aligned"
          >
            <Typography>{field.label}</Typography>
            {field.description && (
              <Tooltip title={field.description}>
                <Info color="primary" fontSize="small" />
              </Tooltip>
            )}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};
