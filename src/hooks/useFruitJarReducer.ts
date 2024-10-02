import { useReducer } from "react";
import { FruitJarContextItemType, ReducerActionType } from "../utils/types";
import { EnumFruitJarDispatchType } from "../utils/enums";

const fruitJarReducer = (state: any, action: ReducerActionType) => {
  if (action.type === EnumFruitJarDispatchType.ADD) {
    let jarItems: FruitJarContextItemType[] = [...state.jarItems];
    let fruit: FruitJarContextItemType = { ...action.payload, quantity: 0, totalCalories: 0 };

    //check if the list have the fruit already
    const fruitIndex = jarItems.findIndex((item: FruitJarContextItemType) => item.id === fruit.id);

    //it is a new item
    if (fruitIndex === -1) {
      fruit.quantity = 1;
      fruit.totalCalories = fruit.nutritions.calories;

      return {
        ...state,
        jarItems: [...jarItems, fruit],
      };
    } else {
      let jarItem: FruitJarContextItemType = jarItems[fruitIndex];
      let updatedCartItem = {
        ...jarItem,
        quantity: jarItem.quantity + 1,
        totalCalories: (jarItem.quantity + 1) * jarItem.nutritions.calories,
      };
      jarItems[fruitIndex] = updatedCartItem;
      return {
        ...state,
        jarItems: jarItems,
      };
    }
  }
  return state;
};

export const useFruitJarReducer = () => {
  const [jarState, jarDispatch] = useReducer(fruitJarReducer, {
    jarItems: [],
  });

  return { jarState, jarDispatch };
};
