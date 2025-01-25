import React, { useEffect, useState } from "react";
import Card from "./Card";
import BMR from "./BMR";
import AddBar from "./AddBar";

const List = (props) => {
  const { foods, setFoods } = props;

  return (
    <div className="w-[100vw] h-[80vh] overflow-y-auto overflow-x-hidden mt-8 flex flex-col items-center">
      <h1 className="text-center text-[1.3rem] font-semibold">Food List</h1>
      <AddBar foods={foods} setFoods={setFoods} />
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            <Card foods={foods} setFoods={setFoods} index={index} food={food} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
