import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import ProductList from "../components/list/ProductList";
import ProductHero from "../components/list/ProductHero";
import React, { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";

const List = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-[200rem] w-full mx-auto">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div>
          <div className="">
            <Navbar />
          </div>
          <div className="max-w-[140rem] w-full mx-auto">
            <div>
              <ProductHero />
            </div>
            <div>
              <ProductList />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
