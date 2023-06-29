import { LineSeparatorStyles } from "./styled";
import { LineSeparatorProps } from "./interface";

export default function LineSeparator({ spacing, color }: LineSeparatorProps) {
  return <LineSeparatorStyles spacing={spacing} color={color} />;
}
