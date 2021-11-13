import React from "react";

const Testimonial = ({ review }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        style={{ backgroundColor: "white" }}
        className="p-4 rounded mb-5 shadow"
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
