import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductTitle from "../../components/Title";
import ProductCard from "../../components/ProductCard";
import { getproduct } from "../../api/product";

const List = () => {
  let [loading, setloading] = useState(false);
  let [productlist, setproductlist] = useState([]);
  useEffect(() => {
    setloading(true);

    getproduct()
      .then((response) => {
        setproductlist(response.data);

        setloading(false);
      })
      .catch();
  }, []);

  if (loading) return <div className="mt-10 text-2xl text-center">Loading......</div>;

  return (
    <section>
      <ProductTitle />
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 mt-5">
        {productlist.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
export default List;
