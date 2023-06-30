import { ButtonStyles } from "./styled";
import type { ButtonProps } from "./interface";

export default function Button({
  children,
  variant = "secondary",
  onClick,
  disabled,
  type,
}: ButtonProps) {
  return (
    <ButtonStyles
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <div className="btn">{children}</div>
    </ButtonStyles>
  );
}
