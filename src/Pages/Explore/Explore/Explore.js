import React, { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import ExploreItem from "../ExploreItem/ExploreItem";

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Header></Header>
      <div className="py-5 mt-5 container ">
        <div className="mb-5">
          <h3>Available All Glasses</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-3">
          {products.map((product) => (
            <ExploreItem key={product._id} product={product}></ExploreItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
