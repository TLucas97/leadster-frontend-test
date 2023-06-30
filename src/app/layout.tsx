import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { leadster_icon } from "./utils/app_images";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={leadster_icon} type="image/png" sizes="28x28" />
      </head>
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
