import React from 'react'
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail';

const ProductDetails = () => {
  const params=useParams();
  
  return (
    <section className=''>
      <ProductDetail/>
    </section>
    );
}

export default ProductDetails
