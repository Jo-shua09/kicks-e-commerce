import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import React, { useEffect } from "react";

function App() {
  // Dispatch cart update event when component mounts
  useEffect(() => {
    window.dispatchEvent(new Event("cartUpdated"));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<List />} />
          <Route path="/shop/:id" element={<List />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
