import { EnumViewType } from "../enums";

export type Fruit = {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: Nutritions;
};

export type Nutritions = {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
};

export type FruitListComponentProps = {
  fruitList: Fruit[] | undefined;
  viewType: EnumViewType;
};

export type FruitListItemComponentProps = {
  fruitItem: Fruit;
};

export type FruitTableItemComponentProps = {
  fruitItem: Fruit;
};

export type FruitListViewTypeComponentProps = {
  viewType: string;
  onViewTypeClicked: () => void;
};

export type FruitCollapsibleListItemProps = {
  header: string;
  fruits: Fruit[];
};

export type FruitJarContextItemType = Fruit & {
  quantity: number;
  totalCalories: number;
};

export type FruitJarContextType = {
  jarItems: FruitJarContextItemType[];
  addToJar: (fruit: Fruit) => void;
};

export type ReducerActionType = {
  type: string;
  payload: any;
};

export type AppPieChartProps = {
  title: string;
  label: string;
  value: number;
  color: string;
};
