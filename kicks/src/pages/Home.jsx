import { useState } from "react";
import Navbar from "../components/general/Navbar";
import Hero from "../components/home/Hero";
import Drops from "../components/home/Drops";
import Category from "../components/home/Category";
import Review from "../components/home/Review";
import Footer from "../components/general/Footer";
import Loader from "../components/loader/Loader";

const Home = () => {
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
            <div className="">
              <Hero />
            </div>
            <div className="">
              <Drops title="Don’t miss out new drops" />
            </div>
            <div className="">
              <Category />
            </div>
            <div className="">
              <Review />
            </div>
            <div className="">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
