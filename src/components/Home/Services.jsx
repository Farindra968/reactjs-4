import React from 'react'
import { FaShip } from 'react-icons/fa6';

const Services = (props) => {
  return (
    <>

      <div className=' xs:w-full xs:text-center xs:mb-3 lg:w-1/4 h-auto px-4  py-5 lg:gap-3 lg:flex justify-center lg:justify-center items-center  hover:shadow-md border-gray-300 hover:bg-gray-50 border-2 rounded-md'>
        <div className=' xs:flex xs:justify-center lg:max-h-none text-2xl text-white w-[40px] h-[40px]  p-2 bg-orange-600 rounded-full'>
          {props.icon}
</div>
        <div>
          <h2 className=' text-black text-xl font-semibold' >{props.label}</h2>
        </div>
      </div>
      
    </>
  )
}

export default Services;
