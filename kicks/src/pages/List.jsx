import React from "react";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import ProductList from "../components/list/ProductList";

const List = () => {
  return (
    <div className="max-w-[200rem] w-full mx-auto">
      <div className="">
        <Navbar />
      </div>
      <div className="max-w-[140rem] w-full mx-auto">
        <div className="">
          <ProductList />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default List;
