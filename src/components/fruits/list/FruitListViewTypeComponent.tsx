import { FC } from "react";
import { FruitListViewTypeComponentProps } from "../../../utils/types";
import { EnumViewType } from "../../../utils/enums";
import { CiViewList, CiViewTable } from "react-icons/ci";

const FruitListViewTypeComponent: FC<FruitListViewTypeComponentProps> = ({ viewType, onViewTypeClicked }: FruitListViewTypeComponentProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "end", alignItems: "center", fontSize: "1.5rem", marginTop: "2rem" }}>
      <h6 style={{ marginRight: "10px" }}>View By:</h6>
      {viewType === EnumViewType.LIST ? (
        <CiViewList color="var(--app-primary)" cursor="pointer" onClick={onViewTypeClicked} />
      ) : (
        <CiViewTable color="var(--app-primary)" onClick={onViewTypeClicked} cursor="pointer" />
      )}
    </div>
  );
};

export default FruitListViewTypeComponent;
