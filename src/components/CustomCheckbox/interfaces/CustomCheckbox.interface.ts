export interface CustomCheckboxProps {
  colorScheme?: string;
  size: size;
  defaultChecked: boolean;
  isInvalid: boolean;
  isChecked: boolean;
  isDisabled: boolean;
  type: Color;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type size = "sm" | "md" | "lg";
export type Color =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "accent"
  | "custom";
