import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductTitle from "../../components/Title";
import ProductCard from "../../components/ProductCard";
import { getProduct } from "../../api/product";

const List = () => {
  
  let [loading, setloading] = useState(false);
  let [productlist, setproductlist] = useState([]);
  useEffect(() => {
    setloading(true);

    getProduct()
      .then((response) => {
        setproductlist(response.data);

        setloading(false);
      })
      .catch();
  }, []);

  if (loading) return <div className="mt-10 text-2 text-center">Loading......</div>;

  return (
    <section>
      <ProductTitle />
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 mt-5">
        {productlist.map((product) => (
          <ProductCard key={product.id} id={product._id} sold={product.createdBy} url={product.url} {...product} />
        ))}
      </div>
    </section>
  );
};
export default List;
