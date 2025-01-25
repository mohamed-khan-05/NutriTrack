import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const BMR = () => {
  const [ans, setAns] = useState("");
  const [gender, setGender] = useState("Male");

  const handleCalc = () => {
    let Weight = Number(document.getElementById("Weight").value);
    let Height = Number(document.getElementById("Height").value);
    let Age = Number(document.getElementById("Age").value);

    if (!Weight || !Height || !Age) {
      return toast.error("Fill all fields");
    }

    if (gender === "Male") {
      setAns(10 * Weight + 6.25 * Height - 5 * Age + 5);
    } else {
      setAns(10 * Weight + 6.25 * Height - 5 * Age - 16);
    }
  };
  return (
    <div>
      <div className="flex text-[1.1rem] gap-4 mb-4">
        <input
          onClick={() => {
            setGender("Male");
          }}
          defaultChecked="true"
          name="gender"
          id="male"
          type="radio"
        />
        <label htmlFor="male">Male</label>
        <input
          onClick={() => {
            setGender("Female");
          }}
          name="gender"
          id="female"
          type="radio"
        />
        <label htmlFor="female">Female</label>
      </div>

      <div className="flex flex-col text-[1.2rem] font-bold">
        <label htmlFor="Weight">Weight</label>
        <div className="flex">
          <input
            id="Weight"
            className="border w-[100px] mx-2 rounded-md"
            type="number"
          />
          <h1>kg</h1>
        </div>

        <label htmlFor="Height">Height</label>
        <div className="flex">
          <input
            id="Height"
            className="border w-[100px] mx-2 rounded-md"
            type="number"
          />
          <h1>cm</h1>
        </div>

        <label htmlFor="Age">Age</label>
        <div>
          <input
            id="Age"
            className="border w-[100px] mx-2 rounded-md"
            type="number"
          />
        </div>

        <button
          onClick={() => {
            handleCalc();
          }}
          className="border-2 border-[#2f08312f] bg-[#B497D6] cursor-pointer hover:bg-[#7b437e] px-2 mt-8 "
        >
          Calculate
        </button>
        <h1 className="text-[1.5rem] text-center pt-2">{ans}</h1>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BMR;
