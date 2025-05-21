import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Card = ({ likedItems, handleRemove }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="border-b-2 border-[#e7eaf0]">
          <div className="flex justify-between gap-4 py-4 items-center">
            <FaRegHeart size={25} />
            <h1 className="text-[#0E2954] text-2xl font-bold">
              Favorites: {likedItems.length}
            </h1>
          </div>
        </figure>

        <div className="card-body border-b-2 border-[#e7eaf0]">
          {likedItems.length === 0 ? (
            <div>
              <h2 className="text-center text-xl font-bold mb-2">
                No favorites yet
              </h2>
              <p className="text-center">
                Click the heart icon on any item <br /> to add it to your
                favorites
              </p>
            </div>
          ) : (
            <div className="text-left">
              {likedItems.map((liked) => (
                <p key={liked.id}>
                  <div className="flex gap-5 mb-5 border-3 rounded-2xl p-3 ">
                    <img
                      className="w-16 h-[70px] p-1 border-3 rounded-2xl"
                      src={liked.image}
                      alt=""
                    />
                    <div>
                      <p className="font-bold">{liked.title}</p>
                      <p className="font-bold">${liked.currentBidPrice}</p>
                      <p className="font-bold">{liked.bidsCount}</p>
                    </div>
                    <div className="flex  items-center">
                      <button
                        onClick={() => handleRemove(liked.id)}
                        className="hover:bg-red-600 hover:text-white"
                      >
                        <RxCross2 size={30} />
                      </button>
                    </div>
                  </div>
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between mx-8 py-5">
          <h1 className="text-xl">Total bids Amount</h1>
          <h1 className="text-xl">
            $
            {likedItems.reduce(
              (total, item) => total + parseFloat(item.currentBidPrice),
              0
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
