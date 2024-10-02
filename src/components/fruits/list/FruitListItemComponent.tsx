import { FC, useContext } from "react";
import { motion, Variants } from "framer-motion";
import "./FruitListItemComponent.css";
import { FruitListItemComponentProps } from "../../../utils/types";
import { FruitJarContext } from "../../../store/context";

const FruitListItemComponent: FC<FruitListItemComponentProps> = ({ fruitItem }: FruitListItemComponentProps) => {
  const { addToJar } = useContext(FruitJarContext);
  const item: Variants | undefined = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  const handleOnAddClick = () => {
    addToJar(fruitItem);
  };

  return (
    <motion.div variants={item} layout className="fruit-list-item-container">
      <h3>{fruitItem.name}</h3>
      <h6>{`(${fruitItem.nutritions.calories})`}</h6>
      <motion.button whileHover={{ scale: 0.95 }} onClick={handleOnAddClick}>
        Add
      </motion.button>
    </motion.div>
  );
};

export default FruitListItemComponent;
