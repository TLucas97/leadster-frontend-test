export interface SelectProps {
  options: string[];
  value: string | null;
  defaultValue: string;
  onChange: (selectedValue: string) => void;
}
