import type { SelectProps } from "./interface";
import { SelectStyles } from "./styled";
import { ChangeEvent } from "react";

export default function Select({
  options,
  defaultValue = "Selecione uma data",
  onChange,
}: SelectProps) {

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <SelectStyles
      onChange={handleChange}
      defaultValue={defaultValue ?? ""}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectStyles>
  );
}
