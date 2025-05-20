import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";
const Tables = ({ tab }) => {
     const [liked,setLiked] = useState(false)
  const handleClicked =() =>{
    setLiked(true);
    toast.success("Added to favorites! ❤️");
  }
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
          <FaHeart
            onClick={() => handleClicked()}
            className={`${liked?'text-red-600 cursor-not-allowed opacity-100':'text-gray-300 hover:scale-110'}`}
            size={20}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default Tables;
