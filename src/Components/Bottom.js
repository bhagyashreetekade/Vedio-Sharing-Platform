import React from "react";
import Cards from "./Cards";

const Bottom = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  );
};

export default Bottom;
