import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { _id, name, description, img, price } = props.product;
  return (
    <div className="">
      <div className="col  mb-3">
        <div className="card  shadow rounded  border-0 h-100">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body text-start">
            <h5 className="pt-2 fw-bold">{name}</h5>
            <h5 className="py-2 fw-bold">${price}</h5>
            <p className="card-text fw-bold">{description.slice(0, 110)}</p>
          </div>
          <div className="card-footer border-0 bg-white">
            <Link to={`/productDetails/${_id}`}>
              <button className="btn btn-success">Purchase</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
