import { useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import Card from "./Card";
import { FcCheckmark } from "react-icons/fc";

const Tables = ({ tab, handldAdd }) => {
  const [liked, setLiked] = useState(false);
  const handleClicked = () => {
    setLiked(true);
    toast.custom(
      <div className="bg-white px-4 py-2 rounded shadow-md flex items-center gap-2">
        <FcCheckmark size={20} />
        <span>Item Added to your Favorite Lists</span>
      </div>
    );
  };
  return (
    <tbody className=" border-t-2 border-[#e7eaf0]">
      {/* row 1 */}
      <tr>
        <th className="flex gap-5 items-start">
          <img className="w-12 h-10" src={tab.image} alt="" />
          <p className="text-[#0E2954] text-[10px] font-medium">{tab.title}</p>
        </th>
        <td>${tab.currentBidPrice}</td>
        <td className="text-xs ">{tab.timeLeft}</td>
        <td className=" pl-7">
          <button
            onClick={() => {
              handleClicked();
              handldAdd(tab);
            }}
            className={`relative p-2 rounded transition duration-300 ${
              liked ? "cursor-not-allowed" : "hover:scale-110"
            }`}
          >
            <FaHeart
              className={liked ? "text-red-500" : "text-gray-400"}
              size={20}
            />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Tables;
