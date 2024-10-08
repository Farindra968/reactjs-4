import React from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const ProductTitle = () => {
  return (
    <section className='flex justify-between items-center mt-[75px] border-b-4 pb-2 rounded-md text-green-700 text-2xl font-bold'>
          <h1 className=''>New Arrival</h1>
          <FaArrowAltCircleRight/>
    </section>
  )
}

export default ProductTitle
