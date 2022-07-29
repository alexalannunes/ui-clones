import { createContext, FC, ReactNode } from "react";

export interface IThemeColors {
  uiMain: string;
  uiMainLight: string;
  uiLight: string;
  uiDark: string;
  uiBlueLight: string;
  uiOrange: string;
  uiOrangeLight: string;
  uiGreenLight: string;
  uiGreenDark: string;
}
export type ColorsType =
  | "#7d71ff"
  | "#efe9ff"
  | "#ffffff"
  | "#efe9ff"
  | "#9abfcc"
  | "#eb7e51"
  | "#ffe6c7"
  | "#bae6a8"
  | "#46704f";

export const themeColors: IThemeColors = {
  uiMain: "#7d71ff",
  uiMainLight: "#efe9ff",
  uiLight: "#ffffff",
  uiDark: "#efe9ff",
  uiBlueLight: "#9abfcc",
  uiOrange: "#eb7e51",
  uiOrangeLight: "#ffe6c7",
  uiGreenLight: "#bae6a8",
  uiGreenDark: "#46704f",
};

const ThemeContext = createContext<IThemeColors>(themeColors);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = themeColors;
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
