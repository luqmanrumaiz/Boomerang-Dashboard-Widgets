import React from "react";
import "./AgeGroupChart.css";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    Age: "0-18",
    Female: 0,
    Male: 1,
    Other: 0,
  },
  {
    Age: "19-24",
    Female: 3,
    Male: 7,
    Other: 0,
  },
  {
    Age: "25-29",
    Female: 3,
    Male: 3,
    Other: 0,
  },
  {
    Age: "30-34",
    Female: 10,
    Male: 15,
    Other: 1,
  },
  {
    Age: "35-39",
    Female: 7,
    Male: 30,
    Other: 0,
  },
  {
    Age: "40-44",
    Female: 5,
    Male: 14,
    Other: 0,
  },
  {
    Age: "45-49",
    Female: 2,
    Male: 7,
    Other: 0,
  },
  {
    Age: "50-54",
    Female: 1,
    Male: 1,
    Other: 0,
  },
  {
    Age: "55+",
    Female: 0,
    Male: 0,
    Other: 0,
  },
];

const config = {
  keys: ["Female", "Male", "Other"],

  margin: {
    top: 50,
    right: 130,
    bottom: 50,
    left: 60,
  },

  defs: [
    {
      id: "lines",
      type: "patternLines",
      background: "inherit",
      color: "#f1bc73",
      rotation: -45,
      lineWidth: 5,
      spacing: 10,
    },
  ],
  fill: [
    {
      match: {
        id: "Other",
      },
      id: "lines",
    },
  ],

  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "Age",
    legendPosition: "middle",
    legendOffset: 32,
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "Head Count",
    legendPosition: "middle",
    legendOffset: -40,
  },
  legends: [
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
  ],
};

const theme = { fontFamily: "Poppins" };

export default function AgeGroupChart() {
  return (
    <ResponsiveBar
      data={data}
      keys={config.keys}
      indexBy="Age"
      margin={config.margin}
      padding={0.3}
      colors={["#ff705e", "#2581bb", "#73c9c0"]}
      colorBy="id"
      defs={config.defs}
      fill={config.fill}
      theme={theme}
      defs={config.defs}
      fill={config.fill}
      axisTop={null}
      axisRight={null}
      axisBottom={config.axisBottom}
      axisLeft={config.axisLeft}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="inherit:darker(1.6)"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={config.legends}
    />
  );
}
