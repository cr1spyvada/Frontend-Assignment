import { UIType } from "@/types/UIType";
import { Info } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { InputForm } from "./InputForm";

interface FormProps {
  schema: UIType[];
}

export const DynamicForm = (props: FormProps) => {
  const { schema } = props;
  const [advancedFieldsVisible, setAdvancedFieldsVisible] =
    useState<boolean>(false);
  if (schema === null || schema.length === 0) return null;

  return (
    <>
      {schema.map((field, idx) => {
        console.log({ req: field?.validate?.required });
        return (
          field?.validate?.required === true && (
            <div key={field.jsonKey ?? idx}>
              {/* <div className="w-full basis-full"> */}
              <InputForm fieldData={field} />
              {/* </div> */}
            </div>
          )
        );
      })}
    </>
  );
};
