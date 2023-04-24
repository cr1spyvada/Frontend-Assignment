import { OutputContext } from "@/pages";
import { RadioField } from "@/types/UIType";
import { Info } from "@mui/icons-material";
import { MenuItem, Select, SelectChangeEvent, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

interface RadioFieldProps {
  fieldData: RadioField;
}

const Dropdown = ({ fieldData }: RadioFieldProps) => {
  const {
    jsonKey,
    validate: { options, defaultValue },
  } = fieldData;
  const [selectedValue, setValue] = useState(defaultValue);
  const outputContext = useContext(OutputContext);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  useEffect(() => {}, [selectedValue]);

  return (
    <div className="bg-[#f0f7ff] w-full border rounded-lg p-4 gap-2 flex">
      <Select value={selectedValue} onChange={handleChange}>
        {options.map((option, idx) => (
          <MenuItem key={idx} value={option.value}>
            {option.label}
            {option.description && (
              <Tooltip title={option.description}>
                <Info color="primary" fontSize="small" />
              </Tooltip>
            )}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;
