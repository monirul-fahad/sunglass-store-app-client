import React from "react";
import "./Testimonial.css";

const Testimonial = ({ review }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        style={{ backgroundColor: "white" }}
        className="testimonial-card p-4 rounded mb-5 mx-3"
      >
        <div>
          <h3>{review.productName}</h3>
          <p>Review by: {review.name}</p>
        </div>

        <p>{review.description} </p>
      </div>
    </div>
  );
};

export default Testimonial;
