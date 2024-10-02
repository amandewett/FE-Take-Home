import { useContext } from "react";
import { FruitJarContext } from "../../../store/context";
import { FruitJarContextItemType } from "../../../utils/types";
import JarListItem from "./JarListItem";

const JarFruitListComponent = () => {
  const { jarItems } = useContext(FruitJarContext);

  return (
    <ol>
      {jarItems.map((fruit: FruitJarContextItemType) => {
        return <JarListItem key={fruit.id} {...fruit} />;
      })}
    </ol>
  );
};

export default JarFruitListComponent;
