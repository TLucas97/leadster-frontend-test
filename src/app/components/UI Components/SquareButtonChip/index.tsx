import { BsCloudDownload } from "react-icons/bs";
import { SquareButtonChipStyles } from "./styled";
import type { SquareButtonChipProps } from "./interface";

export default function SquareButtonChip({
  variant,
  label,
}: SquareButtonChipProps) {
  return (
    <SquareButtonChipStyles variant={variant}>
      <div className="icon-area">
        <div className="icon">
          <BsCloudDownload />
        </div>
      </div>
      <p>{label}</p>
    </SquareButtonChipStyles>
  );
}
