import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import ProductFeed from "./component/ProductFeed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {}
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="bg-gray-200">
        <Header />
        <main className="max-w-screen-2xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <ProductFeed products={products} />
                </>
              }
            />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
