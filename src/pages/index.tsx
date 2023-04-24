import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  Box,
  Button,
  Container,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { createContext, useState } from "react";
import { Editor } from "@/components/Editor";
import { DynamicForm } from "@/components/DynamicForm";
import { UIType } from "@/types/UIType";
import FormData from "form-data";

type TabContextType = {
  activeTab: { [key: string]: string };
  setActiveTab: React.Dispatch<React.SetStateAction<{}>>;
};

type advFieldsType = {
  globalAdvFieldToggle: boolean;
};

type outputType = {
  formData: { [key: string]: string };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ActiveTab = createContext<TabContextType | undefined>(undefined);
export const AdvanceFieldToggle = createContext<advFieldsType | undefined>(
  undefined
);
export const OutputContext = createContext<outputType | undefined>(undefined);

export default function Home() {
  const [schema, setSchema] = useState<UIType[]>([]);
  const [activeTab, setActiveTab] = useState({});
  const [advancedFieldsVisible, setAdvancedFieldsVisible] =
    useState<boolean>(false);
  const [formData, setFormData] = useState({});

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdvancedFieldsVisible(event.target.checked);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // formData.append(name, value);
    setFormData(formData);
    // setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    console.log("submit", { formData });
  };

  let advToggle =
    schema.filter((field) => field?.validate?.required === true).length > 0;
  return (
    <Stack direction="row" className="bg-white min-h-screen flex p-4 gap-2">
      <div className="flex-[3] min-h-full">
        <Editor changeSchema={changeSchema} />
      </div>
      <Box className="flex-[7] min-h-full">
        <AdvanceFieldToggle.Provider
          value={{ globalAdvFieldToggle: advancedFieldsVisible }}
        >
          <ActiveTab.Provider value={{ activeTab, setActiveTab }}>
            <OutputContext.Provider value={{ formData, handleInputChange }}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <DynamicForm schema={schema} />
                {schema.length > 0 && (
                  <Stack direction="row" className="justify-between">
                    {advToggle && (
                      <Stack direction="row" className="items-center p-2">
                        <Typography className="text-black">
                          {advancedFieldsVisible === true ? "Hide" : "Show"}{" "}
                          advanced fields
                        </Typography>
                        <Switch
                          value={advancedFieldsVisible}
                          onChange={handleChange}
                        />
                      </Stack>
                    )}
                    <Button
                      className="bg-[#3c4450] text-white"
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Stack>
                )}
              </form>
            </OutputContext.Provider>
          </ActiveTab.Provider>
        </AdvanceFieldToggle.Provider>
      </Box>
    </Stack>
  );
}
