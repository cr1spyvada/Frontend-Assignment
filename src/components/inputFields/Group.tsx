import { GroupField, UIType } from "@/types/UIType";
import React, { useEffect, useState } from "react";
import { InputForm } from "../InputForm";
import { DynamicForm } from "../DynamicForm";
import { TitleBar } from "../TitleBar";

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
    <div
      className={`pl-${
        2 * level
      } w-full bg-[#f0f7ff] border rounded-lg p-4 gap-2 flex flex-col`}
    >
      <TitleBar field={fieldData} />
      <DynamicForm schema={sortedSubParameters} />
      {/* {sortedSubParameters?.map((data: UIType, idx) => (
        <div key={jsonKey}>
          <DynamicForm fieldData={[data]} />
        </div>
      ))} */}
    </div>
  );
};
