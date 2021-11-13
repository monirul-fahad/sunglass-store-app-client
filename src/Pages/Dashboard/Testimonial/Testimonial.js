import React from "react";
import "./Testimonial.css";

const Testimonial = ({ review }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        style={{ backgroundColor: "white" }}
        className="testimonial-card p-4 rounded mb-5 mx-3 text-start"
      >
        <h3> {review.name}</h3>
        <p>Product: {review.productName}</p>
        <p>{review.description} </p>
        <ul>
          <li>
            <i class="fas fa-star">f</i>
          </li>
          <li>
            <i class="fas fa-star"></i>
          </li>
          <li>
            <i class="fas fa-star"></i>
          </li>
          <li>
            <i class="fas fa-star"></i>
          </li>
          <li>
            <i class="fas fa-star"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
