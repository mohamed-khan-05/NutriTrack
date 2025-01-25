import React, { useEffect, useState } from "react";
import Card from "./Card";
import BMR from "./BMR";
import AddBar from "./AddBar";

const List = (props) => {
  const { foods, setFoods } = props;

  return (
    <div className="w-[100vw] h-[75vh] box-border mt-2 flex flex-col items-center">
      <h1 className="text-center text-[1.3rem] font-semibold">Food List</h1>
      <AddBar foods={foods} setFoods={setFoods} />
      <div className="overflow-y-auto overflow-x-hidden">
        {foods.map((food, index) => (
          <div className="mr-6" key={index}>
            <Card foods={foods} setFoods={setFoods} index={index} food={food} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
