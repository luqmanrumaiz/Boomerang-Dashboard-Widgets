import React from "react";
import "./HeadCountChart.css";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "Male",
    label: "Male",
    value: 74,
    color: "#0091ff",
  },
  {
    id: "Female",
    label: "Female",
    value: 26,
    color: "#ff0095",
  },
];

const theme = { fontFamily: "Poppins" };

export default function HeadCountChart() {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      sortByValue={true}
      colors={["#82eafa", "#ff91f4"]}
      theme={theme}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.65}
      arcLabelsTextColor="#000000"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#00000011",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#00000011",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "Male",
          },
          id: "dots",
        },
        {
          match: {
            id: "Female",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
}
