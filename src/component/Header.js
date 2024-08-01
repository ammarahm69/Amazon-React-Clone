import Logo from "../assets/amazon_PNG11.png";
import "./Header.css";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import SignInButton from './SignIn';
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Header() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-nav flex-grow px-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <img
            src={Logo}
            alt=""
            width={130}
            height={40}
            className="object-contain cursor-pointer"
          />
        </div>
        {/* Input Field */}
        <div className="cursor-pointer mx-6 hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="cursor-pointer hover:underline">
            <p>{user ? `Hello ${user.displayName}` : ""}</p>
            {!user && <SignInButton />}
          </div>
          <div className="cursor-pointer hover:underline">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="relative flex items-center cursor-pointer hover:underline">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-bold md:text-sm hidden md:inline">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center bg-nav-light text-white space-x-3 p-2 pl-6">
        <p className="flex items-center cursor-pointer hover:underline">
          <MenuIcon className="h-6 mr-2" />
          All Items
        </p>
        <p className="cursor-pointer hover:underline">Amazon Business</p>
        <p className="cursor-pointer hover:underline">Prime Video</p>
        <p className="cursor-pointer hover:underline">Today's Deals</p>
        <p className="cursor-pointer hover:underline hidden lg:inline-block">
          Electronics
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-block">
          Food & Grocery
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-block">
          Prime
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-block">
          Buy Again
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-block">
          Shop Toolkit
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-block">
          Health & Care
        </p>
      </div>
    </header>
  );
}

export default Header;
