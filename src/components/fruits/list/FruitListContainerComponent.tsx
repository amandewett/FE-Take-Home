import FruitGroupByComponent from "./FruitGroupByComponent";
import FruitsListComponent from "./FruitsListComponent";
import axiosInstance from "../../../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import AppLoader from "../../shared/AppLoader";
import { EnumGroupBy, EnumViewType } from "../../../utils/enums";
import FruitListViewTypeComponent from "./FruitListViewTypeComponent";
import { useState } from "react";
import FruitCollapsibleListItem from "./FruitCollapsibleListItem";

const FruitListContainerComponent = () => {
  const [viewType, setViewType] = useState<EnumViewType>(EnumViewType.LIST);
  const [groupBy, setGroupBy] = useState<EnumGroupBy>(EnumGroupBy.NONE);

  const {
    data: dataFruitList,
    isPending: isPendingFruitList,
    isError,
  } = useQuery({
    queryKey: ["fruitsList"],
    queryFn: ({ signal }) => axiosInstance.get(`/api/fruits`, { signal: signal }),
  });

  const onGroupByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.target.value;
    setGroupBy(value as EnumGroupBy);
  };

  const onViewTypeClicked = () => {
    setViewType((value) => (value === EnumViewType.LIST ? EnumViewType.TABLE : EnumViewType.LIST));
  };

  const filterData = (groupBy: string) => {
    let arrResult: any = {};
    for (let fruit of dataFruitList?.data) {
      const key = fruit[groupBy];

      if (!arrResult[key]) {
        arrResult[key] = [];
      }
      arrResult[key].push(fruit);
    }
    return arrResult;
  };

  if (groupBy !== EnumGroupBy.NONE) {
    const filteredData = filterData(groupBy);

    return (
      <section id="fruit-list-container">
        <FruitGroupByComponent fnGroupBy={onGroupByChange} />
        {isPendingFruitList && <AppLoader />}
        {isError && <p>Fruit list API Error....</p>}
        <section className="fruit-list">
          {Object.keys(filteredData).map((groupName: string) => (
            <FruitCollapsibleListItem key={groupName} header={groupName} fruits={filteredData[groupName]} />
          ))}
        </section>
      </section>
    );
  }

  return (
    <section id="fruit-list-container">
      <FruitGroupByComponent fnGroupBy={onGroupByChange} />
      <FruitListViewTypeComponent onViewTypeClicked={onViewTypeClicked} viewType={viewType} />
      {isPendingFruitList && <AppLoader />}
      {isError && <p>Fruit list API Error....</p>}
      {!isPendingFruitList && !isError && <FruitsListComponent fruitList={dataFruitList?.data} viewType={viewType} />}
    </section>
  );
};

export default FruitListContainerComponent;
