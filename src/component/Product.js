import React, { useState } from "react";
import PrimeImage from "../assets/prime.png";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const Max_Rating = 5;
const Min_Rating = 1;

function Product({ id, title, price, description, category, image }) {
  
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * Max_Rating - Min_Rating + 1) + Min_Rating
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemsToBasket =()=>{
    //We have to dispatch first to the global store
    const product = {
      id,
      title,
      price,
      description,
      category,
      image
    };
    //Sending the product as an action to the REDUX store ... the basket slice
    dispatch(addToBasket(product))
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-0 text-sm text-gray-400">{category.toUpperCase()}</p>
      <img
      
        src={image}
        height={170}
        width={170}
        className="object-contain ps-10"
        alt=""
      />
      <h4>{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <svg
              key={i} // Add a key here for each SVG element
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
      </div>
      {hasPrime && <p>Has Prime Delivery</p>}
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, exercitationem!</p>
      <p>
        <strong>{price} $</strong>
      </p>

      {hasPrime && (
        <div className="flex items-center space-x-2">
          <img src={PrimeImage} alt="" className="w-12"/>
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto  p-2 text-xs md-text-sm bg-gradient-to-t-b from-yellow-200 to bg-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:from-yellow-500" onClick={addItemsToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
