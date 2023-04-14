import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";

const House = ({ house }) => {
  return (
    <>
      <div
        className="item bg-white shadow-1 p-5 rounded-lg  w-full max-w-[352px] max-h-[520px] mx-auto cursor-pointer hover:shadow-2xl transition"
        key={house.id}
      >
        <div className="house-image">
          <img className="mb-8" src={house.image}></img>
        </div>
        <div className="mb-4 flex gap-x-2 text-sm">
          <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
            {house.country}
          </div>
        </div>
        <div className="text-lg font-semibold max-w-[260px]">
          {house.address}
        </div>
        <div className="flex gap-x-4 my-4">
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] rounded-full">
              <BiBed />
            </div>
            <div className="text-base">{house.bedrooms}</div>
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] rounded-full">
              <BiBath />
            </div>
            <div className="text-base">{house.bathrooms}</div>
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] rounded-full">
              <BiArea />
            </div>
            <div className="text-base">{house.surface}</div>
          </div>
        </div>
        <div className="text-lg font-semibold text-violet-600 mb-4">
          $ {house.price}
        </div>
        <Link to={`/housedetails/${house.id}`}>More info </Link>
      </div>
    </>
  );
};

export default House;
