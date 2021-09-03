import "./App.css";
import React from "react";
import AgeGroupChart from "./components/AgeGroupChart/AgeGroupChart";
import HeadCountChart from "./components/HeadCountChart/HeadCountChart";
import SkillMatrixChart from "./components/SkillMatrixChart/SkillMatrixChart";
import TurnoverChart from "./components/TurnoverChart/TurnoverChart";

export default function App() {
  return (
    <div className="dashboard">
      <div className="age">
        <AgeGroupChart />
      </div>
      <div className="skill">
        <SkillMatrixChart />
      </div>
      <div className="headCount">
        <HeadCountChart />
      </div>
      <div className="turnover">
        <TurnoverChart />
      </div>
    </div>
  );
}
