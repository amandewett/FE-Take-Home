import { FC, useContext } from "react";
import { motion } from "framer-motion";
import { FruitTableItemComponentProps } from "../../../utils/types";
import "./FruitTableItemComponent.css";
import { FruitJarContext } from "../../../store/context";

const FruitTableItemComponent: FC<FruitTableItemComponentProps> = ({ fruitItem }: FruitTableItemComponentProps) => {
  const { addToJar } = useContext(FruitJarContext);

  const handleOnAddClick = () => {
    addToJar(fruitItem);
  };

  return (
    <tr>
      <td>{fruitItem.name}</td>
      <td>{fruitItem.family}</td>
      <td>{fruitItem.order}</td>
      <td>{fruitItem.genus}</td>
      <td>{fruitItem.nutritions.calories}</td>
      <td>
        <motion.button onClick={handleOnAddClick} whileHover={{ color: "var(--app-gradient-two)", scale: 0.95 }} transition={{ duration: 0.1 }}>
          Add
        </motion.button>
      </td>
    </tr>
  );
};

export default FruitTableItemComponent;
