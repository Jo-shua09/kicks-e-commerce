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

function App() {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: "ease-in-out", // Type of animation easing
    delay: 0, // Delay before starting the animation
    offset: 0, // Offset from the element's position
    once: true, // Whether animation should happen once or every scroll
    mirror: false, // Animate elements when scrolling past them
  });

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<List />} />
          <Route path="/shop/:id" element={<List />} />
          <Route path="/product/:id" element={<Product />} />
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
