import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategorieCard from "../components/CategorieCard";
import Services from "../components/Home/Services";
import { FaContao, FaCreditCard, FaShip } from "react-icons/fa6";
import { FaRegCaretSquareDown, FaShippingFast } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { BiSupport } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className=" lg:flex-row lg:w-full md:flex-row w-1/4 h-auto xs:gap-4 xs:w-full xs:flex-col md:flex lg:justify-center lg:items-center gap-3 mb-5">
        <Services  label="Cash on Delivery" icon={<SiCashapp />} />
        <Services label="45 Days Refund Policy" icon={<RiRefund2Fill/>}/>
        <Services label="Free Shiping" icon={<FaShippingFast />}/>
                <Services label="24 Hour Support" icon={<BiSupport />} />
      </section>
      <section>
        <CategorieCard />
      </section>
    </>
  );
};

export default Home;
