import { FC } from "react";
import { FruitJarContextItemType } from "../../../utils/types";
import { motion } from "framer-motion";
import "./FruitJarComponent.css";

const JarListItem: FC<FruitJarContextItemType> = ({ ...props }: FruitJarContextItemType) => {
  return (
    <motion.li className="jar-list-item-container">
      <h3>{props.name}</h3>
      <h6>{`Total calories: ${props.totalCalories}`}</h6>
    </motion.li>
  );
};

export default JarListItem;
