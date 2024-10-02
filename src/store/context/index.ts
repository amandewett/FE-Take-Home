import { createContext } from "react";
import { FruitJarContextType } from "../../utils/types";

export const FruitJarContext = createContext<FruitJarContextType>({
  jarItems: [],
  addToJar: () => {},
});
