import { ButtonStyles } from "./styled";
import type { ButtonProps } from "./interface";

export default function Button({
  children,
  variant = "secondary",
  onClick,
  disabled,
  type,
  square,
}: ButtonProps) {
  return (
    <ButtonStyles
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      square={square}
    >
      <div className="btn">{children}</div>
    </ButtonStyles>
  );
}
