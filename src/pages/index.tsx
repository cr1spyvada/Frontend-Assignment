import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Container } from "@mui/material";
import { useState } from "react";
import { Editor } from "@/components/Editor";
import { DynamicForm } from "@/components/DynamicForm";

export default function Home() {
  const [schema, setSchema] = useState<{} | null>(null);

  const changeSchema = (newSchema: string) => {
    // setSchema(newSchema);
    try {
      // console.log(
      // JSON.parse(newSchema)
      setSchema(JSON.parse(newSchema));
      const value = JSON.parse(newSchema);
      console.log({ value });
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <Container maxWidth="xl" className="bg-white min-h-screen flex p-4 gap-2">
      <div className="flex-[3] min-h-full">
        <Editor changeSchema={changeSchema} />
      </div>
      <Box className="flex-[7] bg-black min-h-full">
        <DynamicForm schema={schema} />
      </Box>
    </Container>
  );
}
