import React, { useEffect, useState } from "react";
import iphone from "../assets/imgs/iphone.png";
import samsungs24 from "../assets/imgs/samsungs24.png";
import { FaHeart, FaShoppingBag, FaShoppingCart, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NavLink, useParams } from "react-router-dom";
import { getProductByid } from "../api/product";
import List from "../pages/products/List";
import ProductDetails from "../pages/products/Details";

const ProductDetail = () => {
  const param = useParams();
  console.log(param);
  let [loading, setloading] = useState(true);
  let [product, setproduct] = useState([]);
  useEffect(() => {

    getProductByid(param.id)
      .then((response) => {
        setproduct(response.data);
        console.log(response.data);
        

        setloading(false);
      })
      .catch();
  }, []);

  if (loading)
    return <div className="mt-10 text-2 text-center">Loading......</div>;

  return (
    <section class=" bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        {/* Secondary Product Image */}
        <div class=" max-w-md lg:max-w-lg mx-auto">
          <img className="rounded-xl" src={product.url ?? iphone} alt="" />
          {/* Secondary Product Image */}
          <div className="flex gap-3 justify-center items-center mt-3">
            <div className="w-auto h-auto rounded-sm border-slate-300 border-2">
              <img className="w-[100px] h-[75px]" src={product.url ?? iphone} alt="" />
            </div>
            <div className="w-auto h-auto rounded-md border-slate-300 border-2">
              <img className="w-[100px] h-[75px]" src={product.url ?? iphone} alt="" />
            </div>
            <div className="w-auto h-auto rounded-md border-slate-300 border-2">
              <img className="w-[100px] h-[75px]" src={product.url ?? iphone} alt="" />
            </div>
            <div className="w-auto h-auto rounded-md border-slate-300 border-2">
              <img className="w-[100px] h-[75px]" src={product.url ?? iphone} alt="" />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
          {/* Brand and Category */}
          <div class="flex text-white">
            <div className=" px-2 bg-green-600 border-2 rounded-md flex items-center gap-3 font-semibold">
              <span className="">{product.brand}</span>
            </div>
            <div className=" px-2 bg-green-600 border-2 rounded-md flex items-center gap-3 font-semibold">
              <span className="">{product.category}</span>
            </div>
          </div>
          <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
            {product.name}
          </h1>
          <div class="mt-4 items-center gap-4 flex">
            <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              <sup>$</sup>{product.price}
            </p>
            <p class="text-[25px] line-through text-red-700 sm:text-3xl">
              <sup>$</sup>{Math.floor(product.price/0.7)}
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
          <p className="font-semibold"><span className="text-green-800">Sold By:</span> 
          <NavLink to={List}>{product.createdBy}</NavLink></p>

          <hr class="my-3 border-gray-300" />

          <p class="mb-6 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cumque provident fugit dignissimos ratione voluptatibus, sequi fuga vero? Laudantium unde consequatur tempore aut nostrum, quo dolorum at doloribus veniam dolorem!
          </p>

          <p class="text-gray-500 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis totam consequuntur dolorem alias ipsum cum ratione unde blanditiis minima, numquam quibusdam quod a laborum, sapiente quasi minus dolorum accusamus eius.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProductDetail;
