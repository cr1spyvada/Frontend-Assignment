import { UIType } from "@/types/UIType";
import { Info } from "@mui/icons-material";
import {
  FormControlLabel,
  Stack,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { InputForm } from "./InputForm";
import { AdvanceFieldToggle } from "@/pages";

interface FormProps {
  schema: UIType[];
}

export const DynamicForm = (props: FormProps) => {
  const { schema } = props;
  const globalAdvanceToggle = useContext(AdvanceFieldToggle);

  const [advancedFieldsVisible, setAdvancedFieldsVisible] =
    useState<boolean>(false);
  if (schema === null || schema.length === 0) return null;
  const advToggle =
    schema.filter((field) => field.validate?.required === false).length > 0;
  return (
    <>
      {schema.map((field: UIType, idx) =>
        field?.validate?.required === true ? (
          <div className="my-2" key={field.jsonKey ?? idx}>
            {/* <div className="w-full basis-full"> */}
            <InputForm fieldData={field} />
            {/* </div> */}
            {field.level === 0 && advToggle && (
              <Stack direction="row" className="items-center p-2">
                <Typography className="text-black">
                  {advancedFieldsVisible === true ? "Hide" : "Show"} advanced
                  fields
                </Typography>
                <Switch
                  value={advancedFieldsVisible}
                  defaultChecked={field.validate.required}
                />
              </Stack>
            )}
          </div>
        ) : advancedFieldsVisible === true ||
          globalAdvanceToggle?.globalAdvFieldToggle === true ? (
          <div className="my-2" key={field.jsonKey ?? idx}>
            <InputForm fieldData={field} />
          </div>
        ) : (
          <></>
        )
      )}
    </>
  );
};
