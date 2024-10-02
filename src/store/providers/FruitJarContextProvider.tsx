import { FC, PropsWithChildren } from "react";
import { FruitJarContext } from "../context";
import { useFruitJarReducer } from "../../hooks/useFruitJarReducer";
import { Fruit } from "../../utils/types";
import { EnumFruitJarDispatchType } from "../../utils/enums";

const FruitJarContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { jarState, jarDispatch } = useFruitJarReducer();

  const handleAddToJar = (fruit: Fruit) => {
    jarDispatch({
      type: EnumFruitJarDispatchType.ADD,
      payload: fruit,
    });
  };

  const defaultValue = {
    jarItems: jarState.jarItems,
    addToJar: handleAddToJar,
  };

  return <FruitJarContext.Provider value={defaultValue}>{children}</FruitJarContext.Provider>;
};

export default FruitJarContextProvider;
