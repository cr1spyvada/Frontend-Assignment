import { TextField, TextareaAutosize } from "@mui/material";
import React, { useEffect, useState } from "react";

interface EditorProps {
  changeSchema: (newSchema: string) => void;
}

export const Editor = (props: EditorProps) => {
  const { changeSchema } = props;
  const [rawFormData, setRawFormData] = useState("");

  const updateFormData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRawFormData(event.target.value);
  };

  useEffect(() => {
    changeSchema(rawFormData);
  }, [rawFormData]);

  return (
    <>
      <textarea
        placeholder="Enter UI Schema here..."
        className="text-black h-full w-full"
        value={rawFormData}
        onChange={updateFormData}
      />
    </>
  );
};
