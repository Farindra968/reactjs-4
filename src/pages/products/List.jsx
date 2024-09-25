import React from 'react'
import Header from '../../components/Header';
import ProductTitle from '../../components/Title';
import ProductCard from '../../components/ProductCard';
import product from "../../data"

const List = () => {
  return (
    <section>
      <Header/>
      <ProductTitle/>
      <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 mt-5'>
        {product.map((product)=>(
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          brand={product.brand}
          review={product.review}
        />
        ))}
      </div>
    </section>
    );
}
export default List
