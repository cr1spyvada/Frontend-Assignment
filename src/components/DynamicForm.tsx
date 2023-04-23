import React from "react";

interface FormProps {
  schema: {} | null;
}

export const DynamicForm = (props: FormProps) => {
  const { schema } = props;
  return <>{JSON.stringify(schema)}</>;
};
