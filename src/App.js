import React, { useState, useEffect } from 'react';
import Header from "./component/Header";
import Banner from "./component/Banner";
import ProductFeed from "./component/ProductFeed";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
      }
    };

    fetchProducts();
  }, []);

  
  

  return (
    <div className="bg-gray-200">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export default App;
