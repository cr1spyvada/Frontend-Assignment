export interface BaseField {
  sort: number;
  label: string;
  description?: string;
  uiType: string;
  jsonKey: string;
  level: number;
  validate: {
    required: boolean;
    immutable?: boolean;
  };
  placeholder: string;
}

export interface TextBoxField extends BaseField {
  pattern: string;
}

export interface RadioField extends BaseField {
  validate: {
    required: boolean;
    immutable?: boolean;
    options: {
      label: string;
      value: string;
      description: string;
      icon: string;
    }[];
    defaultValue: string;
  };
}

export interface GroupField extends BaseField {
  subParameters: UIType[];
}

export interface IgnoreField extends GroupField {
  conditions: [
    {
      jsonKey: string;
      op: string;
      value: string;
      action: string;
    }
  ];
}
export interface SwitchField extends BaseField {
  validate: {
    required: boolean;
    immutable?: boolean;
    defaultValue: boolean | string;
  };
}
export type UIType =
  | TextBoxField
  | RadioField
  | GroupField
  | IgnoreField
  | SwitchField
  | BaseField;
