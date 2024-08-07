import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../component/CheckoutProduct";
function Checkout() {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100 flex-col m-auto max-w-2xl">
      {/* Left */}
      <div className="flex-grow m-2 shadow-sm">
        <img
          src="https://links.papareact.com/ikj"
          alt=""
          width={1020}
          height={250}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col p-5 space-y-10 bg-white">
        <h1 className="text-3xl border-b pb-4">
          {items.length === 0
            ? "Your Amazon Basket is empty"
            : "Shopping Basket"}
        </h1>

        {items.map((items, i) => (
          <CheckoutProduct
            key={i}
            id={items.id}
            title={items.title}
            rating={items.rating}
            price={items.price}
            description={items.description}
            hasPrime={items.hasPrime}
            category={items.category}
            image={items.image}
          />
        ))}
      </div>

      {/*Right  */}

      <div>
        {items.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">({items.length} items)</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
