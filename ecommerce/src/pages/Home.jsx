import React from "react";
import Annoucement from "../component/Annoucement";
import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import NewsLetter from "../component/NewsLetter";
import Products from "../component/Products";
import Slider from "../component/Slider";

const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
