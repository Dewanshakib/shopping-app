import React, { useContext } from "react";
import { Product_Context } from "../context/Product_Context";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeItem } =
    useContext(Product_Context);


  return (
    <div className="flex flex-col gap-5 p-8">
      {cart.map((item) => {
        return (
          <div key={item.id} className="flex items-start gap-[60px]">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product price (Taka)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img src={item.image} alt="/" className="w-[120px]" />
                  </th>
                  <td className="px-6 py-4 text-[17px] text-gray-800 w-[466.86px]">
                    {item.title.name}
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="flex flex-row items-center gap-4 ml-10 text-[17px]">
                      <button onClick={() => decrementQuantity(item.id)}>
                        <AiOutlineMinusCircle />
                      </button>
                      {item.quantity}
                      <button onClick={() => incrementQuantity(item.id)}>
                        <AiOutlinePlusCircle />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[17px]">
                    {Number(item.price * item.quantity)} Taka
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              className="flex gap-2 border px-3 py-2 rounded-lg bg-red-400 font-semibold outline duration-300 text-white hover:bg-red-500 focus:outline-1 focus:outline-red-500"
              onClick={() => removeItem(item.id)}
            >
              Delete <MdOutlineRemoveShoppingCart className="text-xl " />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
