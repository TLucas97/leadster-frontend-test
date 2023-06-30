// Objective: Project's global colors pallete for possible future changes
// You can add a color pallete whenever you need, just follow the current pattern

export function defineTheme(theme: string) {
  const themes: any = {
    leadster: {
      primary: {
        100: "#F1F8FE",
        200: "#0183FE",
        300: "#C3ECFE",
        400: "#A0D8FF",
      },
      white: {
        100: "#FFFFFF",
        200: "#F8F8F8",
      },
      gray: {
        100: "#E8EDF2",
        200: "#BCC5D3",
      },
      dark: {
        100: "#000000",
        200: "#333333",
        300: "#4F4F4F",
        400: "#828282",
      },
      yellow: {
        100: "#FFF9D1",
        200: "#FFF1A0",
      },
      green: {
        100: "#C3F5EA",
        200: "#9EEEDF",
      },
    },
    dark: {
      primary: {
        100: "#1C1C1C",
        200: "#2F2F2F",
        300: "#4F4F4F",
        400: "#828282",
      },
      white: {
        100: "#FFFFFF",
        200: "#F8F8F8",
      },
      gray: {
        100: "#E8EDF2",
        200: "#BCC5D3",
      },
      dark: {
        100: "#000000",
        200: "#333333",
        300: "#4F4F4F",
        400: "#828282",
      },
      yellow: {
        100: "#FFF9D1",
        200: "#FFF1A0",
      },
      green: {
        100: "#C3F5EA",
        200: "#9EEEDF",
      },
    }
  }

  return themes[theme];
}
