import { FC } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Fruit, FruitListComponentProps } from "../../../utils/types";
import FruitListItemComponent from "./FruitListItemComponent";
import { EnumViewType } from "../../../utils/enums";
import FruitTableItemComponent from "./FruitTableItemComponent";

const FruitsListComponent: FC<FruitListComponentProps> = ({ fruitList, viewType }: FruitListComponentProps) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (viewType === EnumViewType.LIST) {
    return (
      <motion.section variants={container} initial="hidden" animate="show" className="fruit-list">
        <AnimatePresence>
          {fruitList?.map((fruit: Fruit) => {
            return <FruitListItemComponent fruitItem={fruit} key={fruit.id} />;
          })}
        </AnimatePresence>
      </motion.section>
    );
  }
  return (
    <section className="fruit-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Family</th>
            <th>Order</th>
            <th>Genus</th>
            <th>Calories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fruitList?.map((fruit: Fruit) => {
            return <FruitTableItemComponent fruitItem={fruit} key={fruit.id} />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default FruitsListComponent;
