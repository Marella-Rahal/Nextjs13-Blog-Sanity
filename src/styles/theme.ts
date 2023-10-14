import { buildLegacyTheme } from "sanity";

const color = {
  black: "#1a1a1a",
  white: "#fff",
  brand: "#b20b0b",
  red: "#db4437",
  yellow: "#f4b400",
  green: "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  // Base theme color
  "--black": color["black"],
  "--white": color["white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": color["black"],
  "--component-text-color": color["white"],

  // Brand
  "--brand-primary": color["brand"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": color["brand"],
  "--default-button-success-color": color["green"],
  "--default-button-warning-color": color["yellow"],
  "--default-button-danger-color": color["red"],

  // State
  "--state-info-color": color["brand"],
  "--state-success-color": color["green"],
  "--state-warning-color": color["yellow"],
  "--state-danger-color": color["red"],

  // Navbar
  "--main-navigation-color": color["black"],
  "--main-navigation-color--inverted": color["white"],

  "--focus-color": color["brand"],
});
