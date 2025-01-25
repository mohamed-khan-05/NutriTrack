import React, { useEffect, useState } from "react";
import List from "./components/List";
import BMR from "./components/BMR";
import { useSwipeable } from "react-swipeable";

// #2f0831 - Primary
// #B497D6 - Secondary

const App = () => {
  const [tab, setTab] = useState("d");
  const [foods, setFoods] = useState([
    {
      FoodName: "Food Name",
      Protein: 1.0,
      Carbohydrate: 1.0,
      Fats: 1.0,
      Calories: 17.0,
    },
  ]);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setTab("b"),
    onSwipedRight: () => setTab("d"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="w-[100vw] h-[100vh] flex flex-col items-center bg-[#170218] text-white select-none"
    >
      <div className="flex absolute bottom-20 gap-5 mb-8">
        <button
          className="text-[1.1rem] font-semibold"
          onClick={() => setTab("d")}
        >
          Food List
        </button>
        <button
          className="text-[1.1rem] font-semibold"
          onClick={() => setTab("b")}
        >
          BMR Calculator
        </button>
        {tab === "b" ? (
          <div className="absolute bg-purple-300 top-5 h-1 w-31.5 mt-1 left-23"></div>
        ) : (
          <div className="absolute bg-purple-300 top-5 h-1 w-19 mt-1"></div>
        )}
      </div>

      {tab === "d" ? (
        <List foods={foods} setFoods={setFoods} />
      ) : (
        <div className="mt-[20px] translate-y-[100px]">
          <h1 className="text-center text-[1.3rem] font-semibold mb-8">
            BMR Calculator
          </h1>
          <div className="bg-[#b497d61a] px-20 pb-20 pt-10 rounded-2xl">
            <BMR />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

// #2f0831 - Primary
// #B497D6 - Secondary
