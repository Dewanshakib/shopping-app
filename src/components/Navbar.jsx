import React, { useContext, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Product_Context } from "../context/Product_Context";
import { FiLogIn } from "react-icons/fi";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
  const { cart, search, handleInput  } = useContext(Product_Context);
  const { handleLogin, user , handleSignOut} = useContext(LoginContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="w-full flex h-20 justify-between items-center px-16 bg-slate-700 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-[14%]">
          <a href="/">
            <img src="./logo.png" alt="/" className="w-[110px] h-auto" />
          </a>

          <input
            value={search}
            onChange={handleInput}
            type="text"
            placeholder="Enter product name "
            className="relative py-2 pl-6 w-[500px] rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center gap-6 relative">
          <Link
            to="/cart"
            className="text-white flex text-xl items-center gap-1 relative"
          >
            <GiShoppingCart className="text-2xl text-blue-200" />
            <span className="w-[16px] h-[16px] absolute top-[-4px] right-[-11px] flex justify-center items-center font-bold  bg-gray-100 rounded-full  text-[11px] text-red-500">
              {cart.length}
            </span>
          </Link>

          {user ? (
            <div
              onClick={handleClick}
              className="w-[40px] h-[40px] rounded-full border"
            >
              <img
                src={user.photoURL}
                alt=""
                className="rounded-full relative"
              />
              {isOpen ? (
                <div className="absolute w-[142px] rounded-[18px] top-[50px] left-[-4px] bg-gray-800 h-auto p-[10px]">
                  <div className="text-gray-100 w-full flex flex-col justify-center items-center">
                    <button className="px-[25px] rounded-[18px] py-2  h-auto focus:bg-gray-500">
                      User info
                    </button>
                    <button onClick={() => handleSignOut()} className="px-[25px] rounded-[18px] py-2 h-auto focus:bg-gray-500">
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <button
              onClick={() => handleLogin()}
              className="text-xl text-gray-50"
            >
              <FiLogIn className="text-white text-2xl" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
