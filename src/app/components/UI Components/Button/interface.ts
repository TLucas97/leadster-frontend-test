export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  square?: boolean;
}
