import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import CheckOut from "./components/cart/CheckOut";
import Login from "./pages/Login";
import CheckedSuccess from "./components/cart/CheckedSuccess";
import SignUp from "./pages/SignUp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Type of animation easing
      delay: 100, // Delay before starting the animation
      offset: 100, // Offset from the element's position
      once: true, // Whether animation should happen once or every scroll
      mirror: false, // Animate elements when scrolling past them
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Analytics />
      <SpeedInsights />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<List />} />
          <Route path="/shop/:name" element={<List />} />
          <Route path="/product/:name" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/checked-success" element={<CheckedSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
