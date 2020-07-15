import React from "react";
import Week from "./Week";

const RenderWeek = ({ popup }) => {
  const arrComponent = [];
  for (let i = 0; i < 25; i++) {
    arrComponent.push(<Week key={i} />);
  }
  return (
    <div className="rectangle">
      {arrComponent.map(({ key }) => {
        return <Week key={key} popup={popup} />;
      })}
    </div>
  );
};

export default RenderWeek;
