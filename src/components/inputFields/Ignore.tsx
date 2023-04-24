import { ActiveTab } from "@/pages";
import { GroupField, IgnoreField } from "@/types/UIType";
import React, { useContext } from "react";
import { Group } from "./Group";

interface IgnoreFieldProps {
  fieldData: IgnoreField;
}

export const Ignore = ({ fieldData }: IgnoreFieldProps) => {
  const { conditions, ...otherProps } = fieldData;
  const tabContext = useContext(ActiveTab);
  let check = true;
  conditions.map((condition, idx) => {
    // console.log(
    //   condition.value,
    //   "===",
    //   tabContext?.activeTab[condition.jsonKey.split(".").at(-1)],
    //   "->",
    //   condition.jsonKey.split(".").at(-1)
    // );
    const searchString = condition.jsonKey.split(".").at(-1);
    check =
      check &&
      condition.value ===
        tabContext?.activeTab[searchString ?? condition.jsonKey];
  });
  if (!check) return <></>;
  return <Group fieldData={otherProps as GroupField} />;
};
