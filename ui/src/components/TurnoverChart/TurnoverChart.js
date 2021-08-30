import React from "react";
import "./TurnoverChart.css";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    Month: "Jan",
    Hired: 21,
    Resigned: 2,
  },
  {
    Month: "Feb",
    Hired: 11,
    Resigned: 3,
  },
  {
    Month: "Mar",
    Hired: 2,
    Resigned: 5,
  },
  {
    Month: "Apr",
    Hired: 20,
    Resigned: 16,
  },
  {
    Month: "May",
    Hired: 3,
    Resigned: 3,
  },
  {
    Month: "Jun",
    Hired: 4,
    Resigned: 0,
  },
  {
    Month: "Jul",
    Hired: 9,
    Resigned: 0,
  },
  {
    Month: "Aug",
    Hired: 0,
    Resigned: 1,
  },
  {
    Month: "Sep",
    Hired: 9,
    Resigned: 3,
  },
  {
    Month: "Oct",
    Hired: 1,
    Resigned: 3,
  },
  {
    Month: "Nov",
    Hired: 12,
    Resigned: 3,
  },
  {
    Month: "Dec",
    Hired: 4,
    Resigned: 0,
  },
];

const theme = {fontFamily:"Poppins"};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export default function TurnoverChart() {
  return (
    <ResponsiveBar
      data={data}
      keys={["Hired", "Resigned"]}
      indexBy="Month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      valueFormat={{ format: "", enabled: false }}
      colors={{ scheme: "set2" }}
      theme = {theme}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Month",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Turnover",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
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
