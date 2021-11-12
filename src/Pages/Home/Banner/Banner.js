import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row ">
          <div className="col-md-6"></div>
          <div className="col-md-6 text-white text-start banner-text">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <h1 className="fw-bold mb-4">FLAT</h1>
                <h2 className="fs-4">50% OFF</h2>
                <h2 className="fs-4">ON RETROGLASSES</h2>
                <button className="btn btn-warning px-3 fw-bold py-2">
                  Shop Now{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
