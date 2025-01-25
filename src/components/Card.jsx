import { FaTrashAlt } from "react-icons/fa";

const Card = (props) => {
  const { foods, setFoods, index, food } = props;
  let example = "";
  if (index == 0) {
    example = " - Total Calories";
  }

  const handleDelete = () => {
    const newArray = foods.filter((_, i) => i !== index);
    setFoods(newArray);
  };
  return (
    <div className="flex gap-2">
      <div className="w-[500px] bg-[#b497d61a] flex flex-col pl-2 pt-2 my-2 rounded-md">
        <p>{food.FoodName}</p>
        <p className="text-[1.3rem] font-bold">
          {food.Calories} KJ {example}
        </p>
        <div className="flex gap-5 pb-2 opacity-80">
          <p>Protein : {food.Protein}g</p>
          <p>Carbohydrate : {food.Carbohydrate}g</p>
          <p>Fats : {food.Fats}g</p>
        </div>
      </div>
      <button
        onClick={() => {
          window.confirm("Are you sure you want to delete this item?")
            ? handleDelete()
            : null;
        }}
      >
        <FaTrashAlt className="text-red-600 scale-125 cursor-pointer" />
      </button>
    </div>
  );
};

export default Card;
