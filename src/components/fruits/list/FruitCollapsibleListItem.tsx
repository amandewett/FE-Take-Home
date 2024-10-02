import { useState } from "react";
import { motion } from "framer-motion";
import "./FruitCollapsibleListItem.css";
import { Fruit, FruitCollapsibleListItemProps } from "../../../utils/types";
import FruitListItemComponent from "./FruitListItemComponent";
import { IoIosArrowDown } from "react-icons/io";

const FruitCollapsibleListItem = ({ header, fruits }: FruitCollapsibleListItemProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <section className="collap-container">
        <section
          id="collap-header"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <h2>{header}</h2>
          <motion.span animate={{ rotate: isActive ? 180 : 0 }} transition={{ type: "tween", ease: "linear" }}>
            <IoIosArrowDown />
          </motion.span>
        </section>
        <motion.section
          className="collap-list"
          initial={{ opacity: 0, display: "none" }}
          animate={{ opacity: isActive ? 1 : 0, display: isActive ? "block" : "none" }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        >
          {fruits.map((fruit: Fruit) => {
            return <FruitListItemComponent key={fruit.id} fruitItem={fruit} />;
          })}
        </motion.section>
      </section>
    </>
  );
};

export default FruitCollapsibleListItem;
