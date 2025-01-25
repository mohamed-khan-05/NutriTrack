import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddBar = (props) => {
  const { foods, setFoods } = props;
  const [text, setText] = useState({
    FoodName: null,
    Protein: null,
    Carbohydrate: null,
    Fats: null,
    Calories: null,
  });
  const handleChange = (e) => {
    let field = e.target.id;
    let value = e.target.value;
    setText((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleAdd = () => {
    if (!text.FoodName || !text.Protein || !text.Carbohydrate || !text.Fats) {
      return toast.error("Fill all fields");
    }
    const protein = Number(text.Protein);
    const carbohydrate = Number(text.Carbohydrate);
    const fats = Number(text.Fats);

    const cal = protein * 4 + carbohydrate * 4 + fats * 9;
    const newFood = {
      ...text,
      Calories: cal,
    };
    setFoods([...foods, newFood]);
    document.getElementById("Protein").value = "";
    document.getElementById("Carbohydrate").value = "";
    document.getElementById("Fats").value = "";
    document.getElementById("FoodName").value = "";
    setText({
      FoodName: null,
      Protein: null,
      Carbohydrate: null,
      Fats: null,
      Calories: null,
    });
  };

  return (
    <div className="w-[100vw] flex flex-col items-center gap-4 mt-8 text-[1.2rem]">
      <div>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          id="FoodName"
          placeholder="Food Name"
          className="border pl-2 rounded-sm"
          type="text"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          id="Protein"
          placeholder="Protein (g)"
          className="border w-[130px] mx-2 pl-2 rounded-sm"
          type="number"
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          id="Carbohydrate"
          placeholder="Carbs (g)"
          className="border w-[130px] mx-2 pl-2 rounded-sm"
          type="number"
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          id="Fats"
          placeholder="Fats (g)"
          className="border w-[130px] mx-2 pl-2 rounded-sm"
          type="number"
        />
      </div>

      <div>
        <button
          onClick={() => {
            handleAdd();
          }}
          className="border-1 cursor-pointer px-8 py-1 rounded-2xl bg-[#B497D6] border-[#1702182c] hover:bg-[#7b437e]"
        >
          Add
        </button>
      </div>
      <div className="text-[1rem]">
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddBar;
