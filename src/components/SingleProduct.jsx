import React, { useContext } from 'react'
import {FaCartArrowDown} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { Product_Context } from '../context/Product_Context'

const SingleProduct = ({product}) => {
    const {title,price,image,features} = product
    const {addToCart,reviewPage} = useContext(Product_Context)
  return (
    <>
        <div className="border p-2 rounded-md">
            <img src={image} alt="/" className='w-[200px] h-auto'/>
                <div className="px-4 my-2">
                    <Link to="./review" onClick={() => reviewPage(product)}>
                       <p className='font-bold text-gray-800 hover:underline-offset-2 hover:underline'>{title.name}</p>
                    </Link>
                </div>
                <div className="px-4 my-2">
                    {features.map((list) => <li key={list} className='text-sm text-gray-700 my-1'>{list}</li>)}
                </div>
                <hr className='w-[90%] mx-auto my-2'/>
                <div className="">
                    <p className='font-bold my-2 ml-4 text-orange-500'>Price: {price} Taka</p>
                </div>
                <div className="text-center px-2">
                    <button onClick={() => addToCart(product)} className='bg-[#eaecf8] flex gap-2 justify-center items-center w-full py-2 transition-all text-sm duration-300 font-semibold rounded-md text-[#3749bb] hover:bg-[#3749bb] hover:text-[#eaecf8]'>Buy Now <FaCartArrowDown className='text-base'/></button>
                </div>
        </div>
    </>
  )
}

export default SingleProduct