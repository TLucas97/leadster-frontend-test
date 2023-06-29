export interface SelectProps {
  options: string[];
  value: string;
  onChange: (selectedValue: string) => void;
}
