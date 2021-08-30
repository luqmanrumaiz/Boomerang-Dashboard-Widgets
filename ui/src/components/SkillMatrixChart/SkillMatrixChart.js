import React from "react";
import "./SkillMatrixChart.css";
import { ResponsiveBar } from "@nivo/bar";

var dep = [
  "BA/PMO",
  "Corporate Communication",
  "Development",
  "Devops",
  "HR",
  "Managerial",
  "Quality Assurance",
  "UI/UX",
];
var male = [4, 5, 3, 4, 1, 6, 4, 7];
var female = [3, 4, 5, 7, 5, 3, 2, 4];

const chartData = () => {
  var arr = [];
  for (var i = 0; i < dep.length; i++) {
    let temp = {};
    temp.Department = dep[i];
    temp.Male = male[i];
    temp.Female = female[i];
    arr.push(temp);
  }
  return arr;
};

const theme = { fontFamily: "Poppins" };

export default function TurnoverChart() {
  return (
    <ResponsiveBar
      data={chartData()}
      keys={["Male", "Female"]}
      indexBy="Department"
      margin={{ right: 130, bottom: 50, left: 170 }}
      padding={0.2}
      groupMode="grouped"
      layout="horizontal"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      valueFormat={{ format: "", enabled: false }}
      colors={["#ff705e", "#2581bb"]}
      theme={theme}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickRotation: 0,
        legend: "No of Employees",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
