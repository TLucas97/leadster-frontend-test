import { AppWrapperContainerStyles } from "./styled";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <AppWrapperContainerStyles>
      <div className="view">{children}</div>
    </AppWrapperContainerStyles>
  );
}
