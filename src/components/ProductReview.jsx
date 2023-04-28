import React, { useContext } from "react";
import { Product_Context } from "../context/Product_Context";
import { FaCartArrowDown } from "react-icons/fa";
import {IoIosAdd , IoIosRemove} from "react-icons/io"

const ProductReview = () => {
  const {cart, page,addToCart, incrementQuantity,decrementQuantity} = useContext(Product_Context);
  const filtered = cart.filter((item) => item.id === page.id)
  const quanArr = filtered.map((item) => item.quantity)
  const quantity = quanArr[0]

  return (
    <div className="w-full h-[80vh] p-14">
      <div className="px-4 py-8 flex gap-14 items-start rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <img src={page.image} alt="/" className="w-[420px]" />
        <div className="mt-6">
          <p className="text-4xl font-semibold text-gray-900 ">{page.title.name}</p>
          <div className="mt-10 my-2">
            <p className="text-2xl font-medium text-gray-900 mb-2">Key features</p>
            {page.features.map((list) => (
              <p key={list} className="text-gray-700 font-medium my-1">
                {list}
              </p>
            ))}
          </div>
          <p className="text-xl font-medium text-gray-900 mb-8">
            Price:
            <span className="text-2xl font-semibold mx-1 text-orange-500">
              {page.price}
            </span>
            Taka
          </p>
          <div className="flex gap-6">
            <div className="flex items-center justify-between bg-[#eaecf8] w-[200px] p-3 rounded-md">
              <button className="text-gray-800" onClick={() => decrementQuantity(page.id)}>
              <IoIosRemove className="text-xl"/>
              </button>
              <p className="font-semibold text-xl text-[#3749bb]">{quantity ? quantity : 0}</p>
              <button className="text-gray-800" onClick={() => incrementQuantity(page.id)}>
              <IoIosAdd className="text-xl"/>
              </button>
            </div>
          <button
            onClick={() => addToCart(page)}
            className="bg-[#eaecf8] flex gap-4 justify-center items-center w-full py-3 transition-all text-2xl duration-300 font-semibold rounded-md text-[#3749bb] hover:bg-[#3749bb] hover:text-[#eaecf8]"
          >
            Buy Now <FaCartArrowDown className="text-2xl" />
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
