import React from "react";
import iphone from "../assets/imgs/iphone.png";
import samsungs24 from "../assets/imgs/samsungs24.png"
import { FaHeart, FaShoppingBag, FaShoppingCart, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const ProductDetail = () => {
  return (
    <section class=" bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Secondary Product Image */}
          <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="" src={samsungs24} alt="" />
            {/* Secondary Product Image */}
            <div className="flex gap-3 justify-center items-center">
              <div className="w-auto h-auto rounded-sm border-slate-300 border-2">
                <img className="w-[100px] h-[75px]" src={samsungs24} alt="" />
              </div>
              <div className="w-auto h-auto rounded-md border-slate-300 border-2">
                <img className="w-[100px] h-[75px]" src={iphone} alt="" />
              </div>
              <div className="w-auto h-auto rounded-md border-slate-300 border-2">
                <img className="w-[100px] h-[75px]" src={iphone} alt="" />
              </div>
              <div className="w-auto h-auto rounded-md border-slate-300 border-2">
                <img className="w-[100px] h-[75px]" src={iphone} alt="" />
              </div>
            </div>
          </div>

          <div class="mt-6 sm:mt-8 lg:mt-0">
            {/* Brand and Category */}
            <div class="flex text-white">
              <div className=" px-2 bg-green-600 border-2 rounded-md flex items-center gap-3 font-semibold">
                <span className="">Brand</span>
              </div>
              <div className=" px-2 bg-green-600 border-2 rounded-md flex items-center gap-3 font-semibold">
                <span className="">Category</span>
              </div>
            </div>
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
              Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
              Mac OS, Pink
            </h1>
            <div class="mt-4 items-center gap-4 flex">
              <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                $1,249.99
              </p>
              <div className="bg-green-600 py-1 px-3 rounded-md flex items-center gap-2 text-white font-bold">
                <FaStar />
                <span>3.5</span>
              </div>
            </div>

            <div class=" mt-6 sm:gap-5 sm:items-center sm:flex sm:mb-8 ">
              <div className="py-2 px-3 border-slate-600 border-2 rounded-md hover:bg-green-300 flex items-center gap-3 font-semibold ">
                <CiHeart className="text-[24px]" />
                <span className="xs:text-center">Add to favorites</span>
              </div>
              <div className="text-white py-2.5 px-3.5 bg-green-600 hover:bg-green-950 rounded-md flex items-center gap-3 font-">
                <FaShoppingCart className="text-[16px]" />
                <span className="">Add to Cart</span>
              </div>
            </div>

            <hr class="my-6 md:my-8 border-gray-300" />

            <p class="mb-6 text-gray-500 dark:text-gray-400">
              Studio quality three mic array for crystal clear calls and voice
              recordings. Six-speaker sound system for a remarkably robust and
              high-quality audio experience. Up to 256GB of ultrafast SSD
              storage.
            </p>

            <p class="text-gray-500 dark:text-gray-400">
              Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
              Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
              Magic Keyboard or Magic Keyboard with Touch ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
