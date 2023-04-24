import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Container } from "@mui/material";
import { useState } from "react";
import { Editor } from "@/components/Editor";
import { DynamicForm } from "@/components/DynamicForm";
import { UIType } from "@/types/UIType";

export default function Home() {
  const [schema, setSchema] = useState<UIType[]>([]);

  const changeSchema = (newSchema: string) => {
    try {
      // console.log({ newSchema });
      // const newString = JSON.stringify(newSchema);
      const sortedSchema = newSchema
        .replace(/^\s+|\s+$/gm, "")
        .replace(/(\r\n|\n|\r)/gm, "");
      // console.log({ sortedSchema });
      const schemaObject: UIType[] = JSON.parse(sortedSchema);
      // sorting the Schema according to sort
      setSchema(
        schemaObject.sort(function (a: UIType, b: UIType) {
          return a.sort - b.sort;
        })
      );
      // const value = schemaObject.sort(function (a: UIType, b: UIType) {
      //   return a.sort - b.sort;
      // });
      // console.log({ value });
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <Container maxWidth="xl" className="bg-white min-h-screen flex p-4 gap-2">
      <div className="flex-[3] min-h-full">
        <Editor changeSchema={changeSchema} />
      </div>
      <Box className="flex-[7] min-h-full">
        <DynamicForm schema={schema} />
      </Box>
    </Container>
  );
}
