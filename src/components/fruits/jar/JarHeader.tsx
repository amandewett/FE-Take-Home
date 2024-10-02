import { useContext } from "react";
import { FruitJarContext } from "../../../store/context";
import { FruitJarContextItemType } from "../../../utils/types";

const JarHeader = () => {
  const { jarItems } = useContext(FruitJarContext);

  const totalCalories = jarItems.reduce((prev: number, curr: FruitJarContextItemType) => prev + curr.totalCalories, 0);

  return (
    <>
      <h1>Fruit Jar</h1>
      <h3>Total calories in the jar: {JSON.stringify(totalCalories)}</h3>
    </>
  );
};

export default JarHeader;
