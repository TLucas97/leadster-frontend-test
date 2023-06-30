export interface SelectProps {
  options: string[];
  defaultValue?: string;
  onChange: (selectedValue: string) => void;
}
