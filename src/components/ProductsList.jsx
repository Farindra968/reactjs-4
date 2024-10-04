import React from "react";
import iphone from "../assets/imgs/iphone.png";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  const { _id, name, brand, category, price, url } = props;
  return (
    <section classname=" border-gray-700 w-auto h-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between p-2 space-y-4 sm:space-y-0 sm:space-x-4 border rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-grow">
          <div className="w-24 h-24 relative">
            <img
              src={url ?? iphone}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start space-y-2 flex-grow">
            <div className="flex gap-1">
            <button className="w-auto sm:w-auto bg-green-600 px-1 py-0.5 rounded-md text-white">
            {brand}
              </button>
              <button className="w-auto sm:w-auto bg-green-600 px-1 py-0.5 rounded-md text-white">
            {category}
          </button>
            </div>
            <h2 className="text-2xl text-gray-900 font-semibold text-center sm:text-left">
              {name}
            </h2>
            <p className="text-gray-700 text-[20px] font-semibold">$ {price}</p>
          </div>
        </div>
        <div className="flex gap-2 sm:flex pb-2 ">
        <button className="w-full sm:w-auto bg-green-600 hover:bg-green-400 px-4 py-2 rounded-md text-white">
            Update
          </button>
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-400 px-4 py-2 rounded-md text-white">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
