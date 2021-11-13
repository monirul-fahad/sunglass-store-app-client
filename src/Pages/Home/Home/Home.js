import React from "react";
import Testimonials from "../../Dashboard/Testimonial/Testimonials";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Products from "../Products/Products/Products";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Testimonials></Testimonials>

      <Footer></Footer>
    </div>
  );
};

export default Home;
