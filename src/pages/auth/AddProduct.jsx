import React, { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList';
import { getProduct } from '../../api/product';
import { FaCloudUploadAlt, FaFileUpload, FaUpload } from 'react-icons/fa';

const AddProduct = () => {
  let [loading, setloading] = useState(false);
  let [addproduct, setproductlist] = useState([]);
  useEffect(() => {
    setloading(true);

    getProduct()
      .then((response) => {
        setproductlist(response.data);

        setloading(false);
      })
      .catch();
  }, []);
  return (
    <section className='py-32 text-black-700'>
      <div className='flex justify-between my-4'>
        <h1 className='text-2xl text-gray-700 font-semibold'>Products Items</h1>
        <button className="flex items-center gap-1 sm:w-auto border-gray-400 border-2 px-4 py-2 rounded-md text-gray-800">
            Upload <FaUpload/>
          </button>
      </div>
      <div className="grid lg:grid-cols-1 gap-4 ">
        {addproduct.map((product) => (
          <ProductsList key={product.id} id={product._id} sold={product.createdBy} url={product.url} {...product} />
        ))}
      </div>
    </section>
    
  );
}

export default AddProduct;
