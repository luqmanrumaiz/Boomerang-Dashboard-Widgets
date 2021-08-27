import "./App.css";
import React from "react";
import AgeGroupChart from "./components/AgeGroupChart/AgeGroupChart";
import HeadCountChart from "./components/HeadCountChart/HeadCountChart";
import SkillMatrixChart from "./components/SkillMatrixChart/SkillMatrixChart";
import TurnoverChart from "./components/TurnoverChart/TurnoverChart";

export default function App() {
  return (
    <div className="parent">
      <div className="div1">
        <AgeGroupChart />
      </div>
      <div className="div2">
        <HeadCountChart />
      </div>
      <div className="div3">
        <SkillMatrixChart />
      </div>
      <div className="div4">
        <TurnoverChart />
      </div>
    </div>
  );
}
