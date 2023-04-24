import { GroupField, UIType } from "@/types/UIType";
import React, { useEffect, useState } from "react";
import { InputForm } from "../InputForm";

interface TextBoxProps {
  fieldData: GroupField;
}

export const Group = ({ fieldData }: TextBoxProps) => {
  const { subParameters, jsonKey, level } = fieldData;
  const sortedSubParameters = subParameters.sort(function (
    a: UIType,
    b: UIType
  ) {
    return a.sort - b.sort;
  });
  return (
    <div className={`px-${2 * (level - 1)}`}>
      {sortedSubParameters.map((data, idx) => (
        <InputForm fieldData={data} key={jsonKey ?? idx} />
      ))}
    </div>
  );
};
