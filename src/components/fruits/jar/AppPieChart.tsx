import { PieChart } from "react-minimal-pie-chart";
import { AppPieChartProps } from "../../../utils/types";
import { FC, useContext, useEffect, useState } from "react";
import { FruitJarContext } from "../../../store/context";

const AppPieChart: FC = () => {
  const { jarItems } = useContext(FruitJarContext);
  const [pieData, setPieData] = useState<AppPieChartProps[]>([]);

  useEffect(() => {
    const filterData = async () => {
      const arrData: AppPieChartProps[] = [];
      const arrColors = ["#70d6ff", "#ff70a6", "#ff9770", "#ffd670", "#57cc99", "#ffba08"];

      // for (let item of jarItems) {
      for (let i = 0; i < jarItems.length; i++) {
        arrData.push({
          title: jarItems[i].name,
          label: jarItems[i].name,
          value: jarItems[i].totalCalories,
          color: arrColors[i % arrColors.length],
        });
      }
      setPieData(arrData);
    };

    filterData();
  }, [jarItems]);

  return (
    <div className="pie-chart">
      <PieChart
        data={pieData}
        radius={20}
        paddingAngle={0}
        animate
        label={({ dataEntry }) => `${dataEntry.label} ${dataEntry.value}`}
        labelPosition={112}
        labelStyle={{ fontSize: "0.1rem", fontWeight: "lighter", fill: "#a7c957" }}
      />
    </div>
  );
};

export default AppPieChart;
