import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import Product from "./Product";
function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const products = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(products));
  };

  const removeItemsFromBasket = () => {
    console.log('Removing item with id:', id); // Debugging line
    dispatch(removeFromBasket({ id }));
  };
  
  return (
    <div className="grid grid-cols-5">
      <img
        src={image}
        alt=""
        width={200}
        height={200}
        className="object-contain"
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p className="text-2xl font-bold">{price}$</p>
      </div>

      {/* Right add/remove button*/}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          className="bg-yellow-400 p-2 rounded-md text-xs"
          onClick={addItemToBasket}
        >
          Add To Basket
        </button>
        <button
          className="bg-yellow-400  p-2 rounded-md text-xs"
          onClick={removeItemsFromBasket}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
