import React from "react";
import shoes from "../assets/shoes.png";
import { FaShop } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import List from "../pages/products/List";

const HeroSection = () => {
  return (
    <>
      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className= "w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <p className="italic text-2xl font-bold text-blue-600 animate-pulse">
                  Dashain New Arrival
                </p>
                <h1 className="text-6xl font-bold italic">
                  <span className="text-indigo-700 ">Sneakers</span>
                  <span className="animate-pulse">
                    {" "}
                    Up to 50% Off Men's Sneakers
                  </span>
                </h1>

                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <NavLink
                    to={List}
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                  >Shop Now <FaShop className="ml-2" /></NavLink>
                  <NavLink className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">Explore More</NavLink>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overfl">
                <img className="w-full h-auto" src={shoes} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
