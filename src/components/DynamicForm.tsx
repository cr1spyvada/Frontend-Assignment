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
    <form>
      {schema.map((field, idx) => {
        console.log({ req: field?.validate?.required });
        return (
          field?.validate?.required === true && (
            <div
              className="bg-[#f0f7ff] border rounded-lg p-4 flex justify-between"
              key={field.jsonKey ?? idx}
            >
              <div className="flex items-center gap-2">
                <label className="text-black font-bold text-2xl">
                  {field.label}
                </label>
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
              <div className="">
                <InputForm fieldData={field} />
              </div>
            </div>
          )
        );
      })}
    </form>
  );
};
