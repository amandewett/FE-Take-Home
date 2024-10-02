import "./FruitList.css";
import { motion } from "framer-motion";

const FruitGroupByComponent = ({ fnGroupBy }: any) => {
  return (
    <motion.section initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", type: "tween", duration: 0.8 }} className="fruit-group-by-container">
      <label htmlFor="group-by-select">Group By:</label>
      <select name="fruits-select" id="group-by-select" defaultValue="none" onChange={fnGroupBy}>
        <option value="none">None</option>
        <option value="family">Family</option>
        <option value="order">Order</option>
        <option value="genus">Genus</option>
      </select>
    </motion.section>
  );
};

export default FruitGroupByComponent;
