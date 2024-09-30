import React from "react";
import iphone from "../assets/imgs/iphone.png";
import { FaHeart, FaStar } from "react-icons/fa";

const ProductCard = (props) => {
  const { name, brand, category, price } = props;
  return (
    <>

      <div className=" border-2 border-slate-100 md:w-25 h-[400px] rounded-md hover:shadow-md p-3">
        <div className=" m-auto items-center w-25 h-[200px]">
          <FaHeart className="inline-block text-2xl text-slate-500 active:text-red-600 hover:text-red-600" />
          <span className="bg-red-600 px-2 py-[1px] rounded ml-2 font-bold text-xs text-white">
            {category}{" "}
          </span>
          <img src={iphone} alt="" className="w-[200px] h-[200px] m-auto" />
        </div>
        <div className="mt-">
          <span className="bg-slate-600 px-2 py-[2px] rounded font-bold text-xs text-white">
            {brand}{" "}
          </span>
          <span className="bg-green-600 px-2 py-[2px] ml-2 font-bold rounded text-xs text-white">
            30% OFF{" "}
          </span>
        </div>
        <div className="">
          <h1 className="text-[18px] font-semibold text-green-900">{name}</h1>
        </div>
        <div className="mt-1">
          <span className="text-2xl font-bold text-green-900">${price}</span>
          <span className="text-xl font-semibold line-through ml-2 text-green-700">
            ${Math.floor(price / 0.8)}
          </span>
        </div>
        <div className="mt-4 flex gap-4">
          <button className="bg-green-600 px-3 py-2 rounded-md text-white font-semibold hover:bg-green-900">
            Buy Now
          </button>
          <span className="flex items-center text-green-900 text-[16px] font-semibold">

            <FaStar className="ml-1 text-yellow-600"></FaStar>
          </span>
        </div>
      </div>

    </>
  );
};

export default ProductCard;
