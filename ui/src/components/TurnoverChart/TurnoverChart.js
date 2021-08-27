import React from "react";
import "./TurnoverChart.css";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "AD",
    "hot dog": 171,
    "hot dogColor": "hsl(335, 70%, 50%)",
    burger: 145,
    burgerColor: "hsl(295, 70%, 50%)",
    sandwich: 85,
    sandwichColor: "hsl(25, 70%, 50%)",
    kebab: 183,
    kebabColor: "hsl(342, 70%, 50%)",
    fries: 183,
    friesColor: "hsl(93, 70%, 50%)",
    donut: 1,
    donutColor: "hsl(196, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 139,
    "hot dogColor": "hsl(232, 70%, 50%)",
    burger: 27,
    burgerColor: "hsl(161, 70%, 50%)",
    sandwich: 21,
    sandwichColor: "hsl(277, 70%, 50%)",
    kebab: 157,
    kebabColor: "hsl(162, 70%, 50%)",
    fries: 151,
    friesColor: "hsl(11, 70%, 50%)",
    donut: 78,
    donutColor: "hsl(131, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 78,
    "hot dogColor": "hsl(265, 70%, 50%)",
    burger: 41,
    burgerColor: "hsl(236, 70%, 50%)",
    sandwich: 110,
    sandwichColor: "hsl(353, 70%, 50%)",
    kebab: 49,
    kebabColor: "hsl(211, 70%, 50%)",
    fries: 42,
    friesColor: "hsl(237, 70%, 50%)",
    donut: 182,
    donutColor: "hsl(162, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 26,
    "hot dogColor": "hsl(341, 70%, 50%)",
    burger: 179,
    burgerColor: "hsl(298, 70%, 50%)",
    sandwich: 33,
    sandwichColor: "hsl(301, 70%, 50%)",
    kebab: 117,
    kebabColor: "hsl(26, 70%, 50%)",
    fries: 60,
    friesColor: "hsl(288, 70%, 50%)",
    donut: 187,
    donutColor: "hsl(207, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 152,
    "hot dogColor": "hsl(42, 70%, 50%)",
    burger: 49,
    burgerColor: "hsl(278, 70%, 50%)",
    sandwich: 27,
    sandwichColor: "hsl(212, 70%, 50%)",
    kebab: 29,
    kebabColor: "hsl(203, 70%, 50%)",
    fries: 34,
    friesColor: "hsl(73, 70%, 50%)",
    donut: 36,
    donutColor: "hsl(192, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 8,
    "hot dogColor": "hsl(64, 70%, 50%)",
    burger: 127,
    burgerColor: "hsl(336, 70%, 50%)",
    sandwich: 14,
    sandwichColor: "hsl(85, 70%, 50%)",
    kebab: 52,
    kebabColor: "hsl(94, 70%, 50%)",
    fries: 195,
    friesColor: "hsl(41, 70%, 50%)",
    donut: 86,
    donutColor: "hsl(75, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 61,
    "hot dogColor": "hsl(256, 70%, 50%)",
    burger: 181,
    burgerColor: "hsl(174, 70%, 50%)",
    sandwich: 171,
    sandwichColor: "hsl(277, 70%, 50%)",
    kebab: 108,
    kebabColor: "hsl(203, 70%, 50%)",
    fries: 126,
    friesColor: "hsl(293, 70%, 50%)",
    donut: 92,
    donutColor: "hsl(237, 70%, 50%)",
  },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export default function TurnoverChart() {
  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      valueFormat={{ format: "", enabled: false }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
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
