import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#333333",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#333333",
  textDisabled: "#BDC2C4",
  textSubtle: "#333333",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #333333 0%, #444444 100%)",
    violet: "linear-gradient(180deg, #333333 0%, #444444 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#333333",
  background: "#333333",
  backgroundDisabled: "#333333",
  contrast: "#333333",
  dropdown: "#333333",
  invertedContrast: "#333333",
  input: "#333333",
  inputSecondary: "#333333",
  primaryDark: "#333333",
  tertiary: "#333333",
  text: "#333333",
  textDisabled: "#333333",
  textSubtle: "#333333",
  borderColor: "#333333",
  card: "#333333",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
  },
};
