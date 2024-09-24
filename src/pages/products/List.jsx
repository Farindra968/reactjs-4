import React from 'react'
import Header from '../../components/Header';
import ProductTitle from '../../components/Title';
import ProductCard from '../../components/ProductCard';

const List = () => {
  return (
    <section>
      <Header/>
      <ProductTitle/>
      <div className='grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2 mt-5'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
    );
}
export default List
