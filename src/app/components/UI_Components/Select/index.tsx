import type { SelectProps } from "./interface";
import { SelectStyles } from "./styled";
import { ChangeEvent } from "react";

export default function Select({ options, value, onChange }: SelectProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <SelectStyles value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectStyles>
  );
}
