import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="border-b-2 border-[#e7eaf0]">
          <div className="flex justify-between gap-4 py-4 items-center ">
            <FaRegHeart size={25}></FaRegHeart>
            <h1 className="text-[#0E2954] text-2xl font-bold">
              Favorite Items
            </h1>
          </div>
        </figure>
        <div className="card-body border-b-2 border-[#e7eaf0]">
          <div className="">
            <h2 className=" text-center text-xl font-bold mb-2">
              No favorites yet
            </h2>
            <p className="text-center">
              Click the heart icon on any item <br /> to add it to your
              favorites
            </p>
          </div>
        </div>

        <div className="flex justify-between mx-8 py-5">
          <h1 className="text-xl ">Total bids Amount</h1>
          <h1 className="text-xl ">$0000</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
