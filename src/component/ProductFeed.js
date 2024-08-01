import React from "react";
import Product from "./Product";
import Banner from "../assets/banner.webp"

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-48 mx-auto">
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          title={title}
          id={id}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
      
    </div>
  );
}

export default ProductFeed;
