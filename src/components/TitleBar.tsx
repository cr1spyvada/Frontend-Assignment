import { UIType } from "@/types/UIType";
import { Info } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";

export const TitleBar = ({ field }: { field: UIType }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-black font-bold text-2xl">{field.label}</label>
      {field.description && (
        <Tooltip
          title={
            //   <div className="bg-white p-2 text-black rounded-lg">
            field.description
            //   </div>
          }
        >
          <Info color="primary" fontSize="small" />
        </Tooltip>
      )}
    </div>
  );
};
