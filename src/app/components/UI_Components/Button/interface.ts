export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "text" | "square";
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
