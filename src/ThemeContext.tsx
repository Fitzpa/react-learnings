import { createContext } from "react";
// <[string, (theme: string) => void]> tells createContext that we are going to give it a string
// and then we are going to give a function, theme, that takes in a string and returns nothing
const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {},
]);

export default ThemeContext;
